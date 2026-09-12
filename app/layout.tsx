import type { Metadata } from 'next';
import PublicAnalytics from './public-analytics';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://moemel.com'),
  title: { default: '犬ちゃんねる｜犬YouTube・Instagram・TikTok動画まとめ', template: '%s｜犬ちゃんねる' },
  description: '犬の人気YouTube動画とInstagram・TikTokクリエイターを、犬種・年齢・発信者別に探せる犬動画名鑑。登録者数、再生数、最新動画を定期更新します。',
  applicationName: '犬ちゃんねる',
  category: 'pets',
  keywords: ['犬 動画', '犬 YouTube', '犬 YouTuber', '犬 Instagram', '犬 TikTok', '犬種別', '人気犬動画'],
  alternates: { canonical: '/' },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '犬ちゃんねる',
    url: '/',
    title: '犬ちゃんねる｜犬YouTube・Instagram・TikTok動画まとめ',
    description: '犬種・年齢・発信者別に、人気動画とクリエイターを探せる犬動画名鑑。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬ちゃんねる｜犬YouTube・Instagram・TikTok動画まとめ',
    description: '犬種・年齢・発信者別に、人気動画とクリエイターを探せる犬動画名鑑。',
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
        <PublicAnalytics />
      </body>
    </html>
  );
}
