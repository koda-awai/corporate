import type { Metadata } from "next";
import { Noto_Serif_JP, DM_Sans } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社淡間｜UI/UXデザイン・プロダクト開発支援",
  description:
    "「あわい、から始める。」スタートアップのプロダクト開発に入り込み、本質からデザインするUI/UXデザインファーム。ゼロイチデザイン・デザインシステム構築・UXリサーチ。",
  openGraph: {
    title: "株式会社淡間｜UI/UXデザイン・プロダクト開発支援",
    description:
      "「あわい、から始める。」スタートアップのプロダクト開発に入り込み、本質からデザインするUI/UXデザインファーム。ゼロイチデザイン・デザインシステム構築・UXリサーチ。",
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社淡間",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社淡間",
  alternateName: "Awama Inc.",
  description:
    "UI/UXデザイン・プロダクト開発支援。スタートアップのプロダクト開発に入り込み、本質からデザインするUI/UXデザインファーム。",
  founder: {
    "@type": "Person",
    name: "小田 滉太",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "渋谷区",
    addressRegion: "東京都",
    addressCountry: "JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
