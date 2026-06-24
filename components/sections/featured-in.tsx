const logos = ["WHOOP", "PLAYTOMIC", "BLVD", "FIP", "ADIDAS", "SAUDI PADEL"];

export function FeaturedIn({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <section className={`py-6 sm:py-14 border-y ${isDark ? "border-white/8 bg-[var(--ink-deep)]" : "border-[var(--border)] bg-[var(--background-elev)]"} overflow-hidden relative`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent"></div>
      <div className="container-luxury">
        <p className={`text-center text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.25em] uppercase font-bold mb-5 sm:mb-8 ${isDark ? "text-[var(--gold-soft)]" : "text-[var(--gold-deep)]"}`}>
          شركاء بادل رَش
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-2 gap-y-3 sm:gap-4 place-items-center">
          {logos.map((code) => (
            <span
              key={code}
              className={`font-black tracking-[0.05em] text-[10px] sm:text-xs md:text-sm text-center leading-tight transition-all ${isDark ? "text-white/55" : "text-[var(--ink)]/55"}`}
            >
              {code}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
