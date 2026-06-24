import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type RushLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { w: 120, h: 28 },
  md: { w: 150, h: 36 },
  lg: { w: 190, h: 48 },
} as const;

export function RushLogo({ className = "", size = "md" }: RushLogoProps) {
  const dim = sizes[size];
  const heightClass =
    size === "lg" ? "h-10 sm:h-12" : size === "sm" ? "h-6 sm:h-7" : "h-7 sm:h-9";

  return (
    <span className={`inline-flex items-center rounded-lg bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${className}`}>
      <Image
        src={siteConfig.logoSrc}
        alt={siteConfig.logoText}
        width={dim.w}
        height={dim.h}
        className={`${heightClass} w-auto object-contain`}
        priority
      />
    </span>
  );
}
