import Image from "next/image";
import { Quote, Star } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

type Variant = "light" | "dark";

const playerImages = images.players;

export function Testimonials({ variant = "light" }: { variant?: Variant }) {
  const isDark = variant === "dark";
  return (
    <section className={`py-16 md:py-24 lg:py-32 relative overflow-hidden ${isDark ? "surface-night text-white" : "surface-luxe"}`}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">شهادات اللاعبين</span>
            <h2 className="display-2 mt-4 mb-6">مجتمع <br /><span className="text-[var(--accent)]">يثق بالتفاصيل</span></h2>
            <p className={`lead ${isDark ? "text-white/65" : ""}`}>لم نبنِ ملاعب فقط، بل بنينا تجربة كاملة يحدّث عنها لاعبونا كل يوم.</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-6 self-end">
            <div className="text-center">
              <div className="number-luxury">4.9</div>
              <div className="flex gap-0.5 justify-center my-2 text-[var(--accent)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className={`text-xs ${isDark ? "text-white/55" : "text-[var(--muted)]"}`}>تقييم Google</p>
            </div>
            <div className="text-center">
              <div className="number-luxury">+5,000</div>
              <p className={`text-xs mt-3 ${isDark ? "text-white/55" : "text-[var(--muted)]"}`}>لاعب نشط</p>
            </div>
            <div className="text-center">
              <div className="number-luxury">98%</div>
              <p className={`text-xs mt-3 ${isDark ? "text-white/55" : "text-[var(--muted)]"}`}>نسبة العودة للحجز</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((review, idx) => (
            <article key={idx} className={`relative rounded-[var(--radius-lg)] p-8 ${isDark ? "card-night" : "bg-[var(--background-elev)] border border-[var(--border)] shadow-[var(--shadow-elev-2)]"} ${idx === 1 ? "md:translate-y-6" : ""}`}>
              <Quote className={`w-10 h-10 mb-6 ${isDark ? "text-[var(--accent)]/40" : "text-[var(--accent)]/60"}`} />
              <div className="flex gap-1 mb-4 text-[var(--accent)]">
                {Array.from({ length: review.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className={`text-lg leading-relaxed mb-8 ${isDark ? "text-white/85" : "text-[var(--primary)]"}`}>"{review.content}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-current/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[var(--accent)]/30">
                  <Image src={playerImages[idx % playerImages.length]} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <p className={`text-xs ${isDark ? "text-white/55" : "text-[var(--muted)]"}`}>{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
