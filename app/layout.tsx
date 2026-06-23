import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Tajawal } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab";
import { StickyBookingBar } from "@/components/layout/sticky-booking-bar";
import { Pixels } from "@/components/analytics/pixels";
import "@/styles/globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap"
});

const ibm = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap"
});

export const metadata: Metadata = {
  title: `Padel Rush | بادل رَش — Boulevard Riyadh City`,
  description: `Padel Rush · DON'T MISS OUT ON AN EXPERIENCE. 8 ملاعب بادل داخلية وخارجية في Boulevard Riyadh City. احجز عبر Playtomic. King of the Court، Women Day، أكاديمية، ومتجر.`
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} ${ibm.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFAB />
        <StickyBookingBar />
        <Pixels />
      </body>
    </html>
  );
}
