// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/templates/Header/Header';
import Footer from '@/components/Fooer';
import { Noto_Sans_JP } from 'next/font/google';
import AOSInitializer from '@/components/AOSInitializer'; // AOS初期化コンポーネント

const notoSans = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Server-side の metadata 定義
export const metadata: Metadata = {
  title: '株式会社Orfool | ホーム',
  description: 'テクノロジーの力であなたの仕事をサポートします。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSans.className}>
        <AOSInitializer /> {/* AOS初期化 */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
