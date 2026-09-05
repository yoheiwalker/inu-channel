'use client';

import { useMemo, useState } from 'react';

const categories = [
  { name: 'すべて', icon: '🐾', color: '#292523' },
  { name: '獣医師', icon: '🩺', color: '#ef8354' },
  { name: 'しつけ教室', icon: '🦮', color: '#5b8e7d' },
  { name: 'ペットフード', icon: '🥣', color: '#d8a03d' },
  { name: 'ペットショップ', icon: '🏠', color: '#7c6fc5' },
  { name: 'トリミングサロン', icon: '✂️', color: '#d66c8e' },
  { name: '飼い主さん', icon: '🤎', color: '#6788b8' },
];

const channelData = [
  ['獣医師YouTuber テル', '獣医師', '病気のサインや予防を、獣医師がやさしく解説。', '健康', '病気予防'],
  ['ペット予防医療センター', '獣医師', '毎日のケアから気をつけたい症状まで。', '予防医療', '初心者向け'],
  ['獣医師ふー', '獣医師', '犬の健康にまつわる疑問を短くわかりやすく。', '健康', 'Q&A'],
  ['動物病院チャンネル', '獣医師', '動物病院から届く、信頼できる犬の健康情報。', '病院', 'シニア犬'],
  ['犬のしつけチャンネル', 'しつけ教室', '吠え・噛み・散歩のお悩みを実演で解決。', 'しつけ', '実践'],
  ['犬塾', 'しつけ教室', '愛犬との関係を深めるトレーニングの考え方。', 'トレーニング', '基礎'],
  ['ドッグトレーナー金倉', 'しつけ教室', '今日から試せる、家庭犬のレッスン動画。', '問題行動', 'レッスン'],
  ['Wan!Pass しつけ教室', 'しつけ教室', '子犬から成犬まで、暮らしのルールを学ぶ。', '子犬', '社会化'],
  ['ココグルメ公式', 'ペットフード', '手づくりごはんの知識と愛犬の食事時間。', '手作り食', '食育'],
  ['PETOKOTO FOODS', 'ペットフード', 'フレッシュフードと犬の栄養を楽しく紹介。', '栄養', 'フード'],
  ['犬猫生活', 'ペットフード', 'フード選びと健やかな暮らしのヒント。', '国産フード', '健康'],
  ['ドッグフード研究室', 'ペットフード', '原材料や選び方を飼い主目線で比較。', '比較', '選び方'],
  ['ペットショップ ワンラブ', 'ペットショップ', 'かわいい子犬と、お迎え後のお役立ち情報。', '子犬', 'お迎え'],
  ['P’s-first', 'ペットショップ', '新しい家族との出会いと飼育の基礎知識。', 'お迎え', '飼い方'],
  ['ペットの専門店コジマ', 'ペットショップ', '犬との暮らしに役立つ商品とイベント情報。', 'グッズ', 'イベント'],
  ['Coo&RIKU', 'ペットショップ', '全国のお店から子犬とペットライフを発信。', '子犬', '店舗'],
  ['Grooming Channel', 'トリミングサロン', 'プロの手仕事が気持ちいいトリミング動画。', 'カット', 'プロ技'],
  ['Lovely Grooming', 'トリミングサロン', 'ふわふわに変身する犬たちのビフォーアフター。', '変身', '癒やし'],
  ['トリミングサロン Wanbo', 'トリミングサロン', 'サロンでくつろぐ犬たちとケアのコツ。', 'サロン', 'ケア'],
  ['DOG SALON RIO', 'トリミングサロン', '犬種ごとのかわいいスタイルを紹介。', 'スタイル', '犬種別'],
  ['柴犬らんまる', '飼い主さん', 'のんびりした日常に癒やされる人気の柴犬暮らし。', '柴犬', '日常'],
  ['柴犬スティーブch', '飼い主さん', '家族みんなで笑える、にぎやかな犬との日々。', '柴犬', '笑える'],
  ['豆柴うに＆ゴールデンおから', '飼い主さん', '仲良しな2匹と家族のあたたかな毎日。', '多頭飼い', '癒やし'],
  ['ポメラニアンのマヨちゃん', '飼い主さん', 'もふもふポメラニアンの愛らしい成長記録。', 'ポメラニアン', '日常'],
];

const channels = channelData.map((item, i) => ({
  name: item[0], category: item[1], description: item[2], tags: [item[3], item[4]],
  accent: categories.find((c) => c.name === item[1])?.color,
  initials: ['🐶','🐕','🦴','🐾','🧡','🐕‍🦺'][i % 6],
}));

export default function Home() {
  const [active, setActive] = useState('すべて');
  const [query, setQuery] = useState('');
  const visible = useMemo(() => channels.filter((channel) => {
    const categoryMatch = active === 'すべて' || channel.category === active;
    const text = `${channel.name} ${channel.description} ${channel.tags.join(' ')}`.toLowerCase();
    return categoryMatch && text.includes(query.toLowerCase());
  }), [active, query]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="犬ちゃんねる トップへ"><span className="brand-mark">犬</span><span>犬ちゃんねる</span></a>
        <nav><a href="#channels">チャンネルを探す</a><a href="#about">このサイトについて</a></nav>
        <a className="submit-button" href="mailto:?subject=犬ちゃんねる掲載希望">＋ 掲載リクエスト</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">DOG VIDEO DIRECTORY</p>
          <h1>犬のこと、もっと知りたい。<br/><em>もっと好きになる。</em></h1>
          <p className="lead">獣医師の確かな知識から、飼い主さんのほっこり日常まで。<br/>犬にまつわるYouTubeチャンネルを、見つけやすくひとつに。</p>
          <label className="search-box"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="チャンネル名・テーマで検索" /><kbd>検索</kbd></label>
          <div className="quick-links"><span>人気のキーワード</span><button onClick={() => setQuery('しつけ')}>#しつけ</button><button onClick={() => setQuery('子犬')}>#子犬</button><button onClick={() => setQuery('健康')}>#健康</button><button onClick={() => setQuery('癒やし')}>#癒やし</button></div>
        </div>
        <div className="hero-visual" aria-label="犬たちの写真">
          <img src="https://www.puppy-vids.com/images/dog-community-hero.png" alt="いろいろな犬たちが集まるイラスト" />
          <div className="float-card card-one"><span>▶</span><b>動画でわかる</b><small>暮らしのヒント</small></div>
          <div className="float-card card-two"><span>♡</span><b>24+</b><small>掲載チャンネル</small></div>
        </div>
      </section>

      <section className="category-section" aria-label="カテゴリ">
        <div className="section-heading"><div><p className="eyebrow">CATEGORY</p><h2>どんな動画を探す？</h2></div><p>目的にあわせて、6つのカテゴリから選べます。</p></div>
        <div className="category-grid">{categories.slice(1).map((category) => (
          <button className={`category-card ${active === category.name ? 'active' : ''}`} key={category.name} onClick={() => { setActive(category.name); document.getElementById('channels')?.scrollIntoView({behavior:'smooth'}); }} style={{'--accent': category.color} as React.CSSProperties}>
            <span className="category-icon">{category.icon}</span><b>{category.name}</b><small>{channels.filter(c => c.category === category.name).length} チャンネル</small><i>→</i>
          </button>
        ))}</div>
      </section>

      <section className="channels-section" id="channels">
        <div className="section-heading"><div><p className="eyebrow">CHANNELS</p><h2>{active === 'すべて' ? 'おすすめチャンネル' : active}</h2></div><p>{visible.length}件のチャンネルが見つかりました</p></div>
        <div className="filters">{categories.map(category => <button key={category.name} className={active === category.name ? 'selected' : ''} onClick={() => setActive(category.name)}>{category.icon} {category.name}</button>)}</div>
        {visible.length > 0 ? <div className="channel-grid">{visible.map((channel) => (
          <article className="channel-card" key={channel.name} style={{'--accent': channel.accent} as React.CSSProperties}>
            <div className="channel-top"><span className="avatar">{channel.initials}</span><span className="category-pill">{channel.category}</span></div>
            <h3>{channel.name}</h3><p>{channel.description}</p><div className="tags">{channel.tags.map(tag => <span key={tag}>#{tag}</span>)}</div>
            <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(channel.name)}`}>YouTubeで見る <span>↗</span></a>
          </article>
        ))}</div> : <div className="empty"><span>🐕</span><h3>該当するチャンネルがありません</h3><button onClick={() => { setQuery(''); setActive('すべて'); }}>検索をリセット</button></div>}
      </section>

      <section className="about" id="about"><div><p className="eyebrow">ABOUT</p><h2>犬と暮らす毎日に、<br/>いい動画との出会いを。</h2></div><p>犬ちゃんねるは、犬を愛するすべての人のための動画案内所です。専門家の知識も、かわいい日常も、安心して楽しく探せる場所を目指しています。<small>※健康や食事に関する動画は一般情報です。気になる症状は必ず獣医師へご相談ください。</small></p></section>
      <footer><a className="brand" href="#top"><span className="brand-mark">犬</span><span>犬ちゃんねる</span></a><p>犬の動画と、いい出会いを。</p><span>© 2026 犬ちゃんねる</span></footer>
    </main>
  );
}
