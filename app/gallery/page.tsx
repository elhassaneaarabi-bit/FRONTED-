import Image from "next/image";
import { metadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const generateMetadata = () => metadata("المعرض", "صور النادي", "/gallery");

export default function GalleryPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen pt-28 sm:pt-32 pb-24 sm:pb-20">
      <div className="container-luxury">
        <div className="text-center mb-10 sm:mb-16">
          <span className="eyebrow">المعرض</span>
          <h1 className="display-1 mt-4 mb-6 text-[var(--primary)]">لمحة <span className="text-[var(--accent)]">من النادي.</span></h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.gallery.map((item, i) => (
            <div key={i} className="relative aspect-square sm:aspect-[4/5] rounded-[var(--radius-md)] overflow-hidden group">
              <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" loading={i < 2 ? "eager" : "lazy"} />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/70 to-transparent" />
              <p className="absolute bottom-4 right-4 text-white font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
