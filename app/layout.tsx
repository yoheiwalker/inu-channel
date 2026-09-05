import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inu-channel.yoroll.chatgpt.site'),
  title: '犬ちゃんねる｜今日から君も、犬ドル推し。',
  description: 'かわいい犬YouTubeを推し活感覚で探せる犬ドル名鑑。登録者数、再生数、最新動画を自動更新します。',
  openGraph: {
    title: '犬ちゃんねる｜今日から君も、犬ドル推し。',
    description: 'かわいい、ためになる、何度でも見たい。犬YouTubeのセンター級動画を集めました。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬ちゃんねる｜今日から君も、犬ドル推し。',
    description: '犬YouTubeのセンター級動画を集めた、犬ドル推し活サイト。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
