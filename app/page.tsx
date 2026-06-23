import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarCheck, MessageCircle, Sparkles, MoveLeft, Award, ShieldCheck, Target } from "@/lib/icons";
import { faqSchema, sportsClubSchema } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import { Testimonials } from "@/components/sections/testimonials";
import { FeaturedIn } from "@/components/sections/featured-in";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { LocationMap } from "@/components/sections/location-map";

const faqs = [
  { question: "كيف أحجز ملعب؟", answer: "عبر زر الواتساب أو صفحة الحجز خلال أقل من دقيقة." },
  { question: "هل توفرون مضارب وكرات؟", answer: "نعم، نوفر مضارب احترافية للإيجار وكرات بطولة جديدة لكل حجز." },
  { question: "هل يوجد مدربون للمبتدئين؟", answer: "بالتأكيد، أكاديميتنا تستقبل المبتدئين بمدربين معتمدين دولياً." }
];

export default function HomePage() {
  return (
    <main className="bg-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsClubSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="relative surface-night overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src={siteConfig.heroImage} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink)]/85 to-[var(--ink)]" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/15 blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/8 blur-[140px]"></div>

        <div className="container-luxury relative z-10 pt-36 pb-16 md:pt-40 md:pb-24 text-white">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="pill-gold mb-8 animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-soft)] animate-pulse"></span>
                BOULEVARD RIYADH CITY · منذ 2021
              </div>
              <h1 className="display-1 animate-fade-up">
                DON'T MISS<br /><span className="text-[var(--accent)]">OUT ON AN</span><br />EXPERIENCE.
              </h1>
              <p className="lead text-white/70 mt-8 max-w-xl animate-fade-up">
                <strong className="text-white">PADEL RUSH</strong> — الوجهة النهائية للاعبي البادل في المملكة. ملاعب داخلية وخارجية، أكاديمية، بطولات، مقهى، ومتجر داخل النادي.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
                <a href={siteConfig.bookingUrl} target="_blank" rel="noopener" className="btn-primary text-base">
                  <CalendarCheck className="w-5 h-5" />احجز عبر Playtomic
                </a>
                <a href={whatsappUrl("استفسار - بادل رش")} className="btn-ghost-light text-base">
                  <MessageCircle className="w-5 h-5" />واتساب فوري
                </a>
              </div>

              <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6">
                <div><div className="text-2xl sm:text-4xl font-black number-luxury">11</div><p className="text-[10px] sm:text-[11px] text-white/55 mt-1 sm:mt-2 leading-relaxed">ملعب داخلي وخارجي</p></div>
                <div><div className="text-2xl sm:text-4xl font-black number-luxury">18h</div><p className="text-[10px] sm:text-[11px] text-white/55 mt-1 sm:mt-2 leading-relaxed">8:30 ص — 2:30 ص</p></div>
                <div><div className="text-2xl sm:text-4xl font-black number-luxury">5★</div><p className="text-[10px] sm:text-[11px] text-white/55 mt-1 sm:mt-2 leading-relaxed">على Playtomic</p></div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[640px] hidden lg:block">
              <div className="absolute top-0 right-0 w-[62%] h-[58%] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-luxury)] ring-1 ring-white/10 z-20">
                <Image src={siteConfig.courts[0].image} alt="ملعب داخلي" fill className="object-cover" priority sizes="40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
                <div className="absolute top-5 right-5"><span className="pill-light">Indoor Premium</span></div>
                <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between text-white">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/70">ملعب 01</span>
                  <span className="text-sm font-bold text-[var(--accent)]">WPT Certified</span>
                </div>
              </div>

              <div className="absolute top-[12%] left-0 w-[42%] h-[42%] rounded-[var(--radius-md)] overflow-hidden shadow-[var(--shadow-elev-3)] ring-1 ring-white/10 z-10">
                <Image src={siteConfig.courts[2].image} alt="ملعب خارجي" fill className="object-cover" sizes="30vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 right-4 text-white">
                  <div className="text-[10px] uppercase tracking-wider text-white/70">VIP</div>
                  <div className="text-sm font-bold">Outdoor</div>
                </div>
              </div>

              <div className="absolute bottom-[14%] right-[22%] w-[46%] h-[40%] rounded-[var(--radius-md)] overflow-hidden shadow-[var(--shadow-elev-3)] ring-1 ring-white/10 z-30">
                <Image src={siteConfig.coaches[0].image} alt="مدرب" fill className="object-cover object-top" sizes="30vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/70 to-transparent" />
                <div className="absolute bottom-3 right-4 left-4 text-white">
                  <div className="text-[10px] uppercase tracking-wider text-[var(--accent)]">المدرب الأول</div>
                  <div className="text-sm font-bold">{siteConfig.coaches[0].name}</div>
                </div>
              </div>

              <div className="absolute bottom-0 left-[5%] w-[44%] h-[34%] rounded-[var(--radius-md)] overflow-hidden shadow-[var(--shadow-elev-3)] ring-1 ring-white/10 z-20">
                <Image src={siteConfig.tournaments[0].image} alt="بطولة" fill className="object-cover" sizes="30vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 right-4 text-white">
                  <div className="text-[10px] uppercase tracking-wider text-white/70">بطولات</div>
                  <div className="text-sm font-bold">+50 بطولة سنوية</div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#9f1239] flex flex-col items-center justify-center text-white shadow-2xl z-40 rotate-[-12deg] ring-2 ring-white/20">
                <span className="text-[10px] font-bold tracking-wider">WHOOP</span>
                <span className="text-base font-black leading-none">COURT</span>
                <span className="text-[9px] font-bold tracking-wider">حصري</span>
              </div>

              <div className="absolute top-[44%] right-[44%] bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-2xl z-40 flex items-center gap-3 rotate-[3deg]">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 ring-2 ring-white"></div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 ring-2 ring-white"></div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 ring-2 ring-white"></div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">يلعبون الآن</div>
                  <div className="text-xs text-slate-900 font-black">+24 لاعباً مباشرة</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 lg:hidden">
            {[siteConfig.courts[0].image, siteConfig.courts[2].image, siteConfig.coaches[0].image, siteConfig.tournaments[0].image].map((src, i) => (
              <div key={i} className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px divider-gold opacity-50"></div>
      </section>

      <section className="bg-[var(--ink-deep)] text-white border-y border-[var(--gold)]/15">
        <div className="container-luxury py-5">
          <div className="flex items-center justify-between gap-4 text-xs flex-wrap">
            <div className="flex items-center gap-3 text-white/70">
              <Sparkles className="w-4 h-4 text-[var(--gold-soft)]" />
              <span className="tracking-wider"><span className="text-[var(--gold-soft)] font-bold">👑 King of the Court</span> — كل اثنين 7-9 مساءً · <span className="text-[var(--accent-soft)] font-bold">🙋‍♀️ Women Day</span> — كل أربعاء 6-7:30 مساءً</span>
            </div>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener" className="text-[var(--gold-soft)] hover:text-white font-bold inline-flex items-center gap-2 group">انضم الآن <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /></a>
          </div>
        </div>
      </section>

      <FeaturedIn variant="light" />

      {/* ═══════════ RUSH MOMENT — Cinematic Action Section ═══════════ */}
      <section className="relative bg-[var(--ink-deep)] overflow-hidden isolate">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.rushMoment}
            alt="Padel Rush — action moment"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          {/* Cinematic dark gradients — keep right side image readable, left side dark for text */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[var(--ink-deep)]/55 to-[var(--ink-deep)]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/80 via-transparent to-[var(--ink-deep)]/40" />
          {/* Subtle film grain via lime tint */}
          <div className="absolute inset-0 bg-[var(--accent)]/[0.04] mix-blend-overlay"></div>
        </div>

        {/* Ambient lime glow */}
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/18 blur-[140px] z-0"></div>
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-[var(--green)]/12 blur-[140px] z-0"></div>

        {/* Top + Bottom hairlines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent z-10"></div>

        <div className="container-luxury relative z-10 py-16 sm:py-28 md:py-40 lg:py-52 text-white">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Empty right column (in RTL, this is visually on the right) — let the action breathe */}
            <div className="hidden lg:block lg:col-span-5"></div>

            {/* Text content — sits on the LEFT visually in RTL */}
            <div className="lg:col-span-7 lg:order-2 max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-8 animate-fade-up">
                <span className="w-12 h-px bg-[var(--accent)]"></span>
                <span className="text-[var(--accent)] text-[11px] font-black tracking-[0.32em] uppercase">
                  Rush Moment
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
              </div>

              <h2 className="display-1 mb-7 leading-[0.95] animate-fade-up">
                هذه ليست<br />
                مجرد مباراة.<br />
                <span className="text-[var(--accent)] shimmer-gold">إنها لحظة.</span>
              </h2>

              <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-12 animate-fade-up">
                حين تقفز لتُحرز نقطة الفوز، حين يُحلّق المضرب فوقك، حين تصرخ مع زميلك بعد ضربة لا تُنسى — هنا في
                <span className="text-white font-bold"> Padel Rush </span>
                نصنع هذه اللحظات. <span className="text-[var(--accent)] font-bold">كل يوم.</span>
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-stretch gap-x-6 sm:gap-x-10 gap-y-6 mb-10 sm:mb-14 animate-fade-up">
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--accent)] mb-1">+12K</div>
                  <p className="text-[11px] text-white/55">مباراة سنوياً</p>
                </div>
                <div className="w-px bg-white/15"></div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--accent)] mb-1">+850</div>
                  <p className="text-[11px] text-white/55">عضو نشط</p>
                </div>
                <div className="w-px bg-white/15"></div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--accent)] mb-1">4.9★</div>
                  <p className="text-[11px] text-white/55">Playtomic</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-up">
                <a href={siteConfig.bookingUrl} target="_blank" rel="noopener" className="btn-primary">
                  <CalendarCheck className="w-5 h-5" />احجز لحظتك القادمة
                </a>
                <a href={whatsappUrl("استفسار - بادل رش")} className="btn-ghost-light">
                  <MessageCircle className="w-5 h-5" />تحدث مع الفريق
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating cinematic markers */}
        <div className="hidden lg:flex absolute top-10 left-10 z-20 items-center gap-2 text-[var(--accent)] text-[10px] tracking-[0.32em] uppercase font-bold opacity-80">
          <span className="w-2 h-2 rounded-sm bg-[var(--accent)] animate-pulse"></span>
          REC · Court 03 · 19:42
        </div>

        <div className="hidden lg:block absolute top-10 right-10 z-20 text-right">
          <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold">Frame 247 / 360</div>
          <div className="text-[var(--accent)] text-[11px] tracking-[0.2em] font-black mt-1">PADEL RUSH</div>
        </div>

        {/* Floating event chip — bottom right (RTL: visually bottom-right) */}
        <div className="hidden md:flex absolute bottom-12 right-12 z-20 items-center gap-4 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl ring-1 ring-white/40">
          <div className="w-11 h-11 rounded-xl bg-[var(--accent)] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-[var(--ink)]" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] font-black">حدث الأسبوع</div>
            <div className="text-sm font-black text-[var(--ink)]">King of the Court — الإثنين</div>
          </div>
        </div>

        {/* Big floating play-state badge — bottom left */}
        <div className="hidden md:flex absolute bottom-12 left-12 z-20 items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
          </span>
          <span className="text-white/80 text-xs tracking-[0.2em] uppercase font-bold">
            LIVE NOW — <span className="text-[var(--accent)]">+24 لاعباً</span>
          </span>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image src={siteConfig.aboutImage} alt="Club facilities" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden md:block bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-luxury)] max-w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/15 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <span className="font-bold text-sm">معايير عالمية</span>
                </div>
                <p className="text-[var(--muted)] text-sm leading-relaxed">مواد إنشاء معتمدة من World Padel Tour لضمان أداء مماثل للبطولات الدولية.</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="eyebrow">عن النادي</span>
              <h2 className="display-2 mt-4 mb-6 text-[var(--primary)]">ليس مجرد ملعب،<br /><span className="text-[var(--accent)]">بل بيئة أداء كاملة.</span></h2>
              <p className="lead mb-10">درسنا أدق التفاصيل من أرضية الملعب إلى تيار التكييف. الهدف؟ أن تخرج من كل مباراة بإحساس مختلف. هنا نلعب البادل كما يجب أن يُلعب.</p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { label: "زجاج بانورامي", value: "12مم" },
                  { label: "إضاءة LED", value: "1000 لوكس" },
                  { label: "تكييف", value: "22°م ثابت" },
                  { label: "أرضية", value: "WPT معتمدة" }
                ].map((spec) => (
                  <div key={spec.label} className="border-r-2 border-[var(--accent)] pr-4">
                    <div className="text-2xl font-bold text-[var(--primary)] tracking-tight">{spec.value}</div>
                    <div className="text-xs text-[var(--muted)] mt-1">{spec.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-[var(--primary)] hover:text-[var(--cta)] group transition-colors">
                اكتشف قصة النادي<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-court text-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px divider-gold opacity-40"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[var(--accent)]/10 blur-[120px]"></div>
        <div className="container-luxury relative">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow text-[var(--gold-soft)]">لماذا نحن</span>
              <h2 className="display-2 mt-4 mb-6">ثلاثة ركائز <span className="shimmer-gold">تصنع الفارق.</span></h2>
            </div>
            <p className="lg:col-span-5 lead text-white/65">قبل أن نفتح أبوابنا، حدّدنا ثلاث ركائز لا نتنازل عنها.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", icon: ShieldCheck, title: "هندسة الملعب", desc: "ملاعب مبنية وفق مواصفات WPT 2025: أرضية امتصاص صدمات، زجاج مقوى 12مم، إضاءة بدون وهج، وتكييف يحافظ على 22°م.", accent: "crimson" },
              { num: "02", icon: Award, title: "مدربون دوليون", desc: "طاقم تدريب معتمد من FIP والاتحاد الإسباني، مع لاعبين سابقين على دائرة WPT.", accent: "gold" },
              { num: "03", icon: Target, title: "تجربة موثوقة", desc: "حجز فوري، تأكيد لحظي، مرافق فندقية، وفريق خدمة على مدار اليوم.", accent: "crimson" }
            ].map((pillar) => (
              <div key={pillar.num} className="relative card-night p-6 sm:p-10 md:p-12 group">
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${pillar.accent === "gold" ? "via-[var(--gold)]" : "via-[var(--accent)]"} to-transparent opacity-50`}></div>
                <div className="flex items-start justify-between mb-12">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${pillar.accent === "gold" ? "bg-[var(--gold)]/15 border border-[var(--gold)]/35" : "bg-[var(--accent)]/15 border border-[var(--accent)]/35"}`}>
                    <pillar.icon className={`w-6 h-6 ${pillar.accent === "gold" ? "text-[var(--gold-soft)]" : "text-[var(--accent-soft)]"}`} />
                  </div>
                  <span className={`text-4xl sm:text-6xl font-black tracking-tight ${pillar.accent === "gold" ? "text-[var(--gold)]/12" : "text-[var(--accent)]/12"}`}>{pillar.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-white/65 leading-relaxed text-[15px]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 surface-luxe relative">
        <div className="container-luxury relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            <div className="lg:col-span-6 lg:order-2 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[var(--accent)]/20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[var(--gold)]/30 blur-2xl"></div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-[var(--radius-lg)] overflow-hidden ring-1 ring-[var(--ink)]/10 shadow-[var(--shadow-luxury)]">
                <Image src={siteConfig.coaches[0].image} alt="Coach training" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/30 to-transparent" />
                <div className="absolute top-6 right-6"><span className="pill-gold">FIP Certified</span></div>
                <div className="absolute bottom-8 right-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-1">الكابتن {siteConfig.coaches[0].name}</h3>
                  <p className="text-white/70 text-sm">{siteConfig.coaches[0].experience} في تدريب البادل</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <span className="eyebrow">الأكاديمية</span>
              <h2 className="display-2 mt-4 mb-6 text-[var(--ink)]">طريقتك إلى <br /><span className="text-[var(--accent-deep)]">المستوى التنافسي.</span></h2>
              <p className="lead mb-10">برامج تدريبية مدروسة علمياً، تأخذك من ممسك المضرب لأول مرة إلى صفوف اللاعبين المتقدمين.</p>
              <div className="space-y-4 mb-10">
                {siteConfig.academyPrograms.slice(0, 3).map((program, i) => (
                  <Link key={i} href="/academy" className="flex items-center gap-5 p-5 bg-[var(--background-elev)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)] hover:shadow-[var(--shadow-elev-2)] transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center font-bold text-[var(--accent)] shrink-0">0{i + 1}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[var(--primary)] text-base">{program.title}</h4>
                      <p className="text-[var(--muted)] text-xs mt-0.5">{program.duration}</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:-translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <Link href="/academy" className="btn-ghost">جميع برامج الأكاديمية</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
            <div>
              <span className="eyebrow">الملاعب</span>
              <h2 className="display-2 mt-4 text-[var(--primary)]">اختر ملعبك.</h2>
            </div>
            <p className="text-[var(--muted)] max-w-md text-lg">11 ملعباً بمواصفات مختلفة — داخلية، خارجية، وملعب WHOOP الحصري.</p>
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            {siteConfig.courts.map((court, idx) => (
              <Link key={court.slug} href={`/courts/${court.slug}`} className={`group relative rounded-[var(--radius-lg)] overflow-hidden ${idx === 0 ? "md:col-span-7 h-[280px] sm:h-[360px] md:h-[460px]" : "md:col-span-5 h-[280px] sm:h-[360px] md:h-[460px]"}`}>
                <Image src={court.image} alt={court.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/30 to-transparent" />
                <div className="absolute top-6 right-6"><span className="pill-light">{court.type}</span></div>
                <div className="absolute bottom-0 right-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{court.name}</h3>
                  <p className="text-white/70 text-sm mb-5 line-clamp-2">{court.description}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">يبدأ من</div>
                      <div className="text-2xl font-bold text-[var(--accent)]">{court.price} <span className="text-sm font-normal text-white/70">ر.س / 90 د</span></div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-white/90 group-hover:text-[var(--accent)] font-bold text-sm transition-colors">
                      التفاصيل<MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials variant="light" />

      <InstagramFeed variant="dark" />

      <LocationMap />

      <section className="py-16 md:py-24 lg:py-32 surface-lime text-[var(--ink)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-12 mix-blend-overlay">
          <Image src={siteConfig.heroImage} alt="" fill className="object-cover" />
        </div>
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/30 blur-[140px]"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--ink)]/10 blur-[140px]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--ink)]/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--ink)]/20 to-transparent"></div>

        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--ink)] text-[var(--accent)] text-xs font-bold tracking-[0.18em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
                RUSH PASS · MEMBERSHIP
              </div>
              <h2 className="display-2 mb-6 text-[var(--ink)]">عضوية واحدة، <br /><span className="underline decoration-4 decoration-[var(--ink)] underline-offset-4">مزايا لا تنتهي.</span></h2>
              <p className="lead text-[var(--ink)]/80 mb-10 max-w-xl">RUSH PASS — أعضاء النادي يحجزون قبل الجميع، يدفعون أقل، ويصلون إلى فعاليات حصرية مثل King of the Court وLadies Cup.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/memberships" className="btn-dark">استعرض العضويات</Link>
                <a href={whatsappUrl("استفسار عن RUSH PASS")} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[var(--ink)] text-[var(--ink)] font-bold hover:bg-[var(--ink)] hover:text-[var(--accent)] transition-all">استشارة شخصية</a>
              </div>
            </div>
            <div className="lg:col-span-5 grid gap-4">
              {siteConfig.memberships.map((tier) => (
                <div key={tier.name} className={`flex items-center justify-between p-6 rounded-2xl backdrop-blur-md transition-all hover:-translate-y-1 ${tier.popular ? "bg-[var(--ink)] text-white border border-[var(--ink)] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)]" : "bg-white/40 border border-[var(--ink)]/15 hover:bg-white/60"}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-bold text-lg ${tier.popular ? "" : "text-[var(--ink)]"}`}>{tier.name}</h4>
                      {tier.popular && <span className="text-[10px] bg-[var(--accent)] text-[var(--ink)] px-2 py-0.5 rounded-full font-black tracking-wider">POPULAR</span>}
                    </div>
                    <p className={`text-xs ${tier.popular ? "text-white/70" : "text-[var(--ink)]/60"}`}>{tier.benefits[0]}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-black ${tier.popular ? "text-[var(--accent)]" : "text-[var(--ink)]"}`}>{tier.price}</div>
                    <p className={`text-xs ${tier.popular ? "text-white/55" : "text-[var(--ink)]/55"}`}>{tier.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 surface-luxe relative overflow-hidden">
        <div className="container-luxury text-center max-w-3xl relative">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="gold-line"></span>
            <span className="label-luxury text-[var(--accent-deep)]">EXPERIENCE</span>
            <span className="gold-line"></span>
          </div>
          <h2 className="display-2 mb-6 text-[var(--ink)]">DON'T MISS OUT <br /><span className="bg-[var(--ink)] text-[var(--accent)] px-4 py-1 inline-block rounded-md">ON AN EXPERIENCE.</span></h2>
          <p className="lead mb-10">احجز ملعبك الآن عبر Playtomic أو تواصل معنا مباشرة على واتساب.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener" className="btn-primary text-base">
              <CalendarCheck className="w-5 h-5" />احجز عبر Playtomic
            </a>
            <a href={whatsappUrl("حجز - بادل رش")} className="btn-ghost text-base">
              <MessageCircle className="w-5 h-5" />تحدث مع الفريق
            </a>
          </div>
          <p className="text-xs text-[var(--muted)] mt-8 inline-flex items-center gap-4 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--gold)]"></span>بدون دفع مسبق</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--gold)]"></span>إلغاء مرن قبل 24 ساعة</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--gold)]"></span>تأكيد فوري</span>
          </p>
        </div>
      </section>
    </main>
  );
}
