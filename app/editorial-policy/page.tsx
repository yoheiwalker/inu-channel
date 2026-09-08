import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '掲載・編集方針', description: '犬ちゃんねるの掲載基準、動画要約、数値更新、訂正・削除方針をご案内します。', alternates: { canonical: '/editorial-policy' } };

export default function EditorialPolicyPage() {
  return <main><header className="topbar detail-topbar"><Link className="brand" href="/"><span className="brand-mark">🐾</span><span>犬ちゃんねる</span></Link><Link className="back-link" href="/">トップへ戻る</Link></header><article className="trust-page"><p className="eyebrow">EDITORIAL POLICY</p><h1>掲載・編集方針</h1><p className="trust-lead">安心して動画や発信者を探せるよう、掲載方法と情報の扱いを明確にしています。</p><section><h2>掲載対象</h2><p>犬が主役、または犬との暮らし・健康・食事・しつけ・美容に役立つ公開アカウントを対象とします。Instagram・TikTokの飼い主アカウントは、原則として公開プロフィールでフォロワー1,000人以上を確認できたものを掲載します。</p></section><section><h2>動画の選定と要約</h2><p>人気動画は公開されている再生数を基準に選び、動画の中身を確認したうえで独自に要約します。動画タイトル、サムネイル、チャンネル名などの権利は各発信者・プラットフォームに帰属します。</p></section><section><h2>数値と更新日</h2><p>登録者数・再生数・フォロワー数は取得時点の公開情報です。数値は変動するため、ランキングには集計日または取得日時を表示します。取得できない数値を推測して補いません。</p></section><section><h2>健康・しつけ情報</h2><p>掲載動画と要約は一般的な情報であり、診断や治療、個別のしつけ指導に代わるものではありません。体調不良や強い問題行動がある場合は、獣医師や資格・経験を持つ専門家へご相談ください。</p></section><section><h2>広告・利害関係</h2><p>広告、提供、アフィリエイトなど利害関係がある掲載は、読者に分かるよう明示します。検索順位を操作するための有料リンク販売や、掲載と引き換えのリンク強制は行いません。</p></section><section><h2>訂正・削除</h2><p>発信者ご本人からの訂正・削除依頼や、リンク切れ・誤情報のご連絡を確認し、必要に応じて更新します。トップページの「推薦する」から対象URLと内容をお知らせください。</p></section></article></main>;
}
