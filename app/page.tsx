'use client';

import { useMemo, useState } from 'react';
import { categoryInfo, channelSummaries, rankingDate, thumbnailFor, videos, youtubeFor } from './data';

const breedOptions = ['すべて', ...Array.from(new Set(videos.map((video) => video.breed)))];
const ageOptions = ['すべて', '子犬', '成犬', 'シニア', '全年齢'];
const channelOptions = ['すべて', ...channelSummaries.map((channel) => channel.name)];

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('すべて');
  const [breed, setBreed] = useState('すべて');
  const [age, setAge] = useState('すべて');
  const [channel, setChannel] = useState('すべて');
  const [sort, setSort] = useState('チャンネル別TOP順');

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const result = videos.filter((video) => {
      const haystack = `${video.title} ${video.channel} ${video.category} ${video.breed} ${video.age} ${video.description} ${video.tags.join(' ')}`.toLowerCase();
      return (!needle || haystack.includes(needle))
        && (category === 'すべて' || video.category === category)
        && (breed === 'すべて' || video.breed === breed)
        && (age === 'すべて' || video.age.includes(age) || video.age === '全年齢')
        && (channel === 'すべて' || video.channel === channel);
    });
    if (sort === '再生数順') return [...result].sort((a, b) => b.viewCount - a.viewCount);
    if (sort === '新しい順') return [...result].sort((a, b) => b.published.localeCompare(a.published));
    if (sort === 'タイトル順') return [...result].sort((a, b) => a.title.localeCompare(b.title, 'ja'));
    return result;
  }, [query, category, breed, age, channel, sort]);

  const reset = () => { setQuery(''); setCategory('すべて'); setBreed('すべて'); setAge('すべて'); setChannel('すべて'); };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-mark">犬</span><span>犬ちゃんねる</span></a>
        <nav><a href="#videos">動画を探す</a><a href="#channels">チャンネル一覧</a><a href="#guide">使い方</a></nav>
        <a className="submit-button" href="mailto:?subject=犬ちゃんねる掲載希望">＋ 掲載リクエスト</a>
      </header>

      <section className="hero compact" id="top">
        <div className="hero-copy">
          <p className="eyebrow">DOG VIDEO DIRECTORY</p>
          <h1>犬チャンネルの、<br/><em>いちばんバズった動画。</em></h1>
          <p className="lead">各チャンネルの公開再生数TOP3を選び、<br/>動画の中身まで確認して要点をまとめました。</p>
          <a className="hero-cta" href="#videos">動画を探す <span>↓</span></a>
        </div>
        <div className="hero-stats">
          <div><b>{videos.length}</b><span>掲載動画</span></div><div><b>{channelSummaries.length}</b><span>チャンネル</span></div><div><b>6</b><span>専門カテゴリ</span></div>
        </div>
      </section>

      <section className="finder" id="videos">
        <div className="finder-head"><div><p className="eyebrow">MOST VIEWED TOP 3</p><h2>各チャンネル 人気動画1〜3位</h2></div><p>{rankingDate}時点の公開再生数を基準に集計。字幕・説明欄・映像を確認して要約しています。</p></div>
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

        <div className="results-head"><p><b>{filtered.length}</b> 本の動画</p><select value={sort} onChange={(event) => setSort(event.target.value)}><option>チャンネル別TOP順</option><option>再生数順</option><option>新しい順</option><option>タイトル順</option></select></div>
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
              <div className="video-meta"><span>{video.published}</span><span>{video.views}</span></div>
              <div className="video-actions"><a className="detail-link" href={`/videos/${video.id}`}>詳しく見る →</a><a className="yt-link" href={youtubeFor(video.id)} target="_blank" rel="noreferrer">YouTube ↗</a>{video.instagram && <a className="ig-link" href={video.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}</div>
            </div>
          </article>
        ))}</div> : <div className="empty"><span>🐕</span><h3>条件に合う動画が見つかりませんでした</h3><p>犬種や年齢を「すべて」に戻してみてください。</p><button onClick={reset}>条件をリセット</button></div>}
      </section>

      <section className="channel-section" id="channels">
        <div className="finder-head"><div><p className="eyebrow">CHANNEL DIRECTORY</p><h2>チャンネルから探す</h2></div><p>各チャンネルの人気TOP3と、公式SNSをまとめました。</p></div>
        <div className="channel-list">{channelSummaries.map((channel) => (
          <article className="channel-row" key={channel.name}>
            <img src={channel.thumbnail} alt={`${channel.name}の代表動画サムネイル`} loading="lazy" />
            <div className="channel-row-copy"><span>{channel.category}</span><h3>{channel.name}</h3><p>人気TOP3掲載 ・ {channel.breeds}</p></div>
            <div className="channel-links"><button onClick={() => { setChannel(channel.name); document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' }); }}>TOP3を見る</button><a href={channel.channelUrl} target="_blank" rel="noreferrer">YouTube</a>{channel.instagram ? <a className="ig-button" href={channel.instagram} target="_blank" rel="noreferrer">Instagram</a> : <span>Instagram 未登録</span>}</div>
          </article>
        ))}</div>
      </section>

      <section className="info-guide" id="guide">
        <div><p className="eyebrow">VIDEO INFORMATION</p><h2>動画ごとに必要な情報を、<br/>ひと目で。</h2></div>
        <div className="guide-grid"><div><b>01</b><h3>犬種・対象年齢</h3><p>うちの子に近い動画か、見る前に判断できます。</p></div><div><b>02</b><h3>要点・テーマ</h3><p>動画でわかることを短く整理しています。</p></div><div><b>03</b><h3>発信元・SNS</h3><p>YouTubeとInstagramへ直接移動できます。</p></div><div><b>04</b><h3>公開日・長さ</h3><p>情報の新しさと視聴時間を確認できます。</p></div></div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">犬</span><span>犬ちゃんねる</span></a><p>犬の動画と、いい出会いを。</p><span>© 2026 犬ちゃんねる</span></footer>
    </main>
  );
}
