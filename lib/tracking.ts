import { env } from "./env";

// Pixel globals injected by components/analytics/pixels.tsx
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, params?: Record<string, unknown>) => void };
    snaptr?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackUserData = {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
};

export type TrackOptions = {
  value?: number;
  currency?: string;
  userData?: TrackUserData;
  custom?: Record<string, unknown>;
};

function newEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * Fire a conversion event on every configured pixel (browser-side) and
 * mirror it to the backend Conversions API with a shared event_id so each
 * platform deduplicates the two copies.
 */
export function track(eventName: string, opts: TrackOptions = {}): string {
  const eventId = newEventId();
  const { value, currency = "SAR", userData, custom = {} } = opts;
  const pageUrl = typeof window !== "undefined" ? window.location.href : undefined;

  // ── Browser pixels ──
  if (typeof window !== "undefined") {
    const valueParams = value != null ? { value, currency } : {};
    window.fbq?.("track", eventName, { ...valueParams, ...custom }, { eventID: eventId });
    window.ttq?.track(eventName, { ...valueParams, ...custom });
    window.snaptr?.("track", eventName.toUpperCase(), { ...valueParams, ...custom });
    window.gtag?.("event", eventName, { ...valueParams, ...custom });
  }

  // ── Server mirror (Conversions API) ──
  const payload = {
    event_name: eventName,
    event_id: eventId,
    event_source_url: pageUrl,
    value,
    currency,
    user_data: {
      ...userData,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
      ttp: readCookie("_ttp")
    },
    custom_data: custom
  };

  void fetch(`${env.NEXT_PUBLIC_API_URL}/api/v1/track`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(() => {
    /* tracking is best-effort */
  });

  return eventId;
}
