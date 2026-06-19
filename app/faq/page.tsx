import { faqSchema, metadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { MessageCircle } from "@/lib/icons";

export const generateMetadata = () => metadata("الأسئلة الشائعة", "إجابات أهم الأسئلة", "/faq");

const faqs = [
  { question: "كيف أحجز ملعب؟", answer: "يمكنك الحجز عبر واتساب أو نموذج التواصل." },
  { question: "هل توجد عضويات؟", answer: "نعم، توجد باقات شهرية، ربع سنوية، وسنوية." },
  { question: "هل توجد أكاديمية؟", answer: "نعم، توجد جلسات خاصة وجماعية وباقات تدريب." },
  { question: "هل توفرون المضارب والكرات؟", answer: "نعم، نوفر مضارب احترافية للإيجار وكرات بطولة جديدة لكل حجز." },
  { question: "ما هي سياسة الإلغاء؟", answer: "إلغاء مجاني قبل 24 ساعة من موعد الحجز." },
  { question: "هل الملعب مكيّف؟", answer: "نعم، جميع الملاعب الداخلية مكيفة بالكامل." }
];

export default function FaqPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <div className="container-luxury max-w-4xl">
        <div className="text-center mb-16">
          <span className="eyebrow">إجابات سريعة</span>
          <h1 className="display-1 mt-4 mb-6 text-[var(--primary)]">الأسئلة <span className="text-[var(--accent)]">الشائعة.</span></h1>
        </div>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-[var(--background-elev)] border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
              <summary className="cursor-pointer list-none flex items-center justify-between p-6 font-bold text-[var(--primary)]">
                <span>{faq.question}</span>
                <span className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-2xl font-light group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--muted)] leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>

        <div className="text-center">
          <p className="lead mb-6">لم تجد إجابتك؟</p>
          <a href={whatsappUrl("لدي سؤال")} className="btn-primary">
            <MessageCircle className="w-5 h-5" />اسأل الفريق
          </a>
        </div>
      </div>
    </main>
  );
}
