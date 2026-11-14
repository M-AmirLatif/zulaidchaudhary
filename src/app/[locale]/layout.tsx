import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Inter, Playfair_Display, Noto_Nastaliq_Urdu } from "next/font/google";
import "@/app/globals.css";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const notoUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urdu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zulaid Chaudhary Foundation | Humanity, Healthcare & Justice",
  description:
    "Official humanitarian platform founded by Zulaid Chaudhary, establishing free medical treatments and constructing a modern charity hospital.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === "ur";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${inter.variable} ${playfair.variable} ${notoUrdu.variable}`}
    >
      <body
        className={`min-h-screen flex flex-col bg-surface-cream text-charcoal font-sans antialiased selection:bg-accent-gold selection:text-primary-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
