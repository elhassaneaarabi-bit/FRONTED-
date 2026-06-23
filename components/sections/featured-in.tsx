const logos = ["WHOOP", "PLAYTOMIC", "BLVD RIYADH", "SAUDI PADEL FED.", "FIP", "ADIDAS PADEL"];

export function FeaturedIn({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <section className={`py-14 border-y ${isDark ? "border-white/8 bg-[var(--ink-deep)]" : "border-[var(--border)] bg-[var(--background-elev)]"} overflow-hidden relative`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent"></div>
      <div className="container-luxury">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="gold-line"></span>
          <p className={`text-center text-[10px] tracking-[0.3em] uppercase font-bold ${isDark ? "text-[var(--gold-soft)]" : "text-[var(--gold-deep)]"}`}>شركاء بادل رَش</p>
          <span className="gold-line"></span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-14 gap-y-4 sm:gap-y-6">
          {logos.map((code) => (
            <span key={code} className={`font-black tracking-[0.1em] sm:tracking-[0.18em] text-[11px] sm:text-sm md:text-base transition-all ${isDark ? "text-white/55 hover:text-[var(--gold-soft)]" : "text-[var(--ink)]/55 hover:text-[var(--accent)]"} hover:-translate-y-0.5`}>{code}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
