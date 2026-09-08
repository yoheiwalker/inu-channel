import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://moemel.com'),
  title: '犬ちゃんねる｜犬動画を、もっと好きになる。',
  description: '犬のYouTube・Instagram・TikTokを犬種から探せるクリエイター名鑑。登録者数、再生数、最新動画を自動更新します。',
  alternates: { canonical: '/' },
  openGraph: {
    title: '犬ちゃんねる｜犬動画を、もっと好きになる。',
    description: 'かわいいも、ためになるも、ひとつの場所に。犬の人気動画とクリエイターを集めました。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬ちゃんねる｜犬動画を、もっと好きになる。',
    description: '犬のYouTube・Instagram・TikTokを犬種から探せるクリエイター名鑑。',
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
      <body>
        {children}
        {process.env.VERCEL === '1' ? <Analytics /> : null}
      </body>
    </html>
  );
}
