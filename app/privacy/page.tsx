import { metadata } from "@/lib/seo";

export const generateMetadata = () => metadata("سياسة الخصوصية", "سياسة الخصوصية", "/privacy");

export default function PrivacyPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen pt-32 pb-20">
      <div className="container-luxury max-w-3xl">
        <span className="eyebrow">قانوني</span>
        <h1 className="display-2 text-[var(--primary)] mt-4 mb-10">سياسة الخصوصية</h1>
        <div className="prose-luxe space-y-6 text-[var(--muted)] leading-relaxed text-lg">
          <p>نحن نلتزم بحماية خصوصيتك. هذه السياسة توضح كيف نجمع ونستخدم بياناتك.</p>
          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-3">البيانات التي نجمعها</h2>
          <p>نجمع فقط البيانات الضرورية لتقديم خدماتنا (الاسم، رقم الهاتف، البريد الإلكتروني).</p>
          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-3">كيف نستخدم بياناتك</h2>
          <p>نستخدم بياناتك لإدارة حجوزاتك، تواصل معك حول العروض، وتحسين تجربتك.</p>
          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-3">حقوقك</h2>
          <p>لك حق الوصول إلى بياناتك، تعديلها، أو حذفها في أي وقت.</p>
        </div>
      </div>
    </main>
  );
}
