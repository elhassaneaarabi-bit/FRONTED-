"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Phone } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[var(--ink)]/95 backdrop-blur-lg border-t border-[var(--accent)]/30 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-white text-xs font-bold truncate">PADEL RUSH</div>
          <div className="text-[var(--accent)] text-[10px]">من 210 ر.س / 90 دقيقة</div>
        </div>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener"
          className="shrink-0 inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--ink)] font-bold text-sm px-5 py-2.5 rounded-full"
        >
          <CalendarCheck className="w-4 h-4" />
          احجز الآن
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
          aria-label="Call"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
