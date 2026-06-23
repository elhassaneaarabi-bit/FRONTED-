import { z } from "zod";

const emptyToUndefined = (val: unknown) => (val === "" ? undefined : val);

const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.preprocess(emptyToUndefined, z.string().url().default("https://gss-fronted.h39ldq.easypanel.host")),
  NEXT_PUBLIC_API_URL: z.preprocess(emptyToUndefined, z.string().url().default("https://gss-backend.h39ldq.easypanel.host")),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.preprocess(emptyToUndefined, z.string().default("966500000000")),
  NEXT_PUBLIC_GOOGLE_MAPS_URL: z.preprocess(emptyToUndefined, z.string().optional()),
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.preprocess(emptyToUndefined, z.string().optional()),

  // ── Analytics & marketing pixels (all optional) ──
  NEXT_PUBLIC_GA4_ID: z.preprocess(emptyToUndefined, z.string().optional()),
  NEXT_PUBLIC_META_PIXEL_ID: z.preprocess(emptyToUndefined, z.string().optional()),
  NEXT_PUBLIC_TIKTOK_PIXEL_ID: z.preprocess(emptyToUndefined, z.string().optional()),
  NEXT_PUBLIC_SNAP_PIXEL_ID: z.preprocess(emptyToUndefined, z.string().optional())
});

export const env = schema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_GOOGLE_MAPS_URL: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL,
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  NEXT_PUBLIC_GA4_ID: process.env.NEXT_PUBLIC_GA4_ID,
  NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  NEXT_PUBLIC_TIKTOK_PIXEL_ID: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID,
  NEXT_PUBLIC_SNAP_PIXEL_ID: process.env.NEXT_PUBLIC_SNAP_PIXEL_ID
});
