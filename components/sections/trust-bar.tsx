import { ShieldCheck, Award, Trophy, Sparkles } from "@/lib/icons";

const items = [
  { icon: ShieldCheck, label: "11 ملعب احترافي" },
  { icon: Award, label: "WHOOP Court حصري" },
  { icon: Trophy, label: "King of the Court أسبوعي" },
  { icon: Sparkles, label: "Women Day كل أربعاء" }
];

export function TrustBar({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className={`border-y ${isDark ? "border-white/10 bg-[var(--ink-deep)]" : "border-[var(--border)] bg-[var(--background-elev)]"}`}>
      <div className="container-luxury py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {items.map((item, i) => (
            <div key={item.label} className={`flex items-center gap-3 ${isDark ? "text-white/90" : "text-[var(--ink)]"} ${i > 0 ? "md:border-r md:pr-6" : ""} ${isDark ? "md:border-white/8" : "md:border-[var(--border)]"}`}>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${i % 2 === 0 ? (isDark ? "bg-[var(--accent)]/15 border border-[var(--accent)]/30" : "bg-[var(--accent)]/10 border border-[var(--accent)]/25") : (isDark ? "bg-[var(--gold)]/12 border border-[var(--gold)]/30" : "bg-[var(--gold)]/10 border border-[var(--gold)]/30")}`}>
                <item.icon className={`w-4 h-4 ${i % 2 === 0 ? (isDark ? "text-[var(--accent-soft)]" : "text-[var(--accent)]") : (isDark ? "text-[var(--gold-soft)]" : "text-[var(--gold-deep)]")}`} />
              </div>
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
