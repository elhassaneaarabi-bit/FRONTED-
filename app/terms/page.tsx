import { metadata } from "@/lib/seo";

export const generateMetadata = () => metadata("الشروط والأحكام", "الشروط والأحكام", "/terms");

export default function TermsPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen pt-32 pb-20">
      <div className="container-luxury max-w-3xl">
        <span className="eyebrow">قانوني</span>
        <h1 className="display-2 text-[var(--primary)] mt-4 mb-10">الشروط والأحكام</h1>
        <div className="space-y-6 text-[var(--muted)] leading-relaxed text-lg">
          <p>باستخدامك لخدماتنا، فإنك توافق على هذه الشروط والأحكام.</p>
          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-3">الحجوزات</h2>
          <p>الحجز يتم عبر الموقع أو واتساب، والإلغاء مجاني قبل 24 ساعة من الموعد.</p>
          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-3">العضويات</h2>
          <p>العضويات غير قابلة للاسترداد بعد 7 أيام من تاريخ الاشتراك.</p>
          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-3">قواعد الملاعب</h2>
          <p>يلتزم اللاعبون بقواعد السلامة وآداب اللعب داخل المنشأة.</p>
        </div>
      </div>
    </main>
  );
}
