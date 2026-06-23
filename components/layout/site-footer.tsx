import Link from "next/link";
import { Instagram, MessageCircle, MapPin, Phone, Clock } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="surface-night text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider-gold opacity-60"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--accent)]/8 blur-[120px]"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--gold)]/5 blur-[120px]"></div>

      <div className="container-luxury py-20 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--ink)] via-[var(--ink-soft)] to-[var(--ink-deep)] flex items-center justify-center shadow-[0_10px_24px_-6px_rgba(15,17,21,0.55)] ring-1 ring-[var(--accent)]/40">
                <span className="text-[var(--accent)] font-black text-xl">R</span>
                <span className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-[var(--accent)] ring-2 ring-[var(--ink)]"></span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-lg tracking-[0.04em]">PADEL <span className="text-[var(--accent)]">RUSH</span></span>
                <span className="text-[var(--accent)]/70 text-[9px] tracking-[0.3em] uppercase font-bold mt-1">BLVD · Riyadh</span>
              </div>
            </div>
            <p className="text-[var(--accent)]/80 leading-relaxed text-sm mb-4 max-w-sm italic font-medium">
              "{siteConfig.tagline}"
            </p>
            <p className="text-white/55 leading-relaxed text-sm mb-6 max-w-sm">
              الوجهة النهائية للاعبي البادل في المملكة — تعلّم، طوّر مهاراتك، أو استمتع مع أصدقائك في منشأة مجهزة بالكامل.
            </p>
            <div className="flex gap-3">
              <a href={whatsappUrl("استفسار - بادل رش")} className="group w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--ink)] hover:-translate-y-1 transition-all duration-300" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noopener" className="group w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-transparent hover:-translate-y-1 transition-all duration-300" aria-label="Instagram @padelrush">
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href={`tel:${siteConfig.phone}`} className="group w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--ink)] hover:-translate-y-1 transition-all duration-300" aria-label="Phone">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="label-luxury text-[var(--gold-soft)] mb-5">النادي</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-[var(--accent-soft)] transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 group-hover:bg-[var(--accent)] transition-colors"></span>عن النادي</Link></li>
              <li><Link href="/courts" className="hover:text-[var(--accent-soft)] transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 group-hover:bg-[var(--accent)] transition-colors"></span>الملاعب</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--accent-soft)] transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 group-hover:bg-[var(--accent)] transition-colors"></span>المعرض</Link></li>
              <li><Link href="/tournaments" className="hover:text-[var(--accent-soft)] transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 group-hover:bg-[var(--accent)] transition-colors"></span>البطولات</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="label-luxury text-[var(--gold-soft)] mb-5">الخدمات</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href={siteConfig.bookingUrl} target="_blank" rel="noopener" className="hover:text-[var(--accent-soft)] transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 group-hover:bg-[var(--accent)] transition-colors"></span>احجز على Playtomic</a></li>
              <li><Link href="/memberships" className="hover:text-[var(--accent-soft)] transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 group-hover:bg-[var(--accent)] transition-colors"></span>PASS العضويات</Link></li>
              <li><Link href="/academy" className="hover:text-[var(--accent-soft)] transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 group-hover:bg-[var(--accent)] transition-colors"></span>الأكاديمية</Link></li>
              <li><Link href="/coaches" className="hover:text-[var(--accent-soft)] transition-colors inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 group-hover:bg-[var(--accent)] transition-colors"></span>المدربون</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="label-luxury text-[var(--gold-soft)] mb-5">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3"><span className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0"><MapPin className="w-3.5 h-3.5 text-[var(--accent-soft)]" /></span><a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener" className="hover:text-white pt-1">{siteConfig.address}</a></li>
              <li className="flex items-start gap-3"><span className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0"><Clock className="w-3.5 h-3.5 text-[var(--accent-soft)]" /></span><span className="pt-1">{siteConfig.workingHours}</span></li>
              <li className="flex items-start gap-3"><span className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0"><Phone className="w-3.5 h-3.5 text-[var(--accent-soft)]" /></span><a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors pt-1">{siteConfig.phoneDisplay}</a></li>
              <li className="flex items-start gap-3"><span className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0"><MessageCircle className="w-3.5 h-3.5 text-[var(--accent-soft)]" /></span><a href={whatsappUrl("حجز")} className="hover:text-white transition-colors pt-1">واتساب: +966 53 372 9699</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} <span className="text-[var(--gold-soft)]/70">PADEL RUSH</span> @ BLVD RUH CITY · {siteConfig.email} · جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-[var(--gold-soft)] transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-[var(--gold-soft)] transition-colors">الشروط والأحكام</Link>
            <Link href="/faq" className="hover:text-[var(--gold-soft)] transition-colors">الأسئلة الشائعة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
