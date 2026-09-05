import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { thumbnailFor, videos, youtubeFor } from '../../data';
import { LiveVideoViews } from '../../live-youtube';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return videos.map((video) => ({ id: video.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const video = videos.find((item) => item.id === id);
  if (!video) return { title: '動画が見つかりません｜犬ちゃんねる' };
  return {
    title: `${video.title}｜犬ちゃんねる`,
    description: video.description,
    openGraph: { title: video.title, description: video.description, images: [thumbnailFor(video.id)] },
    twitter: { card: 'summary_large_image', title: video.title, description: video.description, images: [thumbnailFor(video.id)] },
  };
}

export default async function VideoDetail({ params }: Props) {
  const { id } = await params;
  const video = videos.find((item) => item.id === id);
  if (!video) notFound();
  const related = videos.filter((item) => item.category === video.category && item.id !== video.id).slice(0, 3);

  return (
    <main>
      <header className="topbar detail-topbar"><a className="brand" href="/"><span className="brand-mark">犬</span><span>犬ちゃんねる</span></a><a className="back-link" href="/#videos">← 動画一覧へ戻る</a></header>
      <article className="detail-page">
        <nav className="breadcrumb"><a href="/">トップ</a><span>›</span><a href={`/#videos`}>{video.category}</a><span>›</span><span>{video.title}</span></nav>
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
      {related.length > 0 && <section className="related"><div className="finder-head"><div><p className="eyebrow">RELATED VIDEOS</p><h2>同じカテゴリの動画</h2></div></div><div className="related-grid">{related.map((item) => <a href={`/videos/${item.id}`} key={item.id}><img src={thumbnailFor(item.id)} alt="" /><span>{item.category}</span><h3>{item.title}</h3><p>{item.channel}</p></a>)}</div></section>}
      <footer><a className="brand" href="/"><span className="brand-mark">犬</span><span>犬ちゃんねる</span></a><p>犬の動画と、いい出会いを。</p><span>© 2026 犬ちゃんねる</span></footer>
    </main>
  );
}
