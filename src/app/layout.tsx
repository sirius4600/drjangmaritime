import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://drjangmaritime.com";
const title = "Dr. Unkyu Jang | Maritime Intelligence";
const description =
  "Connecting maritime research, technology and people. Dr. Unkyu Jang brings three decades of maritime safety, VTS, IMO policy and autonomous-ship research together with emerging AI and data tools.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Dr. Unkyu Jang",
  },
  description,
  keywords: [
    "Unkyu Jang",
    "Maritime Intelligence",
    "Maritime Safety",
    "Vessel Traffic Service",
    "VTS",
    "MASS",
    "Autonomous Ships",
    "IMO",
    "Maritime AI",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Dr. Unkyu Jang | Maritime Intelligence",
    images: ["/images/unkyu-jang-profile.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/unkyu-jang-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
