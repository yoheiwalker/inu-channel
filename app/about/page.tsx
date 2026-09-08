import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '犬ちゃんねるについて', description: '犬ちゃんねるの目的、掲載情報、更新方法についてご案内します。', alternates: { canonical: '/about' } };

export default function AboutPage() {
  return <main><header className="topbar detail-topbar"><Link className="brand" href="/"><span className="brand-mark">🐾</span><span>犬ちゃんねる</span></Link><Link className="back-link" href="/">トップへ戻る</Link></header><article className="trust-page"><p className="eyebrow">ABOUT US</p><h1>犬動画との出会いを、<br/>もっと探しやすく。</h1><p className="trust-lead">犬ちゃんねるは、YouTube・Instagram・TikTokで活動する犬のクリエイターを、犬種や発信者の種類から探せる動画名鑑です。</p><section><h2>このサイトでできること</h2><p>獣医師、しつけ教室、ペットフード、ペットショップ、トリミングサロン、飼い主さんに分けてチャンネルを紹介しています。人気動画は実際の内容を確認し、見どころ、犬種、対象年齢、公開日、動画の長さを独自に整理しています。</p></section><section><h2>情報の更新</h2><p>YouTubeの最新動画や公開されている登録者数・再生数は定期的に取得します。Instagram・TikTokのフォロワー数や公開プロフィールは調査日を表示し、推測値は掲載しません。</p></section><section><h2>大切にしていること</h2><p>発信者の公式ページへ正しくつなぐこと、動画を見ずに内容を断定しないこと、健康・しつけ情報を個別の診断として扱わないことを大切にしています。掲載情報の訂正や削除のご希望は、トップページの「推薦する」からご連絡ください。</p></section><div className="trust-links"><Link href="/editorial-policy">掲載・編集方針を見る →</Link><Link href="/#channels">クリエイター名鑑を見る →</Link></div></article></main>;
}
