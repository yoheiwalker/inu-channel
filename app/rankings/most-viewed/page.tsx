import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '../../json-ld';
import { rankingDate, thumbnailFor, videos, youtubeFor } from '../../data';
import { siteUrl } from '../../seo-data';

export const metadata: Metadata = {
  title: '犬動画 再生回数ランキング｜人気YouTube TOP30',
  description: `犬ちゃんねるが内容を確認した犬YouTube動画を、${rankingDate}調査時点の公開再生回数でランキング。犬種・年齢・動画の要約付きで比較できます。`,
  alternates: { canonical: '/rankings/most-viewed' },
  openGraph: { title: '犬動画 再生回数ランキング｜人気YouTube TOP30', description: '犬の人気YouTube動画を、再生回数・犬種・内容から比較できます。', url: '/rankings/most-viewed' },
};

const formatViews = (count: number) => count >= 100000000
  ? `${(count / 100000000).toFixed(1)}億回`
  : count >= 10000 ? `${(count / 10000).toFixed(1)}万回` : `${count.toLocaleString('ja-JP')}回`;

export default function MostViewedRankingPage() {
  const ranked = [...videos].sort((a, b) => b.viewCount - a.viewCount);
  const pageUrl = `${siteUrl}/rankings/most-viewed`;
  return <main>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: '犬動画 再生回数ランキング', numberOfItems: ranked.length, itemListOrder: 'https://schema.org/ItemListOrderDescending', itemListElement: ranked.map((video, index) => ({ '@type': 'ListItem', position: index + 1, name: video.title, url: `${siteUrl}/videos/${video.id}` })) }} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'トップ', item: siteUrl }, { '@type': 'ListItem', position: 2, name: '犬動画 再生回数ランキング', item: pageUrl }] }} />
    <header className="topbar detail-topbar"><Link className="brand" href="/"><span className="brand-mark">🐾</span><span>犬<em>ちゃんねる</em></span></Link><Link className="back-link" href="/#ranking">トップへ戻る</Link></header>
    <article className="seo-page ranking-page">
      <nav className="breadcrumb"><Link href="/">トップ</Link><span>›</span><span>再生回数ランキング</span></nav>
      <header className="seo-hero ranking-hero"><p className="eyebrow">MOST VIEWED DOG VIDEOS</p><h1>犬動画<br/><em>再生回数ランキング</em></h1><p>内容を確認して紹介している犬動画を、公開再生回数で順位付けしました。数字だけでなく、犬種・対象年齢・動画の中身まで見比べられます。</p><div className="seo-counts"><span><b>{ranked.length}</b> 動画</span><span><b>{rankingDate}</b> 集計</span><span><b>TOP3</b> チャンネル別要約</span></div></header>
      <section className="ranking-board" aria-labelledby="ranking-list-title"><div className="finder-head"><div><p className="eyebrow">TOP {ranked.length}</p><h2 id="ranking-list-title">人気犬動画ランキング</h2></div><p>各動画の公開再生数を基準にしています。現在の数値は動画詳細またはYouTubeで確認できます。</p></div><ol>{ranked.map((video, index) => <li className={index < 3 ? `podium podium-${index + 1}` : ''} key={video.id}><span className="ranking-number">{index + 1}<small>位</small></span><Link className="ranking-thumb" href={`/videos/${video.id}`}><img src={thumbnailFor(video.id)} alt={`${video.title}のサムネイル`} loading={index < 3 ? 'eager' : 'lazy'}/></Link><div><span>{video.category} ・ {video.breed} ・ {video.age}</span><h2><Link href={`/videos/${video.id}`}>{video.title}</Link></h2><p>{video.description}</p><small>{video.channel} ・ 公開 {video.published}</small></div><strong>▶ {formatViews(video.viewCount)}</strong><div className="ranking-actions"><Link href={`/videos/${video.id}`}>要約を見る →</Link><a href={youtubeFor(video.id)} target="_blank" rel="noreferrer">YouTube ↗</a></div></li>)}</ol></section>
      <section className="ranking-method"><p className="eyebrow">HOW IT WORKS</p><h2>ランキングについて</h2><div><article><b>01</b><h3>公開数値を使用</h3><p>YouTubeで公開されている再生数を使い、取得できない数字を推測しません。</p></article><article><b>02</b><h3>動画内容を確認</h3><p>タイトルだけで判断せず、動画を確認して独自の要約と見どころを掲載します。</p></article><article><b>03</b><h3>定期的に更新</h3><p>サイト上の現在値は定期取得し、固定ランキングには調査日を明記します。</p></article></div></section>
    </article>
    <footer><Link className="brand" href="/"><span className="brand-mark">🐾</span><span>犬ちゃんねる</span></Link><p>犬の動画と、いい出会いを。</p><Link href="/about">このサイトについて</Link><Link href="/editorial-policy">掲載・編集方針</Link><span>© 2026 犬ちゃんねる</span></footer>
  </main>;
}
