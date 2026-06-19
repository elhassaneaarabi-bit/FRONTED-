import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarCheck, CheckCircle2, Layers, Lightbulb, MessageCircle, ShieldCheck,
  Sparkles, Star, ThermometerSnowflake, Trophy
} from "@/lib/icons";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";
import { Testimonials } from "@/components/sections/testimonials";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const court = siteConfig.courts.find((c) => c.slug === slug);
  if (!court) return metadata("الملعب غير موجود", "غير موجود", "/courts");
  return metadata(`${court.name} | ${siteConfig.clubName}`, court.description, `/courts/${slug}`);
}

const courtFAQs = [
  { q: "هل يلزم دفع مسبق للحجز؟", a: "لا. تحجز عبر الموقع أو الواتساب وتدفع في النادي مباشرة." },
  { q: "هل توفرون المضارب والكرات؟", a: "نعم. كرات بطولة جديدة مع كل حجز، ومضارب احترافية للإيجار." },
  { q: "ما هي سياسة الإلغاء؟", a: "إلغاء مجاني قبل 24 ساعة من موعد الحجز." },
  { q: "هل الملعب مكيّف؟", a: "نعم، جميع الملاعب الداخلية مكيفة بالكامل وتحافظ على 22°م." },
  { q: "هل أقدر أحجز مع مدرب؟", a: "بالتأكيد. اختر إضافة مدرب من قائمة المدربين المعتمدين." }
];

export default async function CourtDetailsPage({ params }: Props) {
  const { slug } = await params;
  const court = siteConfig.courts.find((c) => c.slug === slug);
  if (!court) notFound();
  const placeholder = images.courts.whoop;

  return (
    <main className="bg-[var(--background)]">
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 surface-night text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={court.image} alt={court.name} fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/85 via-[var(--ink)]/75 to-[var(--ink)]" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/55 mb-6 tracking-wider">
            <Link href="/" className="hover:text-white">الرئيسية</Link><span>/</span>
            <Link href="/courts" className="hover:text-white">الملاعب</Link><span>/</span>
            <span className="text-white/85">{court.name}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="pill-gold mb-6">{court.type === "Indoor" ? "ملعب داخلي معتمد" : "ملعب خارجي فاخر"}</div>
              <h1 className="display-1">{court.name}</h1>
              <p className="lead text-white/70 mt-6 max-w-2xl">{court.description}</p>
              <div className="mt-10 flex items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-[var(--accent)]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm font-bold">5.0</span>
                  <span className="text-white/50 text-sm">(220+ مراجعة)</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-white/70 text-sm"><ShieldCheck className="w-4 h-4 text-[var(--accent)]" />معتمد WPT</div>
                <div className="hidden md:flex items-center gap-2 text-white/70 text-sm"><Trophy className="w-4 h-4 text-[var(--accent)]" />محتضن للبطولات</div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="card-night p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">السعر يبدأ من</span>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black text-[var(--accent)]">{court.price}</span>
                  <span className="text-white/55">ر.س / ساعة</span>
                </div>
                <Link href="/booking" className="btn-primary w-full mb-3">
                  <CalendarCheck className="w-5 h-5" />احجز هذا الملعب الآن
                </Link>
                <a href={whatsappUrl(`أرغب بحجز ${court.name}`)} className="btn-ghost-light w-full">
                  <MessageCircle className="w-5 h-5" />استفسر عبر واتساب
                </a>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 text-white/75"><CheckCircle2 className="w-4 h-4 text-[var(--cta)]" />بدون دفع مسبق</div>
                  <div className="flex items-center gap-2 text-white/75"><CheckCircle2 className="w-4 h-4 text-[var(--cta)]" />إلغاء مرن قبل 24 ساعة</div>
                  <div className="flex items-center gap-2 text-white/75"><CheckCircle2 className="w-4 h-4 text-[var(--cta)]" />كرات بطولة مجاناً مع كل حجز</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Engineering */}
      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <div className="relative h-[600px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image src={placeholder} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="eyebrow">الهندسة</span>
              <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">مصمَّم بدقة <br /><span className="text-[var(--accent)]">على أعلى المعايير.</span></h2>
              <p className="lead mb-8">تعاقدنا مع شركاء معتمدين من World Padel Tour ونفّذنا الملعب وفق المخطط الذي تُلعب به البطولات الكبرى.</p>
              <ul className="space-y-5">
                {[
                  { title: "زجاج بانورامي مقوّى 12مم", desc: "رؤية كاملة بلا انعكاسات ومقاوم للصدمات." },
                  { title: "أرضية امتصاص صدمات", desc: "تحمي مفاصلك وتمنحك ارتدادًا متجانساً." },
                  { title: "هيكل معدني مغلون", desc: "مقاوم للتآكل لعمر يفوق 15 سنة." }
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-1">{item.title}</h4>
                      <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Performance */}
      <section className="py-24 md:py-32 surface-luxe">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <span className="eyebrow">الأداء</span>
              <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">ملعب يصنع <br /><span className="text-[var(--cta)]">لاعبين أفضل.</span></h2>
              <p className="lead mb-10">الملعب الجيد لا يجعلك تلعب فقط، بل يكشف نقاط قوتك ويُجبرك على تطوير تكتيكك.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { metric: "+28%", label: "تحسّن دقة الضربات" },
                  { metric: "−40%", label: "إصابات الركبة" },
                  { metric: "98%", label: "تجانس الارتداد" },
                  { metric: "0", label: "وهج من الإضاءة" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-[var(--background-elev)] border border-[var(--border)] rounded-2xl p-5">
                    <div className="text-3xl font-black text-[var(--primary)] tracking-tight mb-1">{stat.metric}</div>
                    <p className="text-xs text-[var(--muted)] tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--muted)] mt-4 italic">* قياسات من 200 لاعب خلال 6 أشهر.</p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[600px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image src={placeholder} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Experience */}
      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <div className="relative h-[600px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image src={placeholder} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="eyebrow">التجربة</span>
              <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">كل تفصيل <br /><span className="text-[var(--accent)]">في خدمتك.</span></h2>
              <p className="lead mb-8">نعتني بكل ثانية تقضيها معنا، من لحظة دخولك حتى خروجك.</p>
              <div className="space-y-3">
                {["موقف سيارات مظلّل ومجاني","غرف تبديل ملابس فندقية مع خزائن آمنة","مقهى مختص بالقهوة والوجبات الرياضية","خدمة مناشف ومياه باردة على الملعب","تسجيل فيديو لمباراتك"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-[var(--background-elev)] border border-[var(--border)] rounded-xl">
                    <Sparkles className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <span className="text-[var(--primary)] font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Features Cards */}
      <section className="py-24 md:py-32 surface-night text-white">
        <div className="container-luxury">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">المميزات</span>
            <h2 className="display-2 mt-4">ما يجعل هذا الملعب <br /><span className="text-[var(--accent)]">استثنائياً.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ThermometerSnowflake, label: "تكييف ثابت", value: "22°م", desc: "بيئة لعب مثالية على مدار الموسم" },
              { icon: Lightbulb, label: "إضاءة LED", value: "1000 لوكس", desc: "بدون وهج ولا انعكاس" },
              { icon: Layers, label: "أرضية WPT", value: "Class A", desc: "ارتداد متجانس + امتصاص صدمات" },
              { icon: ShieldCheck, label: "زجاج مقوّى", value: "12 ملم", desc: "سلامة كاملة ورؤية بانورامية" }
            ].map((feat) => (
              <div key={feat.label} className="card-night p-8 group hover:border-[var(--accent)]/40 transition-colors">
                <feat.icon className="w-8 h-8 text-[var(--accent)] mb-8 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-black mb-1 tracking-tight">{feat.value}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-bold mb-4">{feat.label}</div>
                <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Specs */}
      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">المواصفات الفنية</span>
            <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">تشريح كامل <span className="text-[var(--accent)]">للملعب.</span></h2>
            <p className="lead">كل مادة وكل قياس مدروس ومُعتمد.</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 relative h-[600px] rounded-[var(--radius-lg)] overflow-hidden">
              <Image src={court.image} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
            </div>
            <div className="lg:col-span-5 space-y-3">
              {[
                { label: "نوع الأرضية", value: "Mondo Sport Padel Pro" },
                { label: "ارتفاع الزجاج", value: "3.0م مقوّى 12مم" },
                { label: "ارتفاع الشبكة المعدنية", value: "4.0 متر" },
                { label: "أبعاد الملعب", value: "20م × 10م — FIP" },
                { label: "نظام الإضاءة", value: "8 كشافات LED — 1000 لوكس" },
                { label: "التكييف", value: "VRF Premium — 22°م" },
                { label: "الفئة", value: "ملعب بطولات Class A" },
                { label: "السلامة", value: "ISO 9001 + WPT" }
              ].map((spec) => (
                <div key={spec.label} className="flex items-center justify-between p-5 bg-[var(--background-elev)] border border-[var(--border)] rounded-2xl">
                  <span className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] font-semibold">{spec.label}</span>
                  <span className="font-bold text-[var(--primary)] text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Scientific Proof */}
      <section className="py-24 md:py-32 surface-luxe">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow">العلم وراء الأداء</span>
              <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">لماذا يلعب اللاعبون <br /><span className="text-[var(--cta)]">أفضل هنا؟</span></h2>
              <p className="lead mb-8">دراسات علم الحركة الرياضية تؤكد أن جودة الأرضية والإضاءة تؤثر مباشرة على دقة اللاعب وزمن ردة فعله.</p>
              <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <ShieldCheck className="w-5 h-5 text-[var(--cta)]" />
                مصادر: WPT Engineering Report 2024 — FIP
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {[
                { num: "01", title: "ارتداد متجانس = قرار أسرع", desc: "الأرضية المعتمدة تمنح ارتداداً متوقّعاً يقلّص زمن قراءة الكرة بـ 0.2 ثانية." },
                { num: "02", title: "إضاءة 1000 لوكس بدون وهج", desc: "تُحسّن تتبّع الكرة بنسبة 32% مقارنة بالملاعب التقليدية." },
                { num: "03", title: "تكييف ثابت = أداء ثابت", desc: "الجسم في 22°م يحافظ على التركيز ويقلّل الإصابات بنسبة 40%." },
                { num: "04", title: "زجاج 12مم = أمان كامل", desc: "صُمّم لتحمّل ضربات حتى 200كم/ساعة مع نقل ارتداد مثالي." }
              ].map((point) => (
                <div key={point.num} className="bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-md)] p-7 hover:border-[var(--accent)]/40 transition-colors">
                  <div className="flex items-start gap-6">
                    <span className="text-4xl font-black text-[var(--accent)]/30 tracking-tight">{point.num}</span>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] text-lg mb-2">{point.title}</h4>
                      <p className="text-[var(--muted)] leading-relaxed text-sm">{point.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Timeline */}
      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="eyebrow">رحلتك معنا</span>
            <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">ماذا يحدث <br /><span className="text-[var(--accent)]">بعد أول حجز؟</span></h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 right-6 md:right-1/2 md:translate-x-px w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-transparent"></div>
            {[
              { when: "اليوم 1", title: "أول حجز ولعب", desc: "تختبر الملعب وتشعر بالفرق من الضربة الأولى." },
              { when: "أول أسبوع", title: "تعرف على المجتمع", desc: "تنضم إلى مجموعة اللاعبين وتتعرّف على شركاء جدد." },
              { when: "أول شهر", title: "تطوّر ملحوظ", desc: "بعد 4 جلسات، يلاحظ اللاعبون تحسناً واضحاً في الدقة." },
              { when: "3 أشهر", title: "أنت لاعب بادل", desc: "تشارك في أول بطولة داخلية وتلعب تكتيكياً." }
            ].map((step, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8 mb-16 last:mb-0">
                <div className={`${idx % 2 === 0 ? "md:pl-12" : ""} pr-16 md:pr-0`}>
                  <div className="absolute right-0 md:right-1/2 md:translate-x-1/2 -translate-y-1 w-12 h-12 rounded-full bg-[var(--background)] border-4 border-[var(--accent)] flex items-center justify-center font-black text-[var(--primary)] text-sm">{idx + 1}</div>
                </div>
                <div className={`pr-16 md:pr-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <div className="bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-md)] p-7 shadow-[var(--shadow-elev-1)]">
                    <span className="eyebrow text-[var(--cta)]">{step.when}</span>
                    <h4 className="text-xl font-bold text-[var(--primary)] mt-2 mb-3">{step.title}</h4>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Customer Stories */}
      <Testimonials variant="dark" />

      {/* Section 9: FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow">إجابات سريعة</span>
              <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">ما يهمّك <br /><span className="text-[var(--accent)]">قبل الحجز.</span></h2>
              <p className="lead mb-10">جمعنا أكثر الأسئلة شيوعاً من لاعبينا.</p>
              <a href={whatsappUrl("لدي سؤال قبل الحجز")} className="btn-ghost">
                <MessageCircle className="w-4 h-4" />اسأل الفريق مباشرة
              </a>
            </div>
            <div className="lg:col-span-7 space-y-3">
              {courtFAQs.map((item, i) => (
                <details key={i} className="group bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
                  <summary className="cursor-pointer list-none flex items-center justify-between p-6 font-bold text-[var(--primary)] group-open:text-[var(--cta)] transition-colors">
                    <span className="text-base">{item.q}</span>
                    <span className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-2xl font-light shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-[var(--muted)] leading-relaxed text-[15px]">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Guarantee */}
      <section className="py-24 md:py-32 surface-luxe">
        <div className="container-luxury">
          <div className="bg-[var(--primary)] text-white rounded-[var(--radius-xl)] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--accent)]/15 blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[var(--cta)]/15 blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="pill-gold mb-6">ضمان النادي</div>
                <h2 className="display-2 mb-6">تجربة كاملة، <br /><span className="text-[var(--accent)]">أو حجز مجاني.</span></h2>
                <p className="lead text-white/70 mb-8">إذا لم تكن تجربتك على هذا الملعب تستحق العودة، حجزك القادم على حسابنا.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[{v:"100%",l:"ضمان الجودة"},{v:"24h",l:"إلغاء مرن"},{v:"0 ر.س",l:"دفع مسبق"}].map((g) => (
                    <div key={g.l} className="border border-white/15 rounded-2xl p-5 bg-white/[0.04]">
                      <div className="text-2xl font-black text-[var(--accent)] mb-1">{g.v}</div>
                      <div className="text-xs text-white/65 tracking-wider uppercase">{g.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 lg:text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#8b6b1f] mb-6">
                  <ShieldCheck className="w-14 h-14 text-[var(--primary)]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">وعد {siteConfig.clubName}</h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-xs mx-auto">لسنا مجرّد ملاعب. نحن علامة بُنيت على الثقة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className="py-24 md:py-32">
        <div className="container-luxury text-center max-w-3xl">
          <div className="gold-line mb-8 mx-auto"></div>
          <h2 className="display-2 mb-6 text-[var(--primary)]">جاهز للنزول <span className="text-[var(--cta)]">على هذا الملعب؟</span></h2>
          <p className="lead mb-10">احجز الآن واختر الوقت الذي يناسبك.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary text-base">
              <CalendarCheck className="w-5 h-5" />احجز {court.name}
            </Link>
            <a href={whatsappUrl(`أرغب بحجز ${court.name}`)} className="btn-ghost text-base">
              <MessageCircle className="w-5 h-5" />تحدث مع الفريق
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[var(--primary)] border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="text-[10px] text-white/50 uppercase tracking-wider">يبدأ من</div>
            <div className="text-lg font-black text-[var(--accent)]">{court.price} ر.س/ساعة</div>
          </div>
          <Link href="/booking" className="bg-[var(--cta)] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">احجز الآن</Link>
        </div>
      </div>
    </main>
  );
}
