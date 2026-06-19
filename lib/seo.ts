import type { Metadata } from "next";
import { env } from "@/lib/env";
import { siteConfig } from "@/lib/site-config";

export const cityPages = [
  { slug: "riyadh", name: "الرياض" },
  { slug: "jeddah", name: "جدة" },
  { slug: "dammam", name: "الدمام" },
  { slug: "khobar", name: "الخبر" },
  { slug: "makkah", name: "مكة" },
  { slug: "madinah", name: "المدينة" }
] as const;

export function metadata(title: string, description: string, path = "/"): Metadata {
  const url = new URL(path, env.NEXT_PUBLIC_SITE_URL).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, locale: "ar_SA", type: "website" },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function sportsClubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: siteConfig.clubName,
    sport: "Padel",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "SA"
    },
    url: env.NEXT_PUBLIC_SITE_URL
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
}
