import Image from "next/image";
import Link from "next/link";
import { Award, MessageCircle, Sparkles, Star, Target } from "@/lib/icons";
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

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container-luxury space-y-16 md:space-y-24">
          {siteConfig.coaches.map((coach, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <article key={coach.slug} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className={`lg:col-span-5 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative h-[300px] sm:h-[420px] lg:h-[560px] rounded-[var(--radius-lg)] overflow-hidden">
                    <Image src={coach.image} alt={coach.name} fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
                    <div className="absolute top-6 right-6"><span className="pill-light">المدرب 0{idx + 1}</span></div>
                  </div>
                </div>
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="eyebrow">{coach.experience} في تدريب البادل</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-[var(--primary)] tracking-tight mt-4 mb-6">{coach.name}</h2>
                  <p className="lead mb-8 italic">"{coach.bio}"</p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                    <div className="bg-[var(--background-elev)] border border-[var(--border)] rounded-2xl p-5">
                      <Star className="w-5 h-5 text-[var(--accent)] mb-3" />
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] mb-1 font-semibold">الخبرة</div>
                      <div className="font-bold text-[var(--primary)] text-sm">{coach.experience}</div>
                    </div>
                    <div className="bg-[var(--background-elev)] border border-[var(--border)] rounded-2xl p-5">
                      <Award className="w-5 h-5 text-[var(--accent)] mb-3" />
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] mb-1 font-semibold">الشهادات</div>
                      <div className="font-bold text-[var(--primary)] text-sm">{coach.certifications.join(" · ")}</div>
                    </div>
                    <div className="bg-[var(--background-elev)] border border-[var(--border)] rounded-2xl p-5">
                      <Target className="w-5 h-5 text-[var(--accent)] mb-3" />
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] mb-1 font-semibold">التخصص</div>
                      <div className="font-bold text-[var(--primary)] text-sm">{coach.specialties[0]}</div>
                    </div>
                  </div>
                  <a href={whatsappUrl(`أرغب بحجز حصة مع الكابتن ${coach.name}`)} className="btn-primary">
                    <MessageCircle className="w-4 h-4" />احجز حصة مع {coach.name.split(" ")[0]}
                  </a>
                </div>
              </article>
            );
          })}
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
