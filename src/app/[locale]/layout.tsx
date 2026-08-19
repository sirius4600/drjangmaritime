import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://drjangmaritime.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";
  const ui = getUiDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: ui.meta.title,
      template: `%s | ${ui.meta.title}`,
    },
    description: ui.meta.description,
    keywords: [
      "Unkyu Jang",
      "장은규",
      "Maritime Intelligence",
      "Maritime Safety",
      "Vessel Traffic Service",
      "VTS",
      "MASS",
      "Autonomous Ships",
      "IMO",
      "Maritime AI",
    ],
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        ko: `${siteUrl}/ko`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: ui.meta.title,
      description: ui.meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: ui.meta.title,
      images: ["/images/unkyu-jang-profile.jpg"],
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ui.meta.title,
      description: ui.meta.description,
      images: ["/images/unkyu-jang-profile.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  return (
    <html
      lang={rawLocale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink break-keep">
        {children}
      </body>
    </html>
  );
}
