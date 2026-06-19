import Link from "next/link";
import { CalendarCheck, MessageCircle, Clock } from "@/lib/icons";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export const generateMetadata = () => metadata("الحجز", "احجز ملعبك", "/booking");

export default function BookingPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen pt-32 pb-20">
      <div className="container-luxury max-w-5xl">
        <div className="text-center mb-16">
          <span className="eyebrow">الحجز السريع</span>
          <h1 className="display-1 mt-4 mb-6 text-[var(--primary)]">احجز ملعبك <span className="text-[var(--cta)]">في أقل من دقيقة.</span></h1>
          <p className="lead">اختر الملعب المناسب وتواصل معنا مباشرة عبر واتساب.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.courts.map((court) => (
            <div key={court.slug} className="bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 hover:border-[var(--accent)]/40 transition-colors">
              <span className="pill-gold mb-4 inline-flex">{court.type}</span>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{court.name}</h3>
              <div className="mb-5">
                <div className="text-2xl font-black text-[var(--cta)]">{court.price} <span className="text-sm font-normal text-[var(--muted)]">ر.س/ساعة</span></div>
              </div>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-bold mb-3 flex items-center gap-1"><Clock className="w-3 h-3" />أوقات متاحة</p>
                <div className="flex flex-wrap gap-2">
                  {court.peakSlots.map((slot) => (
                    <span key={slot} className="bg-[var(--accent)]/10 text-[var(--primary)] px-2 py-1 rounded-md text-xs font-semibold">{slot}</span>
                  ))}
                </div>
              </div>
              <a href={whatsappUrl(`أرغب بحجز ${court.name}`)} className="btn-primary w-full justify-center text-sm">
                <CalendarCheck className="w-4 h-4" />احجز عبر واتساب
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[var(--primary)] text-white rounded-[var(--radius-lg)] p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">تحتاج مساعدة في الاختيار؟</h3>
          <p className="text-white/70 mb-8">فريقنا جاهز للرد على استفساراتك خلال دقائق.</p>
          <a href={whatsappUrl("أحتاج مساعدة في اختيار ملعب")} className="btn-primary">
            <MessageCircle className="w-5 h-5" />تواصل مع الفريق
          </a>
        </div>
      </div>
    </main>
  );
}
