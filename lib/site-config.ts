import { images } from "./images";

// ═══════════════════════════════════════════════════════════════════
// PADEL RUSH — SITE CONFIG
// ───────────────────────────────────────────────────────────────────
// لتبديل صور المدربين والملاعب بالصور الحقيقية:
//   1. حمّل الصور إلى:
//        frontend/public/coaches/   (مدربون: coach-01.jpg ... coach-06.jpg)
//        frontend/public/courts/    (ملاعب:  court-01.jpg ... court-06.jpg)
//        frontend/public/instagram/ (انستجرام: post-01.jpg ... post-08.jpg)
//   2. بدّل القيم في حقول "image:" أدناه من lib/images.ts إلى المسار المحلي مثل "/coaches/coach-01.jpg"
// ═══════════════════════════════════════════════════════════════════

export const siteConfig = {
  clubName: "بادل رَش",
  clubNameEn: "Padel Rush",
  logoText: "PADEL RUSH",
  tagline: "DON'T MISS OUT ON AN EXPERIENCE",
  city: "الرياض",
  address: "Boulevard Riyadh City — حي حطين، الرياض 13516",
  addressEn: "Boulevard Riyadh City, Hittin, Riyadh 13516",
  plusCode: "QJC3+73R",
  phone: "+966115207951",
  phoneDisplay: "966-11-520-7951",
  whatsapp: "966533729699",
  email: "info@padelrush.com",
  instagram: "https://instagram.com/padelrush",
  bookingUrl: "https://playtomic.com/clubs/padel-rush",
  googleMapsUrl: "https://www.google.com/maps?q=Padel+Rush+Boulevard+Riyadh+City",
  workingHours: "يومياً: 8:30 صباحاً - 2:30 صباحاً",
  openedYear: 2021,
  colors: {
    ink: "#0F1115",
    primary: "#0F1115",
    cta: "#C8F500",
    accent: "#C8F500",
    accentSoft: "#DDFA4D",
    accentDeep: "#98C200",
    green: "#00D964",
    background: "#FAFAFA"
  },
  heroImage: images.hero,
  aboutImage: images.about,
  courts: [
    {
      slug: "whoops-court",
      name: "WHOOP's Court — داخلي",
      type: "Indoor",
      image: images.courts.whoop, // → "/courts/court-01.jpg"
      description: "الملعب الرئيسي والأشهر برعاية WHOOP — تكييف مركزي، إضاءة استوديو، وأرضية بمواصفات بطولات.",
      features: ["تكييف مركزي", "إضاءة استوديو", "أرضية معتمدة", "زجاج بانورامي", "كاميرا تصوير"],
      peakSlots: ["18:00", "19:30", "21:00", "22:30"],
      offPeakSlots: ["09:00", "11:00", "13:00", "15:00"],
      price: 350
    },
    {
      slug: "indoor-court-2",
      name: "Court 2 — داخلي",
      type: "Indoor",
      image: images.courts.indoor2, // → "/courts/court-02.jpg"
      description: "ملعب داخلي مكيف بالكامل ومناسب لجميع المستويات — تجربة لعب ثابتة طوال السنة.",
      features: ["تكييف", "إضاءة LED", "أرضية احترافية"],
      peakSlots: ["18:00", "19:30", "21:00"],
      offPeakSlots: ["09:00", "11:00", "15:00"],
      price: 280
    },
    {
      slug: "private-court-3",
      name: "Court 3 — Private Indoor",
      type: "Indoor",
      image: images.courts.private3, // → "/courts/court-03.jpg"
      description: "ملعب داخلي خاص للمناسبات والجلسات الخاصة، خصوصية كاملة بتجربة فاخرة.",
      features: ["خصوصية كاملة", "تكييف", "مناسب للمناسبات", "خدمة ضيافة"],
      peakSlots: ["19:00", "20:30", "22:00"],
      offPeakSlots: ["10:00", "12:00", "16:00"],
      price: 420
    },
    {
      slug: "outdoor-court-1",
      name: "Court 1 — خارجي",
      type: "Outdoor",
      image: images.courts.outdoor1, // → "/courts/court-04.jpg"
      description: "ملعب خارجي بأجواء الرياض المفتوحة وإضاءة ليلية مميزة.",
      features: ["إضاءة ليلية", "أرضية معتمدة", "زجاج مقوّى"],
      peakSlots: ["18:30", "20:00", "21:30"],
      offPeakSlots: ["08:30", "10:30", "16:30"],
      price: 240
    },
    {
      slug: "outdoor-court-2",
      name: "Court 2 — خارجي",
      type: "Outdoor",
      image: images.courts.outdoor2, // → "/courts/court-05.jpg"
      description: "ملعب خارجي بمواصفات قياسية يناسب اللاعبين بجميع المستويات.",
      features: ["إضاءة ليلية", "أرضية معتمدة"],
      peakSlots: ["19:00", "20:30", "22:00"],
      offPeakSlots: ["09:00", "11:00", "16:00"],
      price: 240
    },
    {
      slug: "outdoor-court-3",
      name: "Court 3 — خارجي",
      type: "Outdoor",
      image: images.courts.outdoor3, // → "/courts/court-06.jpg"
      description: "ملعب خارجي بإطلالة مفتوحة، مناسب للأجواء الربيعية والشتوية.",
      features: ["إضاءة LED", "أرضية معتمدة"],
      peakSlots: ["18:30", "20:00", "21:30"],
      offPeakSlots: ["08:30", "11:30", "16:30"],
      price: 210
    },
    {
      slug: "outdoor-court-4",
      name: "Court 4 — خارجي",
      type: "Outdoor",
      image: images.courts.outdoor4, // → "/courts/court-07.jpg"
      description: "ملعب خارجي بأجواء مفتوحة مع إضاءة ليلية احترافية.",
      features: ["إضاءة ليلية", "أرضية معتمدة"],
      peakSlots: ["18:00", "19:30", "21:00"],
      offPeakSlots: ["09:00", "11:00", "16:00"],
      price: 210
    },
    {
      slug: "outdoor-court-5",
      name: "Court 5 — خارجي",
      type: "Outdoor",
      image: images.courts.outdoor5, // → "/courts/court-08.jpg"
      description: "ملعب خارجي واسع، ممتاز للمجموعات والحجوزات المسائية.",
      features: ["إضاءة LED", "أرضية معتمدة", "زجاج مقوّى"],
      peakSlots: ["18:30", "20:00", "22:00"],
      offPeakSlots: ["08:30", "10:30", "16:30"],
      price: 210
    },
    {
      slug: "central-court",
      name: "Central Court — خارجي",
      type: "Outdoor",
      image: images.courts.central, // → "/courts/court-09.jpg"
      description: "الملعب المركزي — أكبر ملعب خارجي بتصميم استاد مصغّر مع مدرجات للمشاهدين، مخصص للبطولات والمباريات الكبرى.",
      features: ["مدرجات مشاهدين", "إضاءة استاد", "أرضية بطولات", "كاميرات بث مباشر"],
      peakSlots: ["19:00", "21:00", "23:00"],
      offPeakSlots: ["10:00", "14:00", "17:00"],
      price: 350
    }
  ],
  pricing: {
    oneHour: 0,
    ninetyMinutes: 240,
    twoHours: 0,
    peakHour: 350,
    offPeakHour: 210,
    note: "جميع الحجوزات بنظام 90 دقيقة فقط — وفق نموذج النادي.",
    offers: [
      { title: "حجز الصباح", description: "أرخص الأسعار من 8:30 صباحاً إلى 3 عصراً — تبدأ من 210 ر.س." },
      { title: "King of the Court 🤴", description: "كل اثنين 7-9 مساءً — منافسة اجتماعية للفئة C (رجال)." },
      { title: "Women Exclusive Day 🙋‍♀️", description: "كل أربعاء 6 - 7:30 مساءً — جلسات حصرية للسيدات." },
      { title: "Padel Shop", description: "متجر داخل النادي لاحتياجات اللاعبين من مضارب وملابس." }
    ]
  },
  memberships: [
    { name: "PASS الشهري", price: "799 ر.س", period: "شهرياً", popular: false,
      benefits: ["أولوية حجز قبل 3 أيام", "خصم 10% على الحجوزات", "دعوات لفعاليات النادي", "متابعة فردية عبر واتساب"] },
    { name: "PASS الموسمي", price: "2099 ر.س", period: "كل 3 أشهر", popular: true,
      benefits: ["أولوية حجز قبل 5 أيام", "خصم 15% على الحجوزات", "دخول مجاني لـ King of the Court", "تجميد العضوية 7 أيام", "تيشيرت Padel Rush"] },
    { name: "PASS السنوي", price: "6999 ر.س", period: "سنوياً", popular: false,
      benefits: ["أولوية حجز قبل 7 أيام (VIP)", "خصم 25% على الحجوزات والتدريب", "دخول مجاني لجميع البطولات الداخلية", "تجميد العضوية 30 يوماً", "حقيبة Padel Rush كاملة"] }
  ],
  coaches: [
    { slug: "adrian-blanco", name: "Adrian Blanco Antelo",
      image: images.coaches.c01, // → "/coaches/coach-01.jpg"
      experience: "10+ سنوات", certifications: ["Professional Padel Coach", "FIP Certified"],
      specialties: ["جميع المستويات", "التكتيك المتقدم", "التحضير للبطولات"],
      bio: "مدرب محترف إسباني، يقدم دورات تدريبية متكاملة لجميع المستويات من المبتدئين حتى المحترفين عبر Playtomic Academy." },
    { slug: "coach-02", name: "Coach 02",
      image: images.coaches.c02, // → "/coaches/coach-02.jpg"
      experience: "6 سنوات", certifications: ["Padel Academy Coach"],
      specialties: ["السيدات", "التدريب الجماعي", "الناشئة"],
      bio: "متخصصة في فئة السيدات وWomen Exclusive Day، تجمع بين الانضباط والمرح." },
    { slug: "coach-03", name: "Coach 03",
      image: images.coaches.c03, // → "/coaches/coach-03.jpg"
      experience: "12 سنة", certifications: ["Spanish Padel Coach", "WPT Player"],
      specialties: ["المتقدمين", "التكتيك الهجومي", "التحضير للبطولات"],
      bio: "لاعب محترف سابق ومدرب إسباني متخصص في نقل اللاعبين المتقدمين إلى المستوى التنافسي." },
    { slug: "coach-04", name: "Coach 04",
      image: images.coaches.c04, // → "/coaches/coach-04.jpg"
      experience: "5 سنوات", certifications: ["Saudi Padel Federation", "FIP Level 1"],
      specialties: ["الأطفال", "Kids Rush", "التأسيس"],
      bio: "متخصّص في تدريب فئة الـ Kids Rush، يجمع بين الصبر، المتعة، والمنهجية لبناء جيل جديد من اللاعبين." },
    { slug: "coach-05", name: "Coach 05",
      image: images.coaches.c05, // → "/coaches/coach-05.jpg"
      experience: "10 سنوات", certifications: ["Argentine Padel Coach", "FIP Level 2"],
      specialties: ["تحليل الفيديو", "اللاعبين المتقدمين", "البطولات"],
      bio: "خبرة دولية في التحليل التكتيكي للمباريات وإعداد اللاعبين للبطولات على المستوى الإقليمي والدولي." },
    { slug: "coach-06", name: "Coach 06",
      image: images.coaches.c06, // → "/coaches/coach-06.jpg"
      experience: "7 سنوات", certifications: ["FIP Certified", "Fitness Specialist"],
      specialties: ["اللياقة البدنية", "Prehab", "الوقاية من الإصابات"],
      bio: "يجمع بين البادل وعلوم التدريب الرياضي. متخصص في برامج اللياقة الخاصة بلاعبي البادل والوقاية من الإصابات." }
  ],
  academyPrograms: [
    { title: "Beginner Rush",
      description: "تعلم أساسيات البادل في بيئة محفّزة — الوقوف، الضربات الأساسية، قراءة اللعب.",
      duration: "4 أسابيع (8 حصص)",
      image: images.academy.beginner },
    { title: "Advanced Rush",
      description: "ارتقِ بأدائك التنافسي — التكتيك، الدفاع بالزجاج، الهجوم، والاستعداد للبطولات.",
      duration: "8 أسابيع (16 حصة)",
      image: images.academy.advanced },
    { title: "Kids Rush",
      description: "برنامج آمن وممتع للأطفال (7-14 سنة) يركز على التوافق الحركي والمهارات الأساسية.",
      duration: "مستمر (حصتين أسبوعياً)",
      image: images.academy.kids }
  ],
  tournaments: [
    { slug: "king-of-the-court", title: "👑 King of the Court", date: "كل اثنين — 7 إلى 9 مساءً",
      category: "الفئة C — رجال", prize: "جوائز أسبوعية + نقاط ترتيب", status: "upcoming",
      image: images.tournaments.king },
    { slug: "rush-open", title: "Rush Open 2026", date: "قريباً — صيف 2026",
      category: "الفئة B & C", prize: "50,000 ر.س", status: "upcoming",
      image: images.tournaments.open },
    { slug: "ladies-cup", title: "Ladies Cup", date: "مارس 2026",
      category: "سيدات — جميع الفئات", prize: "20,000 ر.س", status: "upcoming",
      image: images.tournaments.ladies },
    { slug: "nextgen-tournament", title: "🏆 NextGen Tournament", date: "26 يونيو 2026 — 9 مساءً",
      category: "الفئة 0-7", prize: "180 ر.س رسوم الاشتراك", status: "upcoming",
      image: images.tournaments.open }
  ],
  testimonials: [
    { name: "عبدالله السالم", role: "لاعب منتظم",
      content: "أفضل ملاعب بادل في الرياض، خصوصاً WHOOP's Court. الإضاءة والتكييف على مستوى آخر، وتجربة الحجز عبر Playtomic سلسة.",
      rating: 5 },
    { name: "نورة الفهد", role: "Women Exclusive Day",
      content: "Women's Day يوم الأربعاء غيّر حياتي الرياضية. البيئة آمنة، المدربات محترفات، والأجواء ممتعة.",
      rating: 5 },
    { name: "محمد الدوسري", role: "King of the Court",
      content: "King of the Court أحد أحلى السهرات الأسبوعية. مستوى المنافسة عالي والأجواء حماسية.",
      rating: 5 }
  ],
  gallery: [
    { title: "WHOOP's Court", type: "image", src: images.gallery.g1 },
    { title: "BLVD Atmosphere", type: "image", src: images.gallery.g2 },
    { title: "King of the Court", type: "image", src: images.gallery.g3 },
    { title: "Women Day", type: "image", src: images.gallery.g4 }
  ],
  news: [
    {
      date: "2023-03-29",
      title: "حمّل Playtomic اليوم واحجز بنقرة واحدة 📱",
      excerpt: "حجز جلسة البادل أصبح أسهل من أي وقت! حمّل Playtomic واحجز ملعبك بضغطة زر.",
    },
    {
      date: "2023-01-27",
      title: "King of The Court 🤴🎾",
      excerpt: "كل اثنين من 7 إلى 9 مساءً — منافسة اجتماعية ممتعة للفئة C رجال. سجّل الآن وأحضر شريكك!",
    },
    {
      date: "2023-01-16",
      title: "Women Exclusive Day 🙋‍♀️🎾",
      excerpt: "كل أربعاء من 6 إلى 7:30 مساءً — جلسات حصرية للسيدات. للحجز عبر واتساب.",
    },
    {
      date: "2022-12-15",
      title: "الافتتاح التجريبي — SOFT OPENING 🎾🔥",
      excerpt: "مرحباً بكم في بادل رش — لا تفوّت التجربة!",
    },
  ],
  appLinks: {
    playtomic: "https://playtomic.com/clubs/padel-rush",
    googlePlay: "https://play.google.com/store/apps/details?id=com.playtomic.app",
    appStore: "https://apps.apple.com/app/playtomic/id892abordar",
  },
  stats: {
    courts: 9,
    indoorCourts: 3,
    outdoorCourts: 6,
    coachingYears: "5+",
    openSince: 2021,
    dailyPlayers: "200+",
  },
  amenities: [
    "Disabled Access — وصول لذوي الاحتياجات الخاصة",
    "Free Parking — مواقف مجانية",
    "Private Parking — مواقف خاصة",
    "Store — متجر بادل",
    "Vending Machine — آلات بيع",
    "Changing Room — غرف تبديل",
    "Lockers — خزائن",
    "WiFi — واي فاي مجاني",
  ],
  features: [
    "تكييف مركزي في الملاعب الداخلية",
    "إضاءة ليلية احترافية",
    "غرف تبديل مجهزة بالكامل مع خزائن",
    "كافيه ومتجر بادل داخل النادي",
    "تدريب للمبتدئين والمحترفين",
    "برنامج Kids Rush للأطفال",
    "مواقف مجانية وخاصة",
    "واي فاي مجاني",
    "وصول لذوي الاحتياجات الخاصة",
  ],
} as const;
