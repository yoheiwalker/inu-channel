'use client';

import { useEffect, useMemo, useState } from 'react';
import { allChannels, categoryInfo, channelSummaries, extraOwnerChannels, ownerApiGroupCount, rankingDate, socialCreators, thumbnailFor, videos, youtubeFor, type ChannelSummary, type SocialCreator } from './data';
import { socialMediaProfiles } from './social-media.generated';
import { JsonLd } from './json-ld';
import { breedLandings, categoryLandings, siteUrl } from './seo-data';

const breedOptions = ['すべて', ...Array.from(new Set(videos.map((video) => video.breed)))];
const ageOptions = ['すべて', '子犬', '成犬', 'シニア', '全年齢'];
const channelOptions = ['すべて', ...channelSummaries.map((channel) => channel.name)];
const directoryBreedOptions = ['すべて', ...Array.from(new Set([...allChannels.map((item) => item.breeds), ...socialCreators.map((item) => item.breeds)].flatMap((value) => value.split('・')))).sort((a, b) => a.localeCompare(b, 'ja'))];
const featuredDirectoryBreeds = ['柴犬', 'チワワ', 'トイプードル', 'ポメラニアン', 'ミニチュアダックスフンド', 'ウェルシュ・コーギー', 'ゴールデンレトリバー', 'ラブラドールレトリバー', 'シベリアンハスキー', 'サモエド', 'パグ', 'フレンチブルドッグ', 'シーズー'];

type LiveData = {
  updatedAt: string;
  refreshHours: number;
  channels: Record<string, { subscriber: string | null; avatar: string | null; latest: { id: string; title: string; published: string; views: number | null } | null }>;
  videos: Record<string, number>;
  complete?: boolean;
};

type DirectoryModal =
  | { kind: 'youtube'; channel: ChannelSummary }
  | { kind: 'social'; creator: SocialCreator };

const formatViews = (count: number) => count >= 100000000
  ? `${(count / 100000000).toFixed(1)}億回`
  : count >= 10000 ? `${(count / 10000).toFixed(1)}万回` : `${count.toLocaleString('ja-JP')}回`;

const formatDate = (value: string) => new Intl.DateTimeFormat('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(value));
const formatFollowers = (count: number) => count >= 10000 ? `約${(count / 10000).toFixed(count >= 100000 ? 0 : 1)}万人` : `${count.toLocaleString('ja-JP')}人`;

export default function Home() {
  const [live, setLive] = useState<LiveData | null>(null);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('すべて');
  const [breed, setBreed] = useState('すべて');
  const [age, setAge] = useState('すべて');
  const [channel, setChannel] = useState('すべて');
  const [sort, setSort] = useState('チャンネル別TOP順');
  const [directoryQuery, setDirectoryQuery] = useState('');
  const [directoryMode, setDirectoryMode] = useState('飼い主さん');
  const [directoryBreed, setDirectoryBreed] = useState('すべて');
  const [directoryPlatform, setDirectoryPlatform] = useState<'YouTube' | 'Instagram' | 'TikTok'>('YouTube');
  const [rankingTab, setRankingTab] = useState<'総合ランキング' | '最新動画ランキング'>('総合ランキング');
  const [directoryModal, setDirectoryModal] = useState<DirectoryModal | null>(null);
  const [modalMediaIndex, setModalMediaIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const mergeLive = (incoming: LiveData) => !cancelled && setLive((current) => ({
      updatedAt: incoming.updatedAt,
      refreshHours: 6,
      channels: { ...(current?.channels || {}), ...incoming.channels },
      videos: { ...(current?.videos || {}), ...incoming.videos },
    }));
    const fetchJson = (url: string) => fetch(url).then((response) => response.ok ? response.json() as Promise<LiveData> : Promise.reject()).catch(() => null);
    const load = async () => {
      fetchJson('/api/youtube?ranking=4').then((primary) => { if (primary) mergeLive(primary); });
      for (let group = 0; group < ownerApiGroupCount && !cancelled; group += 1) {
        let owners = await fetchJson(`/api/owners?group=${group}&catalog=2`);
        if (owners && owners.complete === false) owners = await fetchJson(`/api/owners?group=${group}&catalog=2&retry=${Date.now()}`);
        if (owners) mergeLive(owners);
      }
    };
    load();
    const timer = window.setInterval(load, 30 * 60 * 1000);
    return () => { cancelled = true; window.clearInterval(timer); };
  }, []);

  useEffect(() => {
    if (!directoryModal) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setDirectoryModal(null); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [directoryModal]);

  const liveVideos = useMemo(() => videos.map((video) => ({ ...video, liveViewCount: live?.videos[video.id] ?? video.viewCount })), [live]);
  const allLatestVideos = useMemo(() => allChannels.flatMap((item) => {
    const latest = live?.channels[item.channelId]?.latest;
    return latest ? [{ ...latest, channel: item.name, breed: item.breeds }] : [];
  }), [live]);
  const latestVideos = useMemo(() => [...allLatestVideos].sort((a, b) => b.published.localeCompare(a.published)).slice(0, 9), [allLatestVideos]);
  const rankingVideos = useMemo(() => rankingTab === '総合ランキング'
    ? [...liveVideos].sort((a, b) => b.liveViewCount - a.liveViewCount).slice(0, 10).map((video) => ({ ...video, rankingViews: video.liveViewCount, href: `/videos/${video.id}` }))
    : allLatestVideos.filter((video) => video.views !== null).sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 10).map((video) => ({ ...video, rankingViews: video.views || 0, href: youtubeFor(video.id) })),
  [allLatestVideos, liveVideos, rankingTab]);

  const directoryChannels = useMemo(() => {
    const needle = directoryQuery.trim().toLowerCase();
    return allChannels.filter((item) => {
      const matchesMode = directoryMode === 'すべて'
        || (directoryMode === '飼い主さん' && item.category === '飼い主さん')
        || (directoryMode === 'TOP3まとめあり' && item.videos > 0);
      const haystack = `${item.name} ${item.breeds} ${item.category} ${item.description || ''}`.toLowerCase();
      const matchesBreed = directoryBreed === 'すべて' || item.breeds.includes(directoryBreed);
      return matchesMode && matchesBreed && (!needle || haystack.includes(needle));
    });
  }, [directoryMode, directoryQuery, directoryBreed]);

  const directorySocialCreators = useMemo(() => {
    const needle = directoryQuery.trim().toLowerCase();
    return socialCreators.filter((item) => {
      const haystack = `${item.name} ${item.handle} ${item.breeds} ${item.description}`.toLowerCase();
      return item.platform === directoryPlatform
        && (directoryBreed === 'すべて' || item.breeds.includes(directoryBreed))
        && (!needle || haystack.includes(needle));
    }).sort((a, b) => b.followers - a.followers);
  }, [directoryPlatform, directoryQuery, directoryBreed]);

  const featuredBreedCounts = useMemo(() => featuredDirectoryBreeds.map((item) => ({
    name: item,
    count: directoryPlatform === 'YouTube'
      ? allChannels.filter((channelItem) => channelItem.category === '飼い主さん' && channelItem.breeds.includes(item)).length
      : socialCreators.filter((creator) => creator.platform === directoryPlatform && creator.breeds.includes(item)).length,
  })).filter((item) => item.count > 0), [directoryPlatform]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const result = liveVideos.filter((video) => {
      const haystack = `${video.title} ${video.channel} ${video.category} ${video.breed} ${video.age} ${video.description} ${video.tags.join(' ')}`.toLowerCase();
      return (!needle || haystack.includes(needle))
        && (category === 'すべて' || video.category === category)
        && (breed === 'すべて' || video.breed === breed)
        && (age === 'すべて' || video.age.includes(age) || video.age === '全年齢')
        && (channel === 'すべて' || video.channel === channel);
    });
    if (sort === '再生数順') return [...result].sort((a, b) => b.liveViewCount - a.liveViewCount);
    if (sort === '新しい順') return [...result].sort((a, b) => b.published.localeCompare(a.published));
    if (sort === 'タイトル順') return [...result].sort((a, b) => a.title.localeCompare(b.title, 'ja'));
    return result;
  }, [query, category, breed, age, channel, sort, liveVideos]);

  const reset = () => { setQuery(''); setCategory('すべて'); setBreed('すべて'); setAge('すべて'); setChannel('すべて'); };
  const openDirectoryModal = (modal: DirectoryModal) => { setModalMediaIndex(0); setDirectoryModal(modal); };

  const modalSocialProfile = directoryModal?.kind === 'social'
    ? socialMediaProfiles[`${directoryModal.creator.platform}:${directoryModal.creator.handle}`]
    : null;
  const modalYoutubeVideos = directoryModal?.kind === 'youtube'
    ? videos.filter((video) => video.channelId === directoryModal.channel.channelId).sort((a, b) => a.rank - b.rank)
    : [];
  const modalYoutubeLatest = directoryModal?.kind === 'youtube' ? live?.channels[directoryModal.channel.channelId]?.latest : null;
  const modalYoutubeItems = modalYoutubeVideos.length ? modalYoutubeVideos : modalYoutubeLatest ? [modalYoutubeLatest] : [];

  return (
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: '犬ちゃんねる', alternateName: '犬動画・犬クリエイター名鑑', url: siteUrl, description: '犬のYouTube・Instagram・TikTokを犬種・年齢・発信者別に探せる動画名鑑' }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: '犬ちゃんねる', url: siteUrl, logo: `${siteUrl}/favicon.svg` }} />
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-mark">🐾</span><span>犬<em>ちゃんねる</em></span></a>
        <nav><a href="#ranking">再生ランキング</a><a href="#videos">推し動画</a><a href="#channels">犬ドル名鑑</a><a href="#guide">推しポイント</a></nav>
        <a className="submit-button" href="mailto:?subject=犬ちゃんねる掲載希望">♡ 推薦する</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="hero-kicker">推したい犬、きっと見つかる</span>
          <p className="eyebrow">JAPAN&apos;S DOG CREATOR GUIDE</p>
          <h1>犬動画を、<br/><em>もっと好きになる。</em></h1>
          <p className="lead">かわいいも、ためになるも、ひとつの場所に。<br/>犬のYouTube・Instagram・TikTokを犬種から探せます。</p>
          <div className="hero-actions"><a className="hero-cta" href="#videos">推し動画を探す <span>♡</span></a><a className="hero-cta secondary" href="#channels">犬ドル名鑑を見る</a></div>
          <p className="hero-update"><span className="live-dot"/> 新着は6時間ごと・全チャンネルは毎週月曜に自動チェック {live && `・最終取得 ${formatDate(live.updatedAt)}`}</p>
        </div>
        <div className="idol-stage" aria-label="注目の犬動画">
          <div className="idol-orbit"/><span className="idol-crown">✦</span><span className="idol-bubble">みんなの人気者！</span>
          {videos.filter((video) => video.rank === 1).slice(0, 3).map((video, index) => <a className={`idol-card ${['one','two','three'][index]}`} href={`/videos/${video.id}`} key={video.id}><img src={thumbnailFor(video.id)} alt={video.title}/><strong>{video.channel}</strong><small>人気 第1位 ♡</small></a>)}
          <div className="hero-stats"><div><b>{videos.length}</b><span>推し動画</span></div><div><b>{allChannels.length + socialCreators.length}</b><span>掲載アカウント</span></div><div><b>3</b><span>SNS</span></div></div>
        </div>
      </section>

      <section className="latest-strip" aria-labelledby="latest-title">
        <div className="latest-inner">
          <div className="section-title-row"><div><p className="eyebrow">NEW RELEASE</p><h2 id="latest-title">犬ドルの最新動画 ♡</h2></div><span className="auto-badge"><span className="live-dot"/> 自動更新中</span></div>
          {latestVideos.length ? <div className="latest-grid">{latestVideos.map((video) => <a className="latest-card" href={youtubeFor(video.id)} target="_blank" rel="noreferrer" key={video.id}><img src={thumbnailFor(video.id)} alt={`${video.title}のサムネイル`}/><div><small>{video.channel}</small><h3>{video.title}</h3><p>{new Date(video.published).toLocaleDateString('ja-JP')} 公開 ↗</p></div></a>)}</div> : <div className="latest-grid">{videos.slice(0, 6).map((video) => <a className="latest-card" href={youtubeFor(video.id)} target="_blank" rel="noreferrer" key={video.id}><img src={thumbnailFor(video.id)} alt={`${video.title}のサムネイル`}/><div><small>{video.channel}</small><h3>{video.title}</h3><p>最新情報を取得中…</p></div></a>)}</div>}
        </div>
      </section>

      <section className="ranking-section" id="ranking">
        <div className="ranking-inner">
          <div className="finder-head ranking-head"><div><p className="eyebrow">MOST VIEWED DOG VIDEOS</p><h2>再生回数ランキング ♡</h2></div><p>{rankingTab === '総合ランキング' ? `内容確認済みの人気動画${videos.length}本を、${rankingDate}調査時点の再生回数で順位付け。` : '名鑑に掲載中の各チャンネルから、直近投稿の再生回数を比較。6時間ごとに更新します。'}</p></div>
          <div className="ranking-tabs">{(['総合ランキング', '最新動画ランキング'] as const).map((item) => <button className={rankingTab === item ? 'selected' : ''} onClick={() => setRankingTab(item)} key={item}>{item}</button>)}</div>
          <div className="ranking-list">{rankingVideos.map((video, index) => (
            <a className={`ranking-row ${index < 3 ? `ranking-winner winner-${index + 1}` : ''}`} href={video.href} target={rankingTab === '最新動画ランキング' ? '_blank' : undefined} rel={rankingTab === '最新動画ランキング' ? 'noreferrer' : undefined} key={`${rankingTab}-${video.id}`}>
              <span className="ranking-number">{index + 1}<small>位</small></span>
              <img src={thumbnailFor(video.id)} alt={`${video.title}のサムネイル`} loading="lazy" />
              <div className="ranking-copy"><small>{video.channel}</small><h3>{video.title}</h3><p>{video.breed}</p></div>
              <div className="ranking-views"><span>▶</span><b>{formatViews(video.rankingViews)}</b><small>{rankingTab === '最新動画ランキング' ? '最新動画' : '総再生回数'}</small></div>
            </a>
          ))}</div>
          <p className="ranking-note">公開されているYouTube情報をもとに集計 ・ {rankingTab === '総合ランキング' ? `集計日 ${rankingDate}` : live ? `最終取得 ${formatDate(live.updatedAt)}` : '最新情報を取得中…'}</p>
          <a className="ranking-more" href="/rankings/most-viewed">犬動画ランキングを30位まで見る →</a>
        </div>
      </section>

      <section className="finder" id="videos">
        <div className="finder-head"><div><p className="eyebrow">OSHIMEN MOVIE FINDER</p><h2>推し動画を探そう ♡</h2></div><p>各チャンネルの人気1〜3位を収録。順位と再生数は{rankingDate}の調査結果を基準にしています。</p></div>
        <div className="search-panel">
          <label className="search-box wide"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：柴犬、歯磨き、子犬のしつけ" /><button onClick={() => setQuery('')} aria-label="検索をクリア">×</button></label>
          <div className="select-row">
            <label><span>チャンネル</span><select value={channel} onChange={(event) => setChannel(event.target.value)}>{channelOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>カテゴリ</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categoryInfo.map((item) => <option key={item.name}>{item.name}</option>)}</select></label>
            <label><span>犬種</span><select value={breed} onChange={(event) => setBreed(event.target.value)}>{breedOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>年齢</span><select value={age} onChange={(event) => setAge(event.target.value)}>{ageOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
        <div className="category-chips">{categoryInfo.map((item) => <button key={item.name} onClick={() => setCategory(item.name)} className={category === item.name ? 'selected' : ''}>{item.icon} {item.name}</button>)}</div>
        </div>

        <div className="results-head"><p><b>{filtered.length}</b> 本の推し候補</p><select value={sort} onChange={(event) => setSort(event.target.value)}><option>チャンネル別TOP順</option><option>再生数順</option><option>新しい順</option><option>タイトル順</option></select></div>
        {filtered.length ? <div className="video-grid">{filtered.map((video) => (
          <article className="video-card" key={video.id}>
            <a className="video-thumb" href={`/videos/${video.id}`} aria-label={`${video.title}の詳細を見る`}>
              <img src={thumbnailFor(video.id)} alt={`${video.title}のサムネイル`} loading="lazy" />
              <span className={`rank-badge rank-${video.rank}`}>TOP {video.rank}</span><span className="play">▶</span><small>{video.duration}</small>
            </a>
            <div className="video-body">
              <div className="video-labels"><span>{video.category}</span><span>{video.breed}</span><span>{video.age}</span></div>
              <h3><a href={`/videos/${video.id}`}>{video.title}</a></h3>
              <p className="channel-name">{video.channel}</p>
              <p className="checked-label">✓ 動画内容を確認して要約</p><p className="video-desc">{video.description}</p>
              <div className="video-meta"><span>{video.published}</span><span className="live-view">▶ {formatViews(video.liveViewCount)}</span></div>
              <div className="video-actions"><a className="detail-link" href={`/videos/${video.id}`}>詳しく見る →</a><a className="yt-link" href={youtubeFor(video.id)} target="_blank" rel="noreferrer">YouTube ↗</a>{video.instagram && <a className="ig-link" href={video.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}</div>
            </div>
          </article>
        ))}</div> : <div className="empty"><span>🐕</span><h3>条件に合う動画が見つかりませんでした</h3><p>犬種や年齢を「すべて」に戻してみてください。</p><button onClick={reset}>条件をリセット</button></div>}
      </section>

      <section className="channel-section" id="channels">
        <div className="finder-head"><div><p className="eyebrow">DOG OWNER CREATOR DIRECTORY</p><h2>飼い主クリエイター名鑑 ♡</h2></div><p>YouTube {extraOwnerChannels.length + 2}組に加え、フォロワー1,000人以上を確認したInstagram・TikTok {socialCreators.length}組を収録しました。</p></div>
        <div className="platform-tabs" aria-label="SNSを選択">
          {(['YouTube', 'Instagram', 'TikTok'] as const).map((item) => <button key={item} className={directoryPlatform === item ? `selected ${item.toLowerCase()}` : ''} onClick={() => setDirectoryPlatform(item)}><span>{item === 'YouTube' ? '▶' : item === 'Instagram' ? '◎' : '♪'}</span>{item}<small>{item === 'YouTube' ? extraOwnerChannels.length + 2 : socialCreators.filter((creator) => creator.platform === item).length}</small></button>)}
        </div>
        <div className="directory-tools">
          <label className="search-box"><span>⌕</span><input value={directoryQuery} onChange={(event) => setDirectoryQuery(event.target.value)} placeholder="犬種・アカウント名で探す" /><button onClick={() => setDirectoryQuery('')} aria-label="検索をクリア">×</button></label>
          <label className="directory-breed"><span>犬種</span><select value={directoryBreed} onChange={(event) => setDirectoryBreed(event.target.value)}>{directoryBreedOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
          {directoryPlatform === 'YouTube' ? <div className="directory-tabs">{['飼い主さん', 'すべて', 'TOP3まとめあり'].map((item) => <button key={item} className={directoryMode === item ? 'selected' : ''} onClick={() => setDirectoryMode(item)}>{item}</button>)}</div> : <span className="verified-filter">✓ 1,000人以上のみ</span>}
          <p><b>{directoryPlatform === 'YouTube' ? directoryChannels.length : directorySocialCreators.length}</b> 件表示中</p>
        </div>
        <div className="breed-shortcuts" aria-label="人気犬種から探す"><span>犬種から推しを探す</span>{featuredBreedCounts.map((item) => <button key={item.name} className={directoryBreed === item.name ? 'selected' : ''} onClick={() => setDirectoryBreed(directoryBreed === item.name ? 'すべて' : item.name)}>{item.name}<small>{item.count}</small></button>)}</div>
        {directoryPlatform === 'YouTube' ? <div className="channel-list">{directoryChannels.map((channel) => (
          <article className="channel-row" key={channel.name}>
            <img src={live?.channels[channel.channelId]?.avatar || channel.thumbnail} alt={`${channel.name}のチャンネル画像`} loading="lazy" />
            <div className="channel-row-copy"><span>{channel.category}</span><h3>{channel.name}</h3><p>{channel.videos ? '人気TOP3掲載' : '最新動画を自動取得'} ・ {channel.breeds}</p>{channel.description && <small>{channel.description}</small>}</div>
            <div className="subscriber"><b>{live?.channels[channel.channelId]?.subscriber || '—'}</b><span>チャンネル登録者</span></div>
            {channel.videos ? <p className="channel-total">TOP3 合計 ▶ {formatViews(videos.filter((video) => video.channelId === channel.channelId).reduce((sum, video) => sum + (live?.videos[video.id] ?? video.viewCount), 0))}</p> : <p className="channel-total latest-title">最新：{live?.channels[channel.channelId]?.latest?.title || '情報を取得中…'}</p>}
            <div className="channel-links"><button onClick={() => openDirectoryModal({ kind: 'youtube', channel })}>{channel.videos ? 'この場でTOP3再生' : '最新動画を再生'}</button><a href={channel.channelUrl} target="_blank" rel="noreferrer">YouTube</a>{channel.instagram && <a className="ig-button" href={channel.instagram} target="_blank" rel="noreferrer">Instagram</a>}</div>
          </article>
        ))}</div> : <div className="social-list">{directorySocialCreators.map((creator) => (
          <article className={`social-card ${creator.platform.toLowerCase()}`} key={`${creator.platform}-${creator.handle}`}>
            <img className="social-avatar" src={socialMediaProfiles[`${creator.platform}:${creator.handle}`]?.icon || '/favicon.svg'} alt={`${creator.name}のプロフィール画像`} loading="lazy" onError={(event) => { event.currentTarget.src = '/favicon.svg'; }} />
            <div className="social-card-copy"><span className="social-platform">{creator.platform}</span><h3>{creator.name}</h3><p>{creator.handle}</p><small>{creator.description}</small></div>
            <div className="social-followers"><b>{formatFollowers(creator.followers)}</b><span>フォロワー</span></div>
            <div className="social-breed">🐾 {creator.breeds}</div>
            <p className="social-checked">✓ 公開プロフィール確認 {creator.checkedAt}</p>
            <div className="social-actions"><button className="social-open" onClick={() => openDirectoryModal({ kind: 'social', creator })}>この場で人気動画を見る ▶</button><a className="social-profile-link" href={creator.url} target="_blank" rel="noreferrer">公式プロフィール ↗</a></div>
          </article>
        ))}</div>}
      </section>

      {directoryModal && <div className="creator-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setDirectoryModal(null); }}>
        <section className={`creator-modal ${directoryModal.kind === 'social' ? directoryModal.creator.platform.toLowerCase() : 'youtube'}`} role="dialog" aria-modal="true" aria-labelledby="creator-modal-title">
          <button className="creator-modal-close" onClick={() => setDirectoryModal(null)} aria-label="閉じる">×</button>
          {directoryModal.kind === 'social' ? <>
            <header className="creator-modal-head">
              <img src={modalSocialProfile?.icon || '/favicon.svg'} alt="" onError={(event) => { event.currentTarget.src = '/favicon.svg'; }} />
              <div><span>{directoryModal.creator.platform} CREATOR</span><h2 id="creator-modal-title">{directoryModal.creator.name}</h2><p>{directoryModal.creator.handle} ・ {directoryModal.creator.breeds}</p></div>
              <strong>{formatFollowers(directoryModal.creator.followers)}<small>フォロワー</small></strong>
            </header>
            {modalSocialProfile?.media.length ? <div className="creator-modal-content">
              <div className="creator-player social-player"><iframe key={modalSocialProfile.media[modalMediaIndex]?.embedUrl} src={modalSocialProfile.media[modalMediaIndex]?.embedUrl} title={`${directoryModal.creator.name}の動画`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="eager" /></div>
              <div className="creator-modal-side">
                <p className="modal-ranking-label">{directoryModal.creator.platform === 'TikTok' ? '公開埋め込み内の再生上位' : '公開プロフィールの注目投稿'}</p>
                <div className="modal-media-tabs">{modalSocialProfile.media.map((item, index) => <button className={modalMediaIndex === index ? 'selected' : ''} onClick={() => setModalMediaIndex(index)} key={`${item.id}-${index}`}><img src={item.thumbnail || modalSocialProfile.icon} alt="" /><span><b>{index + 1}</b><em>{item.title}</em>{item.viewCount !== null && <small>▶ {formatViews(item.viewCount)}</small>}</span></button>)}</div>
                <p className="modal-note">{directoryModal.creator.platform === 'Instagram' ? 'Instagramは公開されない再生・いいね数を推測せず、プロフィール上の注目投稿を表示しています。' : 'TikTok公式の公開埋め込みに表示された動画を、取得時点の再生数で並べています。'}</p>
                <a className="modal-external" href={directoryModal.creator.url} target="_blank" rel="noreferrer">公式プロフィールを開く ↗</a>
              </div>
            </div> : <div className="creator-modal-empty"><span>🐾</span><h3>動画を準備中です</h3><p>公開プロフィールから動画を取得できない場合があります。</p><a href={directoryModal.creator.url} target="_blank" rel="noreferrer">公式プロフィールを見る ↗</a></div>}
          </> : <>
            <header className="creator-modal-head">
              <img src={live?.channels[directoryModal.channel.channelId]?.avatar || directoryModal.channel.thumbnail} alt="" />
              <div><span>YOUTUBE CREATOR</span><h2 id="creator-modal-title">{directoryModal.channel.name}</h2><p>{directoryModal.channel.breeds}</p></div>
              <strong>{live?.channels[directoryModal.channel.channelId]?.subscriber || '—'}<small>登録者</small></strong>
            </header>
            {modalYoutubeItems.length ? <div className="creator-modal-content youtube-content">
              <div className="creator-player youtube-player"><iframe key={modalYoutubeItems[modalMediaIndex]?.id} src={`https://www.youtube.com/embed/${modalYoutubeItems[modalMediaIndex]?.id}`} title={`${directoryModal.channel.name}の動画`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
              <div className="creator-modal-side"><p className="modal-ranking-label">{modalYoutubeVideos.length ? 'チャンネル人気 TOP3' : 'チャンネル最新動画'}</p><div className="modal-media-tabs">{modalYoutubeItems.map((item, index) => <button className={modalMediaIndex === index ? 'selected' : ''} onClick={() => setModalMediaIndex(index)} key={item.id}><img src={thumbnailFor(item.id)} alt="" /><span><b>{modalYoutubeVideos.length ? index + 1 : 'NEW'}</b><em>{item.title}</em>{'viewCount' in item && <small>▶ {formatViews(live?.videos[item.id] ?? item.viewCount)}</small>}</span></button>)}</div><a className="modal-external" href={directoryModal.channel.channelUrl} target="_blank" rel="noreferrer">YouTubeチャンネルを開く ↗</a></div>
            </div> : <div className="creator-modal-empty"><span>🐾</span><h3>最新動画を取得中です</h3><p>しばらくしてからもう一度お試しください。</p></div>}
          </>}
        </section>
      </div>}

      <section className="info-guide" id="guide">
        <div><p className="eyebrow">OSHIKATSU POINT</p><h2>推す前に知りたいこと、<br/>ひと目で。</h2></div>
        <div className="guide-grid"><div><b>01</b><h3>犬種・対象年齢</h3><p>うちの子に近い動画か、見る前に判断できます。</p></div><div><b>02</b><h3>要点・テーマ</h3><p>動画でわかることを短く整理しています。</p></div><div><b>03</b><h3>発信元・SNS</h3><p>YouTube・Instagram・TikTokへ直接移動できます。</p></div><div><b>04</b><h3>公開日・長さ</h3><p>情報の新しさと視聴時間を確認できます。</p></div></div>
      </section>

      <section className="seo-hub" aria-labelledby="seo-hub-title">
        <div className="finder-head"><div><p className="eyebrow">DOG VIDEO GUIDE</p><h2 id="seo-hub-title">犬種・発信者から探す</h2></div><p>犬種ごとのYouTube・Instagram・TikTokと、専門家・お店・飼い主さんの動画をまとめて見られます。</p></div>
        <div className="seo-hub-group"><h3>人気の犬種</h3><div>{breedLandings.map((item) => <a href={`/dog-breeds/${item.slug}`} key={item.slug}>{item.name}<span>→</span></a>)}</div></div>
        <div className="seo-hub-group"><h3>発信者の種類</h3><div>{categoryLandings.map((item) => <a href={`/categories/${item.slug}`} key={item.slug}>{item.name}<span>→</span></a>)}</div></div>
        <a className="seo-ranking-link" href="/rankings/most-viewed"><span>▶</span><div><small>MOST VIEWED</small><b>犬動画 再生回数ランキング TOP30</b></div><em>ランキングを見る →</em></a>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">🐾</span><span>犬ちゃんねる</span></a><p>推したい犬と、毎日会える。</p><a href="/about">このサイトについて</a><a href="/editorial-policy">掲載・編集方針</a><span>© 2026 犬ちゃんねる</span></footer>
    </main>
  );
}
