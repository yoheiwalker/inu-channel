import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { thumbnailFor, videos, youtubeFor } from '../../data';
import { LiveVideoViews } from '../../live-youtube';
import { JsonLd } from '../../json-ld';
import { categoryLandings, siteUrl } from '../../seo-data';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return videos.map((video) => ({ id: video.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const video = videos.find((item) => item.id === id);
  if (!video) return { title: '動画が見つかりません' };
  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: `/videos/${video.id}` },
    openGraph: { title: video.title, description: video.description, images: [thumbnailFor(video.id)] },
    twitter: { card: 'summary_large_image', title: video.title, description: video.description, images: [thumbnailFor(video.id)] },
  };
}

export default async function VideoDetail({ params }: Props) {
  const { id } = await params;
  const video = videos.find((item) => item.id === id);
  if (!video) notFound();
  const related = videos.filter((item) => item.category === video.category && item.id !== video.id).slice(0, 3);
  const category = categoryLandings.find((item) => item.name === video.category);
  const [minutes, seconds] = video.duration.split(':').map(Number);
  const duration = `PT${minutes ? `${minutes}M` : ''}${seconds ? `${seconds}S` : ''}`;
  const videoUrl = `${siteUrl}/videos/${video.id}`;

  return (
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'VideoObject', name: video.title, description: video.description, thumbnailUrl: [thumbnailFor(video.id)], uploadDate: `${video.published.replaceAll('.', '-')}T00:00:00+09:00`, duration, embedUrl: `https://www.youtube.com/embed/${video.id}`, url: videoUrl, publisher: { '@type': 'Organization', name: video.channel, url: video.channelUrl } }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'トップ', item: siteUrl }, { '@type': 'ListItem', position: 2, name: video.category, item: category ? `${siteUrl}/categories/${category.slug}` : siteUrl }, { '@type': 'ListItem', position: 3, name: video.title, item: videoUrl }] }} />
      <header className="topbar detail-topbar"><Link className="brand" href="/"><span className="brand-mark">🐾</span><span>犬ちゃんねる</span></Link><Link className="back-link" href="/#videos">← 動画一覧へ戻る</Link></header>
      <article className="detail-page">
        <nav className="breadcrumb"><Link href="/">トップ</Link><span>›</span>{category ? <Link href={`/categories/${category.slug}`}>{video.category}</Link> : <Link href="/#videos">{video.category}</Link>}<span>›</span><span>{video.title}</span></nav>
        <div className="detail-layout">
          <section className="detail-main">
            <a className="detail-visual" href={youtubeFor(video.id)} target="_blank" rel="noreferrer"><img src={thumbnailFor(video.id)} alt={`${video.title}のサムネイル`} /><span>▶ YouTubeで再生</span><small>{video.duration}</small></a>
            <div className="detail-labels"><span>このチャンネルの人気 第{video.rank}位</span><span>{video.category}</span>{video.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
            <h1>{video.title}</h1>
            <p className="detail-channel">発信：<b>{video.channel}</b></p>
            <div className="detail-stats"><div><span>犬種</span><b>{video.breed}</b></div><div><span>対象年齢</span><b>{video.age}</b></div>{video.dogAge && <div><span>登場する犬</span><b>{video.dogAge}</b></div>}<div><span>動画の長さ</span><b>{video.duration}</b></div><div><span>公開日</span><b>{video.published}</b></div><div><span>現在の再生数</span><b className="live-view"><LiveVideoViews id={video.id} fallback={video.views}/></b></div></div>
            <section className="summary-box"><p className="eyebrow">WATCHED &amp; SUMMARIZED</p><h2>動画の中身を見てまとめました</h2><p>{video.description}</p></section>
            <section className="learn-box"><p className="eyebrow">YOU WILL LEARN</p><h2>この動画でわかること</h2><ol>{video.points.map((point, index) => <li key={point}><span>{String(index + 1).padStart(2, '0')}</span>{point}</li>)}</ol></section>
            {video.note && <aside className="medical-note"><b>見るときの注意</b><p>{video.note}</p></aside>}
            {video.category === '獣医師' && !video.note && <aside className="medical-note"><b>健康情報について</b><p>この動画と紹介文は一般的な情報です。症状や治療については、かかりつけの獣医師へご相談ください。</p></aside>}
          </section>
          <aside className="creator-card">
            <span className="creator-icon">🐶</span><small>{video.category}</small><h2>{video.channel}</h2><p>動画の続きを見たり、発信者の最新情報を確認できます。</p>
            <a className="primary-social" href={youtubeFor(video.id)} target="_blank" rel="noreferrer">この動画をYouTubeで見る ↗</a>
            <a className="source-link" href={video.channelUrl} target="_blank" rel="noreferrer">チャンネルを見る ↗</a>
            {video.instagram ? <a className="instagram-social" href={video.instagram} target="_blank" rel="noreferrer">Instagramを見る ↗<small>{video.instagramHandle}</small></a> : <span className="unavailable">Instagramリンクは未登録です</span>}
            {video.source && <a className="source-link" href={video.source} target="_blank" rel="noreferrer">公式サイト ↗</a>}
          </aside>
        </div>
      </article>
      {related.length > 0 && <section className="related"><div className="finder-head"><div><p className="eyebrow">RELATED VIDEOS</p><h2>同じカテゴリの動画</h2></div></div><div className="related-grid">{related.map((item) => <Link href={`/videos/${item.id}`} key={item.id}><img src={thumbnailFor(item.id)} alt="" /><span>{item.category}</span><h3>{item.title}</h3><p>{item.channel}</p></Link>)}</div></section>}
      <footer><Link className="brand" href="/"><span className="brand-mark">🐾</span><span>犬ちゃんねる</span></Link><p>犬の動画と、いい出会いを。</p><Link href="/about">このサイトについて</Link><Link href="/editorial-policy">掲載・編集方針</Link><span>© 2026 犬ちゃんねる</span></footer>
    </main>
  );
}
