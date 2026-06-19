import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, Compass, GraduationCap, MessageCircle, Sparkles, Target, TrendingUp, Users } from "@/lib/icons";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Testimonials } from "@/components/sections/testimonials";

export const generateMetadata = () => metadata("الأكاديمية", "أكاديمية بادل احترافية", "/academy");

export default function AcademyPage() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative pt-32 md:pt-40 pb-20 surface-night text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={siteConfig.coaches[0].image} alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/85 via-[var(--ink)]/80 to-[var(--ink)]" />
        </div>
        <div className="container-luxury relative z-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="pill-gold mb-6"><GraduationCap className="w-3.5 h-3.5" />منهج إسباني · معتمد FIP</div>
            <h1 className="display-1">أكاديمية تصنع <br /><span className="text-[var(--accent)]">لاعبين، لا متفرّجين.</span></h1>
            <p className="lead text-white/70 mt-6 max-w-2xl">٣ برامج مدروسة علمياً، تأخذك من ممسك المضرب لأول مرة إلى صفوف لاعبي البطولات.</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            {[{v:"+12",l:"مدرب معتمد"},{v:"+800",l:"متدرّب سنوياً"},{v:"98%",l:"نسبة التطور"}].map((s) => (
              <div key={s.l} className="card-night p-5 text-center">
                <div className="text-3xl font-black text-[var(--accent)] tracking-tight">{s.v}</div>
                <p className="text-xs text-white/55 mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="eyebrow">برامج الأكاديمية</span>
            <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">ابدأ من حيث <span className="text-[var(--accent)]">أنت الآن.</span></h2>
          </div>
          <div className="space-y-32">
            {siteConfig.academyPrograms.map((program, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <article key={idx} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                  <div className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative h-[560px] rounded-[var(--radius-lg)] overflow-hidden">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/50 to-transparent" />
                      <div className="absolute top-6 right-6"><span className="pill-light">برنامج 0{idx + 1}</span></div>
                    </div>
                  </div>
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="eyebrow">المستوى {idx === 0 ? "المبتدئ" : idx === 1 ? "المتقدم" : "الناشئة"}</span>
                    <h3 className="text-4xl font-black text-[var(--primary)] tracking-tight mt-4 mb-6">{program.title}</h3>
                    <p className="lead mb-8">{program.description}</p>
                    <div className="space-y-3 mb-10">
                      {["تقييم مستوى مفصّل قبل البدء","تتبّع تقدّمك أسبوعياً","تطبيق المهارات في مباريات حقيقية","شهادة إتمام البرنامج"].map((feat) => (
                        <div key={feat} className="flex items-center gap-3 text-[var(--primary)]">
                          <CheckCircle2 className="w-5 h-5 text-[var(--cta)] shrink-0" />
                          <span className="text-sm font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <a href={whatsappUrl(`أرغب بالتسجيل في ${program.title}`)} className="btn-primary">سجّل في البرنامج</a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 surface-luxe">
        <div className="container-luxury">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">لماذا أكاديميتنا</span>
            <h2 className="display-2 text-[var(--primary)] mt-4">لأن التطوّر <span className="text-[var(--accent)]">يستحق منهجاً.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "مدربون دوليون", desc: "كل مدربينا معتمد من FIP أو الاتحاد الإسباني." },
              { icon: Target, title: "أهداف قابلة للقياس", desc: "نضع لك أهدافاً واضحة لكل أسبوع." },
              { icon: Users, title: "مجموعات صغيرة", desc: "لا أكثر من 4 لاعبين لكل مدرّب." },
              { icon: TrendingUp, title: "تحليل فيديو", desc: "نسجّل لقطات من تدريبك ونحلّلها معك." },
              { icon: Compass, title: "خطة مخصصة", desc: "كل لاعب يحصل على خطة تناسبه." },
              { icon: Sparkles, title: "بيئة محفّزة", desc: "تتدرّب مع لاعبين بمستواك في بيئة إيجابية." }
            ].map((item) => (
              <div key={item.title} className="card-luxury p-8">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center mb-6">
                  <item.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h4 className="text-xl font-bold text-[var(--primary)] mb-3">{item.title}</h4>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials variant="dark" />

      <section className="py-24 md:py-32">
        <div className="container-luxury max-w-3xl text-center">
          <div className="gold-line mx-auto mb-8"></div>
          <h2 className="display-2 mb-6 text-[var(--primary)]">خطوتك الأولى <br /><span className="text-[var(--cta)]">تبدأ هنا.</span></h2>
          <p className="lead mb-10">احجز جلسة تقييم مجانية.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl("أرغب بحجز جلسة تقييم مجانية")} className="btn-primary text-base">
              <MessageCircle className="w-5 h-5" />احجز جلسة تقييم مجانية
            </a>
            <Link href="/coaches" className="btn-ghost text-base">المدربون</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
