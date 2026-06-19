// ═══════════════════════════════════════════════════════════════════
// IMAGE SOURCES — Padel Rush
// ───────────────────────────────────────────────────────────────────
// نستخدم picsum.photos كمصدر موثوق ودائم العمل بـ seeds ثابتة
// لإعطاء صور عالية الجودة ومتناسقة. حين تتوفر الصور الحقيقية،
// بدّل المسارات إلى الملفات المحلية مثل "/courts/court-01.jpg"
// ═══════════════════════════════════════════════════════════════════

const PICSUM = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  // Hero — أقوى صورة للموقع
  hero: PICSUM("padelrush-hero-main", 2000, 1200),
  about: PICSUM("padelrush-club-facility", 1400, 1000),

  // RUSH MOMENT — صورة الأكشن السينمائية
  // ────────────────────────────────────────────────────────────
  // ⚡ احفظ صورة الأكشن التي أرسلتها (لاعبَين على ملعب البادل)
  //   في المسار التالي بالضبط:
  //      frontend/public/images/rush-moment.jpg
  //
  // ثم بدّل السطر التالي إلى:  rushMoment: "/images/rush-moment.jpg"
  // وسيستخدمها الموقع مباشرة بدون أي تعديل آخر.
  // ────────────────────────────────────────────────────────────
  rushMoment: PICSUM("padelrush-action-rally", 2000, 1300),

  // Courts (6 ملاعب)
  courts: {
    whoop: PICSUM("padelrush-whoop-court", 1400, 1000),
    indoor2: PICSUM("padelrush-indoor-2", 1400, 1000),
    private3: PICSUM("padelrush-private-court", 1400, 1000),
    outdoor1: PICSUM("padelrush-outdoor-1", 1400, 1000),
    outdoor2: PICSUM("padelrush-outdoor-2", 1400, 1000),
    outdoor3: PICSUM("padelrush-outdoor-3", 1400, 1000)
  },

  // Coaches (6 مدربين)
  coaches: {
    c01: PICSUM("padelrush-coach-male-01", 800, 1000),
    c02: PICSUM("padelrush-coach-female-02", 800, 1000),
    c03: PICSUM("padelrush-coach-spanish-03", 800, 1000),
    c04: PICSUM("padelrush-coach-kids-04", 800, 1000),
    c05: PICSUM("padelrush-coach-argentine-05", 800, 1000),
    c06: PICSUM("padelrush-coach-fitness-06", 800, 1000)
  },

  // Academy programs
  academy: {
    beginner: PICSUM("padelrush-academy-beginner", 1200, 900),
    advanced: PICSUM("padelrush-academy-advanced", 1200, 900),
    kids: PICSUM("padelrush-academy-kids", 1200, 900)
  },

  // Tournaments
  tournaments: {
    king: PICSUM("padelrush-tournament-king", 1200, 800),
    open: PICSUM("padelrush-tournament-open-2026", 1200, 800),
    ladies: PICSUM("padelrush-tournament-ladies", 1200, 800)
  },

  // Gallery
  gallery: {
    g1: PICSUM("padelrush-gallery-whoop", 900, 1100),
    g2: PICSUM("padelrush-gallery-blvd", 900, 1100),
    g3: PICSUM("padelrush-gallery-king", 900, 1100),
    g4: PICSUM("padelrush-gallery-women-day", 900, 1100)
  },

  // Instagram feed (8)
  instagram: [
    PICSUM("padelrush-ig-king-court", 800, 800),
    PICSUM("padelrush-ig-women-day", 800, 800),
    PICSUM("padelrush-ig-whoop", 800, 800),
    PICSUM("padelrush-ig-night-session", 800, 800),
    PICSUM("padelrush-ig-padel-shop", 800, 800),
    PICSUM("padelrush-ig-tournament-vibes", 800, 800),
    PICSUM("padelrush-ig-coaching", 800, 800),
    PICSUM("padelrush-ig-blvd", 800, 800)
  ],

  // Player avatars for testimonials
  players: [
    PICSUM("padelrush-player-abdullah", 200, 200),
    PICSUM("padelrush-player-noura", 200, 200),
    PICSUM("padelrush-player-mohammed", 200, 200)
  ],

  // Generic backgrounds
  membershipBg: PICSUM("padelrush-membership-bg", 2000, 1200)
};
