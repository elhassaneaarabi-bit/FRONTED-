import Image from "next/image";
import { Instagram } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

const captions = ["King of the Court 👑", "Women Exclusive Day 🙋‍♀️", "WHOOP's Court 🔥", "Night Sessions", "Padel Shop 🎾", "Tournament Vibes", "Coaching Session", "BLVD Atmosphere"];
const posts = images.instagram.map((src, i) => ({ src, caption: captions[i] }));

export function InstagramFeed({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <section className={`py-24 md:py-32 relative overflow-hidden ${isDark ? "surface-night text-white" : ""}`}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">من حساب النادي</span>
            <h2 className="display-2 mt-4 mb-6">عيش لحظات <br /><span className="text-[var(--accent)]">@padelrush.</span></h2>
            <p className={`lead ${isDark ? "text-white/65" : ""}`}>من بطولات Monday Night إلى Women's Day وSundowns على ملاعب BLVD — تابع كل لحظة على إنستجرام.</p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <a href={siteConfig.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-xl shadow-rose-900/30 hover:scale-105 transition-transform">
              <Instagram className="w-5 h-5" />
              <span>تابعنا على Instagram</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">@padelrush</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <a key={i} href={siteConfig.instagram} target="_blank" rel="noopener"
              className={`group relative aspect-square rounded-[var(--radius-md)] overflow-hidden ${isDark ? "ring-1 ring-white/10" : "ring-1 ring-[var(--border)]"} ${i === 0 || i === 5 ? "md:row-span-2 md:col-span-2 md:aspect-auto" : ""}`}>
              <Image src={post.src} alt={post.caption} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-50 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-rose-600 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                <Instagram className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 right-0 left-0 p-4 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{post.caption}</p>
                <p className="text-[10px] text-white/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">عرض على Instagram ↗</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
