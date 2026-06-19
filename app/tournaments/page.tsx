import Image from "next/image";
import { Calendar, Medal, Trophy, Users } from "@/lib/icons";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export const generateMetadata = () => metadata("البطولات", "بطولات البادل", "/tournaments");

export default function TournamentsPage() {
  const upcoming = siteConfig.tournaments.filter(t => t.status === "upcoming");
  const completed = siteConfig.tournaments.filter(t => t.status === "completed");

  return (
    <main className="bg-[var(--background)]">
      <section className="relative pt-32 md:pt-40 pb-20 surface-night text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={siteConfig.heroImage} alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/85 via-[var(--ink)]/80 to-[var(--ink)]" />
        </div>
        <div className="container-luxury relative z-10 text-center max-w-4xl mx-auto">
          <span className="eyebrow">بطولات النادي</span>
          <h1 className="display-1 mt-4 mb-6">تنافس، استمتع، <br /><span className="text-[var(--accent)]">واربح.</span></h1>
          <p className="lead text-white/70">ننظم بطولات شهرية وموسمية لجميع الفئات بمستويات تنظيم احترافية وجوائز قيمة.</p>
        </div>
      </section>

      <section className="container-luxury py-20">
        <div className="flex items-center gap-3 mb-12">
          <Trophy className="w-8 h-8 text-[var(--cta)]" />
          <h2 className="text-3xl font-bold text-[var(--primary)]">البطولات القادمة</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {upcoming.map((t) => (
            <article key={t.slug} className="bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-elev-2)] flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto">
                <Image src={t.image} alt={t.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-[var(--cta)] text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">التسجيل مفتوح</div>
              </div>
              <div className="p-8 w-full sm:w-3/5 flex flex-col">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{t.title}</h3>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-center gap-3 text-[var(--muted)]"><Calendar className="w-5 h-5 text-[var(--accent)]" /><span>{t.date}</span></div>
                  <div className="flex items-center gap-3 text-[var(--muted)]"><Users className="w-5 h-5 text-[var(--accent)]" /><span>{t.category}</span></div>
                  <div className="flex items-center gap-3"><Medal className="w-5 h-5 text-[var(--accent)]" /><span className="font-bold text-[var(--primary)]">الجوائز: {t.prize}</span></div>
                </div>
                <a href={whatsappUrl(`أرغب بالتسجيل في ${t.title}`)} className="btn-primary justify-center">سجل الآن</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {completed.length > 0 && (
        <section className="bg-slate-50 py-20 border-t border-[var(--border)]">
          <div className="container-luxury">
            <div className="flex items-center gap-3 mb-12">
              <Medal className="w-8 h-8 text-slate-400" />
              <h2 className="text-3xl font-bold text-[var(--primary)]">البطولات السابقة</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {completed.map((t) => (
                <article key={t.slug} className="bg-white rounded-[var(--radius-md)] overflow-hidden border border-[var(--border)] opacity-80 hover:opacity-100 transition-opacity">
                  <div className="relative h-48 w-full">
                    <Image src={t.image} alt={t.title} fill className="object-cover grayscale" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{t.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{t.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
