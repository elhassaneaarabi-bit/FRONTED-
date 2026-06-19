import { Clock, MapPin, MessageCircle, Phone } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export function LocationMap() {
  return (
    <section className="py-24 md:py-32 surface-luxe">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">قلب الرياض</span>
          <h2 className="display-2 text-[var(--primary)] mt-4 mb-6">داخل <span className="text-[var(--accent)]">Boulevard Riyadh City.</span></h2>
          <p className="lead">في أكبر وجهة ترفيهية بالعاصمة — موقف خاص، دخول مباشر، وأجواء BLVD على بُعد خطوات.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 relative h-[460px] lg:h-[560px] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-luxury)] ring-1 ring-[var(--border)]">
            <iframe
              src="https://www.google.com/maps?q=Padel+Rush+Boulevard+Riyadh+City+Hittin&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Padel Rush - Boulevard Riyadh City"
            />
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener"
              className="absolute top-4 right-4 bg-white text-[var(--primary)] px-4 py-2 rounded-full text-xs font-bold shadow-xl hover:bg-[var(--accent)] hover:text-white transition-colors">
              فتح في Google Maps ↗
            </a>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-lg)] p-7 shadow-[var(--shadow-elev-2)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">العنوان</h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-3">{siteConfig.address}</p>
                  <p className="text-[var(--muted)] text-xs"><span className="font-bold text-[var(--primary)]">Plus Code:</span> {siteConfig.plusCode}</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-lg)] p-7 shadow-[var(--shadow-elev-2)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">ساعات العمل</h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{siteConfig.workingHours}</p>
                  <p className="text-xs text-[var(--cta)] font-semibold mt-2">⚡ مفتوح الآن</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--primary)] text-white rounded-[var(--radius-lg)] p-7 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[var(--accent)]/15 blur-2xl"></div>
              <div className="relative z-10">
                <h4 className="font-bold mb-4 text-lg">تواصل مباشر</h4>
                <div className="flex flex-col gap-2.5">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-white/85 hover:text-white text-sm">
                    <Phone className="w-4 h-4 text-[var(--accent)]" />
                    {siteConfig.phoneDisplay}
                  </a>
                  <a href={whatsappUrl("استفسار - بادل رش")} className="flex items-center gap-3 text-white/85 hover:text-white text-sm">
                    <MessageCircle className="w-4 h-4 text-[var(--accent)]" />
                    واتساب: +966 53 372 9699
                  </a>
                </div>
                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener" className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-soft)] text-white py-3 rounded-full text-sm font-bold transition-colors">
                  <MapPin className="w-4 h-4" />احصل على الاتجاهات
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
