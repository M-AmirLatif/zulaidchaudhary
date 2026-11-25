import { Link } from "@/i18n/routing";
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

export default function PrivacyPolicyPage() {
  const locale = useLocale();
  const isUrdu = locale === "ur";

  if (isUrdu) {
    return (
      <div className="w-full py-16 px-4 bg-surface-cream" dir="rtl">
        <div className="max-w-4xl mx-auto flex flex-col gap-10 font-urdu">
          
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-900 hover:text-accent-gold-dark transition-colors self-start"
          >
            <ArrowRight className="w-4 h-4" />
            <span>مرکزی صفحہ پر واپس جائیں</span>
          </Link>

          {/* Page Header */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#166534] border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold self-start font-sans">
              <Lock className="w-3.5 h-3.5" />
              <span>اخلاقی ڈیٹا گورننس اور رازداری</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-950 tracking-tight leading-snug">
              پرائیویسی اور مریضوں کے ڈیٹا کے تحفظ کی پالیسی
            </h1>

            <p className="text-sm text-charcoal-muted leading-relaxed">
              آخری بار تصدیق شدہ: نومبر 2026 • زلید چوہدری فاؤنڈیشن کے تمام بین الاقوامی ڈیجیٹل پلیٹ فارمز اور کلینیکل سنٹرز کے لیے مؤثر۔
            </p>
          </div>

          {/* Ethical Commitment Highlight */}
          <div className="bg-primary-950 text-surface-cream rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-md border border-primary-900">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent-gold shrink-0" />
              <h2 className="font-serif font-bold text-lg sm:text-xl text-accent-gold">
                بنیادی ادارہ جاتی اصول: تشہیر پر انسانی وقار کو ترجیح
              </h2>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              زلید چوہدری فاؤنڈیشن سخت طبی اخلاقیات کی پاسداری کرتی ہے۔ سرجیکل یا مالی امداد کے مستحق مریضوں اور نادار خاندانوں کی بے بسی، تشخیصی رپورٹس یا چہروں کی نمائش تحریری اور رضاکارانہ باخبر رضامندی کے بغیر عوامی تشہیر کے لیے کبھی نہیں کی جائے گی۔ ہمارا ڈیجیٹل نظام عطیہ دہندگان کے اعتماد اور مریضوں کی عزت نفس کی حفاظت کے لیے بنایا گیا ہے۔
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm flex flex-col gap-10 text-charcoal text-sm leading-relaxed">
            
            {/* Section 1 */}
            <section className="flex flex-col gap-3">
              <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">01</span>
                <span>دائرہ کار اور کنٹرولر کی تفصیلات</span>
              </h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                یہ پرائیویسی پالیسی زلید چوہدری فاؤنڈیشن کی تمام ڈیجیٹل خدمات، رضاکار پورٹل اور کلینیکل رجسٹریشن سنٹرز کے ذریعے حاصل کردہ معلومات پر لاگو ہوتی ہے۔ ڈیٹا کنٹرولر زلید چوہدری فاؤنڈیشن (لاہور، پاکستان) کا بورڈ آف ٹرسٹیز ہے۔
              </p>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col gap-3">
              <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">02</span>
                <span>مریضوں کے طبی ریکارڈ کی مکمل رازداری</span>
              </h3>
              <ul className="list-disc pe-5 space-y-2 text-sm text-charcoal-muted">
                <li><strong>عوامی نمائش کی کوئی لازمی شرط نہیں:</strong> مفت سرجری یا ادویات کی فراہمی کسی بھی صورت تصویر بنوانے یا ویڈیو انٹرویو دینے سے مشروط نہیں ہے۔</li>
                <li><strong>باخبر رضامندی کا پروٹوکول:</strong> طبی اور تشخیصی دستاویزات صرف مجاز ڈاکٹرز اور فاؤنڈیشن کی میڈیکل ایڈوائزری کمیٹی کے معائنے تک محدود رہتی ہیں۔</li>
                <li><strong>شناخت کا اخفا:</strong> پبلک ٹریکر پر مریض کا نام خفیہ رکھ کر صرف ریفرنس نمبر (`ZCF-MED-XXXXXX`) اور علاج کا شہر دکھایا جاتا ہے۔</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col gap-3">
              <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">03</span>
                <span>عطیہ دہندگان کی رازداری اور مالیاتی شفافیت</span>
              </h3>
              <ul className="list-disc pe-5 space-y-2 text-sm text-charcoal-muted">
                <li><strong>کارڈ ڈیٹا محفوظ نہیں کیا جاتا:</strong> تمام بین الاقوامی کارڈ ٹرانزیکشنز PCI-DSS معیار کے محفوظ سسٹمز (مثلاً اسٹرائپ) کے ذریعے ہوتی ہیں۔ ہمارے سرور پر کارڈ نمبر کبھی محفوظ نہیں ہوتے۔</li>
                <li><strong>گمنام عطیہ کا حق:</strong> ہر عطیہ دہندہ اپنے عطیہ کو خفیہ رکھنے کا حق رکھتا ہے۔ آڈٹ رپورٹس میں ذاتی فون نمبرز یا ای میل شائع نہیں کی جاتیں۔</li>
                <li><strong>ڈیٹا کی فروخت ممنوع:</strong> عطیہ دہندگان اور حامیوں کے کوائف کسی تجارتی یا تشہیری ادارے کو فروخت نہیں کیے جاتے۔</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="flex flex-col gap-3">
              <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">04</span>
                <span>رضاکاروں اور ممبرز کے کوائف</span>
              </h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                رضاکار اور ممبر شپ فارمز کے ذریعے جمع کی گئی معلومات کی توثیق صرف بانی اور مجاز کوآرڈینیٹرز کرتے ہیں۔ یہ کوائف صرف انسانی ہمدردی کے کاموں اور ہنگامی امداد کی سرگرمیوں کے لیے استعمال ہوتے ہیں۔
              </p>
            </section>

            {/* Contact Box */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col gap-2">
              <span className="font-serif font-bold text-primary-950 text-base">
                ڈیٹا پروٹیکشن اینڈ پرائیویسی ڈیسک
              </span>
              <p className="text-sm text-charcoal-muted">
                رازداری کے حوالے سے کسی بھی سوال، رضامندی واپس لینے یا کوائف حذف کرنے کی درخواست کے لیے رابطہ کریں:{" "}
                <a href="mailto:privacy@zulaidchaudharyfoundation.com" className="font-semibold text-[#166534] underline font-sans">
                  privacy@zulaidchaudharyfoundation.com
                </a>
              </p>
            </div>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-primary-900 hover:text-accent-gold-dark transition-colors self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#166534] border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold self-start">
            <Lock className="w-3.5 h-3.5" />
            <span>ETHICAL DATA GOVERNANCE</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-950 tracking-tight">
            Privacy & Patient Data Protection Policy
          </h1>

          <p className="text-sm text-charcoal-muted">
            Last Updated & Verified: November 2026 • Effective for all global digital platforms and clinical intake points of Zulaid Chaudhary Foundation.
          </p>
        </div>

        {/* Ethical Commitment Highlight */}
        <div className="bg-primary-950 text-surface-cream rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-md border border-primary-900">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-accent-gold shrink-0" />
            <h2 className="font-serif font-bold text-lg sm:text-xl text-accent-gold">
              Core Institutional Principle: Dignity Over Publicity
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            Zulaid Chaudhary Foundation enforces strict medical ethics. Deserving beneficiaries and vulnerable patients seeking surgical or financial relief will never have their personal distress, diagnostic reports, or identifiable imagery broadcast publicly without freely given, written informed consent. Our digital infrastructure is designed to safeguard donor trust and patient dignity above all marketing considerations.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm flex flex-col gap-10 text-charcoal text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">01</span>
              <span>Scope & Controller Information</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              This Privacy Policy applies to personal, financial, and clinical information collected through <strong>ZulaidChaudharyFoundation.com</strong>, associated subdomains, volunteer registration portals, and clinical liaison offices. The data controller is the Board of Trustees of Zulaid Chaudhary Foundation (Tehsil Shorkot, District Jhang, Punjab, Pakistan).
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">02</span>
              <span>Patient & Medical Data Confidentiality</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              In accordance with international biomedical ethics and Pakistani healthcare privacy standards:
            </p>
            <ul className="list-disc ps-5 space-y-2 text-xs sm:text-sm text-charcoal-muted">
              <li><strong>Zero Mandatory Publicity:</strong> Receiving free surgical sponsorship or medical assistance is never contingent upon agreeing to photos, video interviews, or marketing campaigns.</li>
              <li><strong>Informed Consent Protocol:</strong> Diagnostic reports and patient identities submitted for Clinical Advisory Committee vetting are restricted to certified physicians and coordinators.</li>
              <li><strong>De-Identification:</strong> Public progress ledgers (e.g., cases treated) display only non-identifying reference numbers (`ZCF-MED-XXXXXX`), general medical categories, and city of treatment.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">03</span>
              <span>Donor Privacy & Financial Transactions</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              We respect the spiritual and personal sanctity of charitable giving:
            </p>
            <ul className="list-disc ps-5 space-y-2 text-xs sm:text-sm text-charcoal-muted">
              <li><strong>No Card Data Stored:</strong> Credit/debit card transactions are processed through certified PCI-DSS Level 1 payment processors (e.g. Stripe). Our servers never see, store, or transmit full 16-digit card numbers or CVV codes.</li>
              <li><strong>Donor Anonymity:</strong> Donors can elect to keep their contributions confidential. Public audit statements aggregate financial numbers and never publish personal email addresses or contact numbers.</li>
              <li><strong>Zero Data Selling:</strong> We will never sell, rent, or trade donor lists to commercial marketing entities.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">04</span>
              <span>Volunteer & Member Records</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Information submitted via volunteer or chapter membership forms is reviewed exclusively by the founder and authorized regional coordinators for verification. Contact details are used strictly for humanitarian mobilization, event briefing, and emergency disaster relief response.
            </p>
          </section>

          {/* Section 5 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">05</span>
              <span>Your Legal Rights & Data Subject Requests</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Regardless of your geographical location, you maintain full authority over your personal information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col gap-1">
                <span className="font-bold text-primary-950 text-xs">Right to Access & Portability</span>
                <span className="text-[11px] text-charcoal-muted">Request an exported copy of all donation records or application files tied to your email.</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col gap-1">
                <span className="font-bold text-primary-950 text-xs">Right to Erasure (&quot;Be Forgotten&quot;)</span>
                <span className="text-[11px] text-charcoal-muted">Request permanent deletion of non-statutory user profiles and contact records.</span>
              </div>
            </div>
          </section>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col gap-2">
            <span className="font-serif font-bold text-primary-950 text-sm">
              Data Protection & Privacy Officer
            </span>
            <p className="text-xs text-charcoal-muted">
              For privacy inquiries, consent revocations, or data deletion requests, contact our legal oversight desk at:{" "}
              <a href="mailto:privacy@zulaidchaudharyfoundation.com" className="font-semibold text-[#166534] underline">
                privacy@zulaidchaudharyfoundation.com
              </a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
