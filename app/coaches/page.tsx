import Image from "next/image";
import Link from "next/link";
import { Award, MessageCircle, Sparkles } from "@/lib/icons";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export const generateMetadata = () => metadata("المدربون", "نخبة مدربي البادل", "/coaches");

export default function CoachesPage() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative pt-32 md:pt-40 pb-20 surface-night text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={siteConfig.coaches[0].image} alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/85 via-[var(--ink)]/80 to-[var(--ink)]" />
        </div>
        <div className="container-luxury relative z-10 text-center max-w-3xl mx-auto">
          <div className="pill-gold mb-6 mx-auto"><Award className="w-3.5 h-3.5" />معتمدون من FIP والاتحاد الإسباني</div>
          <h1 className="display-1 mb-6">وراء كل لاعب عظيم <br /><span className="text-[var(--accent)]">مدرّب استثنائي.</span></h1>
          <p className="lead text-white/70">فريقنا ليس مجموعة مدربين. هو دائرة محترفين اختاروا أن يعيشوا للبادل.</p>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container-luxury space-y-12 md:space-y-20">
          {siteConfig.coaches.map((coach) => (
            <article key={coach.slug} className="max-w-xl mx-auto">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--ink)] ring-1 ring-[var(--border)] shadow-[var(--shadow-luxury)]">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 480px"
                />
              </div>
              <div className="mt-6 text-center sm:text-right">
                <h2 className="text-xl sm:text-2xl font-black text-[var(--primary)]">{coach.name}</h2>
                {"nameAr" in coach && (
                  <p className="text-[var(--muted)] text-sm mt-1">{coach.nameAr}</p>
                )}
                <a
                  href={whatsappUrl(`أرغب بحجز حصة مع ${coach.name}`)}
                  className="btn-primary mt-5 w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  احجز حصة مع {coach.name.split(" ")[0]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxury text-center max-w-3xl">
          <div className="gold-line mx-auto mb-8"></div>
          <h2 className="display-2 mb-6 text-[var(--primary)]">احجز مع المدرّب <br /><span className="text-[var(--cta)]">الذي يناسب أهدافك.</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl("أرغب بمعرفة المدرب المناسب لي")} className="btn-primary text-base">
              <Sparkles className="w-5 h-5" />ساعدني أختار
            </a>
            <Link href="/academy" className="btn-ghost text-base">برامج الأكاديمية</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
