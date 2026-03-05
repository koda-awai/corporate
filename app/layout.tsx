import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社淡間 | UI/UXデザイン・プロダクト開発支援",
  description:
    "思いと形の間に入り、本質から作る。UI/UXデザイン・プロダクト開発支援の株式会社淡間（あわま）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
