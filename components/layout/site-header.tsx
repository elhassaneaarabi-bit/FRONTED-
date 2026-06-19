"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

const navLinks = [
  { href: "/courts", label: "الملاعب" },
  { href: "/memberships", label: "العضويات" },
  { href: "/academy", label: "الأكاديمية" },
  { href: "/coaches", label: "المدربون" },
  { href: "/tournaments", label: "البطولات" },
  { href: "/about", label: "النادي" }
];

function RushLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--ink)] via-[var(--ink-soft)] to-[var(--ink-deep)] flex items-center justify-center shadow-[0_10px_24px_-6px_rgba(15,17,21,0.55)] ring-1 ring-[var(--accent)]/40">
        <span className="text-[var(--accent)] font-black text-xl tracking-tighter">R</span>
        <span className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-[var(--accent)] ring-2 ring-[var(--ink)]"></span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white font-black text-[15px] tracking-[0.04em]">PADEL <span className="text-[var(--accent)]">RUSH</span></span>
        <span className="text-[var(--accent)]/70 text-[9px] tracking-[0.3em] uppercase font-bold mt-1">BLVD · Riyadh</span>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${scrolled ? "bg-[var(--ink)]/92 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.25)] py-3" : "bg-gradient-to-b from-[var(--ink)]/40 to-transparent py-5"}`}>
      <div className="container-luxury flex items-center justify-between gap-6">
        <Link href="/" aria-label="Padel Rush"><RushLogo /></Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative text-white/85 hover:text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/[0.07] transition-all group">
              {link.label}
              <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={whatsappUrl("استفسار - بادل رش")} className="inline-flex items-center gap-2 text-white/80 hover:text-[var(--accent)] text-sm font-semibold transition-colors">
            <MessageCircle className="w-4 h-4" /><span>تواصل</span>
          </a>
          <a href={siteConfig.bookingUrl} target="_blank" rel="noopener" className="relative inline-flex items-center gap-2 bg-gradient-to-b from-[var(--accent-soft)] via-[var(--accent)] to-[var(--accent-deep)] text-[var(--ink)] px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_10px_28px_-8px_rgba(200,245,0,0.55)] hover:shadow-[0_14px_36px_-8px_rgba(200,245,0,0.75)] hover:-translate-y-0.5 ring-1 ring-[var(--ink)]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)] animate-pulse"></span>
            احجز عبر Playtomic
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white" aria-label="القائمة">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--ink)]/97 backdrop-blur-xl border-t border-white/10 animate-fade-up">
          <nav className="container-luxury py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between text-white/90 hover:text-white text-base font-semibold px-4 py-3.5 rounded-2xl hover:bg-white/5 transition-all">
                <span>{link.label}</span>
                <span className="text-[var(--accent-soft)] text-xs">→</span>
              </Link>
            ))}
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="mt-4 text-center bg-gradient-to-b from-[var(--accent-soft)] via-[var(--accent)] to-[var(--accent-deep)] text-[var(--ink)] py-3.5 rounded-full font-bold shadow-[0_10px_24px_-6px_rgba(200,245,0,0.55)]">احجز عبر Playtomic</a>
            <a href={whatsappUrl("استفسار")} className="text-center mt-2 border border-white/20 text-white py-3 rounded-full font-semibold hover:bg-white/5">واتساب فوري</a>
          </nav>
        </div>
      )}
    </header>
  );
}
