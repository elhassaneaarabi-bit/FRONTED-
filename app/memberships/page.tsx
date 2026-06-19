import Link from "next/link";
import Image from "next/image";
import { CalendarClock, CheckCircle2, Crown, MessageCircle, ShieldCheck, Sparkles, TrendingUp, Users, X } from "@/lib/icons";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Testimonials } from "@/components/sections/testimonials";

export const generateMetadata = () => metadata("العضويات", "باقات عضوية حصرية", "/memberships");

const compareRows = [
  { name: "أولوية الحجز", v1: "قبل 3 أيام", v2: "قبل 5 أيام", v3: "VIP — قبل 7 أيام" },
  { name: "خصم التدريب", v1: "10%", v2: "15%", v3: "25%" },
  { name: "تجميد العضوية", v1: "—", v2: "7 أيام", v3: "30 يوماً" },
  { name: "دعوات البطولات", v1: true, v2: true, v3: "+ ضيف مجاني" },
  { name: "موقف خاص", v1: false, v2: false, v3: true },
  { name: "هدية ترحيب", v1: "مشروب", v2: "تيشيرت النادي", v3: "حقيبة كاملة" }
];

const renderCell = (v: any) => {
  if (v === true) return <CheckCircle2 className="w-5 h-5 text-[var(--cta)] mx-auto" />;
  if (v === false || v === "—") return <X className="w-5 h-5 text-[var(--muted)]/40 mx-auto" />;
  return <span className="text-[var(--primary)] font-semibold text-sm">{v}</span>;
};

export default function MembershipsPage() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative pt-32 md:pt-40 pb-20 surface-night text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={siteConfig.heroImage} alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/85 via-[var(--ink)]/80 to-[var(--ink)]" />
        </div>
        <div className="container-luxury relative z-10 text-center max-w-3xl mx-auto">
          <div className="pill-gold mb-6 mx-auto"><Crown className="w-3.5 h-3.5" />عضويات حصرية</div>
          <h1 className="display-1 mb-6">انضم إلى <br /><span className="text-[var(--accent)]">دائرة النخبة.</span></h1>
          <p className="lead text-white/70">ليست مجرد اشتراك. هي بطاقة دخولك إلى تجربة بادل مختلفة.</p>
        </div>
      </section>

      <section className="-mt-20 relative z-20">
        <div className="container-luxury">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {siteConfig.memberships.map((tier, idx) => (
              <div key={tier.name} className={`relative rounded-[var(--radius-lg)] p-10 transition-all duration-500 hover:-translate-y-2 ${tier.popular ? "bg-gradient-to-br from-[var(--ink)] via-[var(--ink-soft)] to-[var(--ink)] text-white shadow-[var(--shadow-luxury)] md:-translate-y-6 ring-2 ring-[var(--accent)]" : "bg-[var(--background-elev)] border border-[var(--border)] shadow-[var(--shadow-elev-2)] hover:border-[var(--accent)]"}`}>
                {tier.popular && (
                  <>
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"></div>
                    <div className="absolute -top-4 right-1/2 translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--ink)] text-xs font-black tracking-wider shadow-[0_10px_24px_-6px_rgba(200,245,0,0.6)]">
                      <Sparkles className="w-3.5 h-3.5" />الأكثر طلباً
                    </div>
                    <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[var(--accent)]/20 blur-3xl"></div>
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-[var(--green)]/15 blur-3xl"></div>
                  </>
                )}
                <div className="relative">
                  <span className={`label-luxury ${tier.popular ? "text-[var(--accent)]" : "text-[var(--accent-deep)]"}`}>باقة 0{idx + 1}</span>
                  <h3 className={`text-3xl font-black mt-3 mb-1 tracking-tight ${tier.popular ? "" : "text-[var(--ink)]"}`}>{tier.name}</h3>
                  <p className={`text-sm mb-8 ${tier.popular ? "text-white/55" : "text-[var(--muted)]"}`}>{tier.period}</p>
                  <div className="flex items-baseline gap-2 mb-10 pb-10 border-b border-current/10">
                    <span className={`text-5xl font-black tracking-tight ${tier.popular ? "text-[var(--accent)]" : "text-[var(--ink)]"}`}>{tier.price}</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${tier.popular ? "bg-[var(--accent)]/20" : "bg-[var(--accent)]/15"}`}>
                          <CheckCircle2 className={`w-3.5 h-3.5 ${tier.popular ? "text-[var(--accent)]" : "text-[var(--accent-deep)]"}`} />
                        </div>
                        <span className={`text-sm leading-relaxed ${tier.popular ? "text-white/85" : "text-[var(--ink)]"}`}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl(`أرغب بالاشتراك في عضوية ${tier.name}`)} className={`block text-center py-4 rounded-full font-bold transition-all ${tier.popular ? "bg-[var(--accent)] text-[var(--ink)] hover:shadow-[0_20px_44px_-10px_rgba(200,245,0,0.6)] hover:-translate-y-0.5" : "bg-[var(--ink)] text-white hover:bg-[var(--accent)] hover:text-[var(--ink)] hover:-translate-y-0.5"}`}>ابدأ عضويتك</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 mt-24">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <span className="eyebrow">لماذا عضوية؟</span>
              <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">وفّر، احجز أسرع، <br /><span className="text-[var(--accent)]">والعب أكثر.</span></h2>
              <p className="lead mb-10">العضوية ليست رفاهية، بل قرار ذكي. أعضاؤنا يلعبون 3 أضعاف اللاعبين العاديين.</p>
              <div className="space-y-5">
                {[
                  { icon: CalendarClock, title: "احجز قبل الجميع", desc: "أولوية الوصول إلى أوقات الذروة." },
                  { icon: TrendingUp, title: "تقدّم أسرع", desc: "تقييم مستوى دوري وخصم على المدربين." },
                  { icon: Users, title: "مجتمع حصري", desc: "ادخل إلى مجموعات اللاعبين بمستواك." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-1">{item.title}</h4>
                      <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="relative h-[600px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image src={siteConfig.heroImage} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 surface-luxe">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">مقارنة شفافة</span>
            <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">اختر باقتك <span className="text-[var(--cta)]">بكل وضوح.</span></h2>
          </div>
          <div className="bg-[var(--background-elev)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-elev-2)] border border-[var(--border)]">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--primary)] text-white">
                  <th className="p-6 text-right text-sm font-bold tracking-wider uppercase">المميزات</th>
                  <th className="p-6 text-center text-sm font-bold tracking-wider uppercase">شهرية</th>
                  <th className="p-6 text-center text-sm font-bold tracking-wider uppercase bg-[var(--accent)] text-[var(--primary)]">ربع سنوية ★</th>
                  <th className="p-6 text-center text-sm font-bold tracking-wider uppercase">سنوية</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className="border-t border-[var(--border)] hover:bg-[var(--background)]/50">
                    <td className="p-5 font-bold text-[var(--primary)] text-sm">{row.name}</td>
                    <td className="p-5 text-center">{renderCell(row.v1)}</td>
                    <td className="p-5 text-center bg-[var(--accent)]/5">{renderCell(row.v2)}</td>
                    <td className="p-5 text-center">{renderCell(row.v3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Testimonials variant="light" />

      <section className="py-24 md:py-32">
        <div className="container-luxury max-w-4xl">
          <div className="bg-[var(--primary)] text-white rounded-[var(--radius-xl)] p-12 md:p-16 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--accent)]/15 blur-3xl"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent)] mb-6">
                <ShieldCheck className="w-10 h-10 text-[var(--primary)]" />
              </div>
              <h2 className="display-2 mb-6">ضمان <span className="text-[var(--accent)]">7 أيام.</span></h2>
              <p className="lead text-white/70 mb-10 max-w-2xl mx-auto">جرّب عضويتك لمدة أسبوع كامل. إذا لم تشعر بالفرق، استرداد كامل بدون أسئلة.</p>
              <a href={whatsappUrl("أرغب بالاستفسار عن العضويات")} className="btn-primary text-base">
                <MessageCircle className="w-5 h-5" />ابدأ عضويتك اليوم
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
