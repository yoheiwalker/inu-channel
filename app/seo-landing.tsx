import Link from 'next/link';
import { allChannels, socialCreators, thumbnailFor, videos, youtubeFor } from './data';
import { breedLandings, categoryLandings, siteUrl, type SeoLanding } from './seo-data';
import { JsonLd } from './json-ld';

type Props = { landing: SeoLanding; kind: 'breed' | 'category' };

const formatFollowers = (count: number) => count >= 10000 ? `約${(count / 10000).toFixed(count >= 100000 ? 0 : 1)}万人` : `${count.toLocaleString('ja-JP')}人`;

export function SeoLandingPage({ landing, kind }: Props) {
  const matchedVideos = kind === 'breed'
    ? videos.filter((video) => video.breed.includes(landing.name))
    : videos.filter((video) => video.category === landing.name);
  const matchedChannels = kind === 'breed'
    ? allChannels.filter((channel) => channel.breeds.includes(landing.name))
    : allChannels.filter((channel) => channel.category === landing.name);
  const matchedSocial = kind === 'breed'
    ? socialCreators.filter((creator) => creator.breeds.includes(landing.name)).sort((a, b) => b.followers - a.followers)
    : landing.name === '飼い主さん' ? [...socialCreators].sort((a, b) => b.followers - a.followers) : [];
  const basePath = kind === 'breed' ? 'dog-breeds' : 'categories';
  const otherLandings = (kind === 'breed' ? breedLandings : categoryLandings).filter((item) => item.slug !== landing.slug);
  const itemUrls = [
    ...matchedVideos.map((video) => `${siteUrl}/videos/${video.id}`),
    ...matchedChannels.map((channel) => channel.channelUrl),
    ...matchedSocial.map((creator) => creator.url),
  ].slice(0, 30);

  return (
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${landing.name}の人気犬動画・SNSクリエイター一覧`,
        description: landing.description,
        url: `${siteUrl}/${basePath}/${landing.slug}`,
        isPartOf: { '@type': 'WebSite', name: '犬ちゃんねる', url: siteUrl },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: itemUrls.length,
          itemListElement: itemUrls.map((url, index) => ({ '@type': 'ListItem', position: index + 1, url })),
        },
      }} />
      <header className="topbar detail-topbar"><Link className="brand" href="/"><span className="brand-mark">🐾</span><span>犬<em>ちゃんねる</em></span></Link><Link className="back-link" href="/#channels">名鑑へ戻る</Link></header>
      <article className="seo-page">
        <nav className="breadcrumb"><Link href="/">トップ</Link><span>›</span><span>{kind === 'breed' ? '犬種別' : '発信者別'}</span><span>›</span><span>{landing.name}</span></nav>
        <header className="seo-hero">
          <p className="eyebrow">{kind === 'breed' ? 'DOG BREED GUIDE' : 'CREATOR CATEGORY GUIDE'}</p>
          <h1>{landing.name}の<br/><em>人気動画・SNS</em>まとめ</h1>
          <p>{landing.intro}</p>
          <div className="seo-counts"><span><b>{matchedVideos.length}</b> 内容確認済み動画</span><span><b>{matchedChannels.length}</b> YouTube</span>{kind === 'breed' || landing.name === '飼い主さん' ? <span><b>{matchedSocial.length}</b> Instagram・TikTok</span> : null}</div>
        </header>

        {matchedVideos.length > 0 && <section className="seo-section"><div className="finder-head"><div><p className="eyebrow">WATCHED &amp; SUMMARIZED</p><h2>{landing.name}の注目動画</h2></div><p>動画の中身を確認し、犬種・年齢・見どころを独自に整理しています。</p></div><div className="video-grid">{matchedVideos.sort((a, b) => b.viewCount - a.viewCount).map((video) => <article className="video-card" key={video.id}><Link className="video-thumb" href={`/videos/${video.id}`}><img src={thumbnailFor(video.id)} alt={`${video.title}のサムネイル`} loading="lazy"/><span className={`rank-badge rank-${video.rank}`}>TOP {video.rank}</span><span className="play">▶</span><small>{video.duration}</small></Link><div className="video-body"><div className="video-labels"><span>{video.category}</span><span>{video.breed}</span><span>{video.age}</span></div><h3><Link href={`/videos/${video.id}`}>{video.title}</Link></h3><p className="channel-name">{video.channel}</p><p className="checked-label">✓ 動画内容を確認して要約</p><p className="video-desc">{video.description}</p><div className="video-actions"><Link className="detail-link" href={`/videos/${video.id}`}>詳しく見る →</Link><a className="yt-link" href={youtubeFor(video.id)} target="_blank" rel="noreferrer">YouTube ↗</a></div></div></article>)}</div></section>}

        <section className="seo-section alt"><div className="finder-head"><div><p className="eyebrow">YOUTUBE DIRECTORY</p><h2>{landing.name}のYouTubeチャンネル</h2></div><p>チャンネル名と発信内容を確認して、公式ページへ移動できます。</p></div><div className="seo-channel-grid">{matchedChannels.map((channel) => <article key={channel.channelId}><img src={channel.thumbnail} alt={`${channel.name}のチャンネル画像`} loading="lazy"/><div><span>{channel.category}</span><h3>{channel.name}</h3><p>🐾 {channel.breeds}</p>{channel.description && <small>{channel.description}</small>}<a href={channel.channelUrl} target="_blank" rel="noreferrer">YouTubeを見る ↗</a></div></article>)}</div></section>

        {matchedSocial.length > 0 && <section className="seo-section"><div className="finder-head"><div><p className="eyebrow">INSTAGRAM &amp; TIKTOK</p><h2>{landing.name}のSNSクリエイター</h2></div><p>公開プロフィールで1,000人以上を確認したアカウントを掲載しています。</p></div><div className="seo-social-list">{matchedSocial.map((creator) => <a href={creator.url} target="_blank" rel="noreferrer" key={`${creator.platform}-${creator.handle}`}><span>{creator.platform}</span><h3>{creator.name}</h3><p>{creator.handle} ・ {creator.breeds}</p><strong>{formatFollowers(creator.followers)}<small>フォロワー</small></strong></a>)}</div></section>}

        <section className="seo-related"><p className="eyebrow">EXPLORE MORE</p><h2>{kind === 'breed' ? 'ほかの犬種から探す' : 'ほかの発信者から探す'}</h2><div>{otherLandings.map((item) => <Link href={`/${basePath}/${item.slug}`} key={item.slug}>{item.name}<span>→</span></Link>)}</div></section>
      </article>
      <footer><Link className="brand" href="/"><span className="brand-mark">🐾</span><span>犬ちゃんねる</span></Link><p>犬の動画と、いい出会いを。</p><Link href="/about">このサイトについて</Link><Link href="/editorial-policy">掲載・編集方針</Link><span>© 2026 犬ちゃんねる</span></footer>
    </main>
  );
}
