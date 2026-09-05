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
  title: '犬ちゃんねる｜犬のYouTubeチャンネルまとめ',
  description: '獣医師、しつけ、フード、ショップ、トリミング、飼い主さん。犬にまつわるYouTubeチャンネルをカテゴリから探せます。',
  openGraph: {
    title: '犬ちゃんねる｜犬のYouTubeチャンネルまとめ',
    description: '犬の動画と、いい出会いを。6つのカテゴリからお気に入りの犬チャンネルを探せます。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬ちゃんねる｜犬のYouTubeチャンネルまとめ',
    description: '犬の動画と、いい出会いを。',
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
