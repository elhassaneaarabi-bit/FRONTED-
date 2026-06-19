import Image from "next/image";
import Link from "next/link";
import { Award, Compass, Eye, Heart, MessageCircle, ShieldCheck, Target } from "@/lib/icons";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export const generateMetadata = () => metadata("عن النادي", "قصتنا ورؤيتنا", "/about");

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative pt-32 md:pt-40 pb-20 surface-night text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={siteConfig.aboutImage} alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/85 via-[var(--ink)]/80 to-[var(--ink)]" />
        </div>
        <div className="container-luxury relative z-10 max-w-4xl">
          <span className="eyebrow">قصة العلامة</span>
          <h1 className="display-1 mt-4 mb-6">بدأنا بسؤال واحد: <br /><span className="text-[var(--accent)]">لماذا يكون البادل عاديّاً؟</span></h1>
          <p className="lead text-white/70 max-w-2xl">في {siteConfig.clubName}، رفضنا أن نكون مجرّد ملعب آخر.</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <div className="relative h-[600px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image src={siteConfig.aboutImage} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="eyebrow">القصة</span>
              <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">من شغف <br /><span className="text-[var(--accent)]">إلى تجربة كاملة.</span></h2>
              <div className="space-y-5 text-[var(--muted)] text-lg leading-relaxed">
                <p>بدأت الفكرة عام 2023 عندما لاحظنا أن السوق السعودي يستحق أكثر بكثير ممّا يُقدّم له.</p>
                <p>فقرّرنا أن نُغيّر القاعدة. زرنا أفضل ملاعب البادل في إسبانيا، تعلّمنا من أساطير الرياضة.</p>
                <p>واليوم، نحن لسنا فقط ملاعب. نحن وجهة رياضية فاخرة في {siteConfig.city}.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 surface-luxe">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-lg)] p-10 md:p-12">
              <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center mb-8">
                <Eye className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <span className="eyebrow">رؤيتنا</span>
              <h3 className="text-3xl font-bold text-[var(--primary)] mt-3 mb-5">أن نكون المرجع <span className="text-[var(--accent)]">للبادل في المملكة.</span></h3>
              <p className="text-[var(--muted)] leading-relaxed">ليس بأن نملك أكبر ملعب، بل بأن نقدّم أفضل تجربة.</p>
            </div>
            <div className="bg-[var(--primary)] text-white rounded-[var(--radius-lg)] p-10 md:p-12 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[var(--accent)]/15 blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center mb-8">
                  <Target className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <span className="eyebrow">رسالتنا</span>
                <h3 className="text-3xl font-bold mt-3 mb-5">نشر ثقافة البادل <span className="text-[var(--accent)]">برؤية سعودية.</span></h3>
                <p className="text-white/65 leading-relaxed">نوفّر بيئة احترافية ومدربين دوليين مع حفاظ على هويتنا السعودية.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">القيم</span>
            <h2 className="display-2 text-[var(--primary)] mt-4">أربع قيم <span className="text-[var(--accent)]">لا نتنازل عنها.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "الجودة", desc: "لا نقدّم ما لا نلعب عليه نحن أنفسنا." },
              { icon: Heart, title: "الشغف", desc: "كل عامل هو لاعب بادل قبل أن يكون موظفاً." },
              { icon: Compass, title: "الاحترام", desc: "للاعب، للقواعد، وللخصم." },
              { icon: Award, title: "التميّز", desc: "نسعى لأن نكون الأفضل، ليس الأكبر." }
            ].map((v) => (
              <div key={v.title} className="card-luxury p-8">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center mb-6">
                  <v.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h4 className="text-xl font-bold text-[var(--primary)] mb-3">{v.title}</h4>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 surface-luxe">
        <div className="container-luxury text-center max-w-3xl">
          <div className="gold-line mx-auto mb-8"></div>
          <h2 className="display-2 mb-6 text-[var(--primary)]">القصة <span className="text-[var(--cta)]">تبدأ بحجزك الأول.</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary text-base">احجز ملعبك</Link>
            <a href={whatsappUrl("أرغب بزيارة النادي")} className="btn-ghost text-base">
              <MessageCircle className="w-5 h-5" />تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
