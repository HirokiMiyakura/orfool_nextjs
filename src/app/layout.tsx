import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/templates/Header/Header";
import Footer from "@/components/Fooer";
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社Orfool | ホーム",
  description: "テクノロジーの力であなたの仕事をサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
