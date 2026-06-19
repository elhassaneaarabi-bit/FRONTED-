import Image from "next/image";
import Link from "next/link";
import { Clock, MoveLeft } from "@/lib/icons";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { TrustBar } from "@/components/sections/trust-bar";

export const generateMetadata = () => metadata("الملاعب", "استعرض ملاعب البادل المتاحة.", "/courts");

export default function CourtsPage() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative pt-32 md:pt-40 pb-20 surface-night text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={siteConfig.heroImage} alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/85 via-[var(--ink)]/80 to-[var(--ink)]" />
        </div>
        <div className="container-luxury relative z-10 text-center max-w-3xl mx-auto">
          <span className="eyebrow">١٢ ملعباً احترافياً</span>
          <h1 className="display-1 mt-4 mb-6">اختر <span className="text-[var(--accent)]">ملعبك المثالي.</span></h1>
          <p className="lead text-white/70">ملاعب داخلية، خارجية، ومنطقة VIP — كلٌّ منها بمعايير WPT الدولية.</p>
        </div>
      </section>

      <TrustBar variant="light" />

      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid gap-10">
            {siteConfig.courts.map((court, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <article key={court.slug} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <Link href={`/courts/${court.slug}`} className="block relative h-[500px] rounded-[var(--radius-lg)] overflow-hidden">
                      <Image src={court.image} alt={court.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/30 to-transparent" />
                      <div className="absolute top-6 right-6"><span className="pill-light">{court.type}</span></div>
                    </Link>
                  </div>
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="eyebrow">ملعب 0{idx + 1}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] tracking-tight mt-3 mb-5">{court.name}</h2>
                    <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">{court.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] mb-1 font-semibold">يبدأ من</div>
                        <div className="text-2xl font-black text-[var(--cta)]">{court.price} <span className="text-sm font-normal text-[var(--muted)]">ر.س/ساعة</span></div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] mb-1 font-semibold">أوقات الذروة</div>
                        <div className="flex items-center gap-1 text-[var(--primary)] font-bold"><Clock className="w-4 h-4 text-[var(--accent)]" />{court.peakSlots.length} فترات</div>
                      </div>
                    </div>
                    <Link href={`/courts/${court.slug}`} className="inline-flex items-center gap-2 font-bold text-[var(--primary)] hover:text-[var(--cta)] transition-colors">
                      التفاصيل الكاملة والحجز<MoveLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
