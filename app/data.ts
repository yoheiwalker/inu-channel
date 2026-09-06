export type Video = {
  id: string; rank: 1 | 2 | 3; title: string; channel: string; channelId: string; channelUrl: string;
  category: string; breed: string; age: string; dogAge?: string; duration: string;
  published: string; views: string; viewCount: number; description: string;
  points: string[]; tags: string[]; instagram?: string; instagramHandle?: string;
  source?: string; note?: string;
};

export type SocialCreator = {
  name: string;
  handle: string;
  platform: 'Instagram' | 'TikTok';
  url: string;
  breeds: string;
  followers: number;
  checkedAt: string;
  description: string;
};

export const rankingDate = '2026.09.06';

export const categoryInfo = [
  { name: 'すべて', icon: '🐾', color: '#292523' },
  { name: '獣医師', icon: '🩺', color: '#ef8354' },
  { name: 'しつけ教室', icon: '🦮', color: '#5b8e7d' },
  { name: 'ペットフード', icon: '🥣', color: '#d8a03d' },
  { name: 'ペットショップ', icon: '🏠', color: '#7c6fc5' },
  { name: 'トリミングサロン', icon: '✂️', color: '#d66c8e' },
  { name: '飼い主さん', icon: '🤎', color: '#6788b8' },
];

const qoo = { channel: 'くぅのドッグフード研究室', channelId: 'UCFliizhw72q9f8J18RSBeCw', channelUrl: 'https://www.youtube.com/@qoo-dogfood', category: '獣医師' };
const shippolab = { channel: 'しっぽLABチャンネル', channelId: 'UC-PiekgzxHiAi_blVDQN0LQ', channelUrl: 'https://www.youtube.com/@sippolab0927', category: '獣医師' };
const dogcatch = { channel: '犬のしつけチャンネル / 金倉高志', channelId: 'UC0-IDDl7LvUVUPUTODM0KrA', channelUrl: 'https://www.youtube.com/@dogcatch', category: 'しつけ教室' };
const fufu = { channel: "FUFU家's ゴールデンレトリバーTEN", channelId: 'UCmTp9wGIzRZJH3-jUkYHJ9g', channelUrl: 'https://www.youtube.com/@fufu_ten_goldenretriever', category: 'ペットフード', instagram: 'https://www.instagram.com/fufu_ten_goldenretriever/', instagramHandle: '@fufu_ten_goldenretriever' };
const coco = { channel: 'フレンチブルドッグココ', channelId: 'UC8pLL1oT5TzhEDx0Xl_sS1Q', channelUrl: 'https://www.youtube.com/@miroku_coco', category: 'ペットフード', instagram: 'https://www.instagram.com/miroku_coco/', instagramHandle: '@miroku_coco' };
const kojima = { channel: '株式会社コジマ', channelId: 'UCr4rvtqO2UQLDMxgc16zQ3A', channelUrl: 'https://www.youtube.com/@petkojima1', category: 'ペットショップ', instagram: 'https://www.instagram.com/pets.kojima.official/', instagramHandle: '@pets.kojima.official' };
const palm = { channel: 'DOG salon Palm', channelId: 'UCkMe4O-jWq-QQlDtnjKVcNA', channelUrl: 'https://www.youtube.com/@dogpalm7106', category: 'トリミングサロン', instagram: 'https://www.instagram.com/mugitrimming/', instagramHandle: '@mugitrimming', source: 'https://dogsalonpalm.com/' };
const steve = { channel: '柴犬スティーブ', channelId: 'UCCUDI6EtG-Y0w8Nc-hTpsYg', channelUrl: 'https://www.youtube.com/@shibainuSteve', category: '飼い主さん', instagram: 'https://www.instagram.com/shiba2929/', instagramHandle: '@shiba2929', source: 'https://www.steve-studio.jp/' };
const ranmaru = { channel: 'SHIBA DOG RANMARU', channelId: 'UCgjULi89KwwEFcYHvsDRyXw', channelUrl: 'https://www.youtube.com/@ShibainuRanmaru', category: '飼い主さん', source: 'https://shibainuranmaru.com/' };

export const videos: Video[] = [
  { ...qoo, id: 'DlWEK6YBXf0', rank: 1, title: '【一撃で】ダメなドッグフードを見抜く方法', breed: '全犬種', age: '全年齢', duration: '17:22', published: '2023.01.26', views: '97.5万回', viewCount: 975333,
    description: 'パッケージ正面の印象ではなく、裏面の原材料表示・成分値・価格を見比べる、動画独自のフード選びを解説。穀類や糖質、動物性原材料、1kgあたりの価格を確認し、愛犬の体質に合うか考える流れを紹介します。',
    points: ['原材料は表示順まで確認する', '成分値から食事全体のバランスを見る', '価格だけでなく内容と愛犬との相性で判断する'], tags: ['ドッグフード', '選び方', '原材料'], note: '食事の変更や持病がある場合は獣医師へ相談してください。' },
  { ...qoo, id: 'jh6rOnTIJQM', rank: 2, title: '超猛毒！犬が食べたら危険なもの5選', breed: '全犬種', age: '全年齢', duration: '14:35', published: '2023.06.17', views: '84.9万回', viewCount: 848998,
    description: '殺虫剤や農薬、ネギ類、チョコレートなど、家庭内で犬が口にすると危険なものを症状とともに整理。誤食が分かった時は自己判断で様子を見ず、早く動物病院へ連絡する重要性を伝えています。',
    points: ['人には身近でも犬には危険な物がある', '保管場所と散歩中の拾い食いを見直す', '誤食時は品名・量・時刻を伝えて受診相談する'], tags: ['誤食', '中毒', '安全対策'], note: '緊急時は動画より先に動物病院へ連絡してください。' },
  { ...qoo, id: 'pYvkcp9E41w', rank: 3, title: '犬が最愛の人にしか見せない仕草10選', breed: '全犬種', age: '全年齢', duration: '13:10', published: '2023.09.27', views: '79.8万回', viewCount: 797925,
    description: '目を合わせる、近くで眠る、背中やお尻を向ける、お気に入りのおもちゃを持ってくるなど、信頼する相手に見せやすい行動を10項目で紹介。日々の反応を返しながら関係を育てるヒントも語られます。',
    points: ['安心している時の仕草を知る', '名前や視線への反応を関係づくりに生かす', '急な首の傾きなど体調サインとは見分ける'], tags: ['仕草', '信頼関係', '犬の気持ち'] },

  { ...shippolab, id: 'vysbD0D6iUI', rank: 1, title: '犬の正しい歯磨きの方法', breed: '全犬種', age: '全年齢', duration: '3:04', published: '2020.10.08', views: '2.8万回', viewCount: 27530,
    description: '犬の口に合う歯ブラシを選び、ペンのように軽く持って、歯ぐきの境目へ約45度に当てる手順を実演。正面から迫らず、口に触れる練習から奥歯へ少しずつ進め、できたら褒める方法です。',
    points: ['口の大きさと飼い主の手に合う歯ブラシを選ぶ', '小さくやさしく動かして歯ぐきの境目を磨く', '前歯から奥歯へ段階的に慣らす'], tags: ['歯磨き', 'デンタルケア', '実演'] },
  { ...shippolab, id: 'DtzoLxPm_L0', rank: 2, title: 'KANDEL（カンデル）の使い方「How to 噛みがき」', breed: '全犬種', age: '成犬', duration: '2:01', published: '2021.04.28', views: '1.9万回', viewCount: 19418,
    description: '噛む動きを利用するデンタルケア製品「KANDEL」の与え方を、短い実演で確認できる動画。犬が口にする様子と、家庭で取り入れる時の基本的な使い方が中心です。',
    points: ['製品の持たせ方と噛ませ方を見る', '犬の様子を見ながら安全に使う', '日常の歯磨きと組み合わせて考える'], tags: ['噛みがき', 'デンタル用品', '使い方'] },
  { ...shippolab, id: '1QefeapqEgE', rank: 3, title: '犬の歯周病はなぜ怖い？治療費は？', breed: '全犬種', age: '成犬・シニア', duration: '7:46', published: '2020.10.08', views: '1.8万回', viewCount: 18098,
    description: '歯垢が歯石になり、歯ぐきの炎症や根元の膿、鼻への影響につながる流れを解説。安全に細部まで処置するには麻酔下の歯石除去・研磨が一般的で、費用や検査は病院へ事前確認するよう案内します。',
    points: ['歯周病が進む仕組みを知る', '毎日のホームケアが予防の第一歩', '治療内容・麻酔前検査・費用を病院に確認する'], tags: ['歯周病', '歯石', '予防'], note: '症状や治療方針は、かかりつけの獣医師へ相談してください。' },

  { ...dogcatch, id: 's9IuMZ6s9Zo', rank: 1, title: 'なぜ足ばかり狙うの？子犬の噛み癖の直し方', breed: '小型犬・全犬種', age: '子犬', duration: '11:48', published: '2020.03.02', views: '66.4万回', viewCount: 663843,
    description: '動く足を追って噛む子犬に、大声や手で反応せず、リードで距離を管理しながらボールへ意識を移す練習を実演。引っ張っている間は遊べず、落ち着いて注目できたら遊べるルールを教えます。',
    points: ['足への反応を遊びに変えない', 'おもちゃへ視線と欲求を切り替える', '家でも同じルールを繰り返す'], tags: ['噛み癖', '子犬', '実演'] },
  { ...dogcatch, id: 'XO6I0_RZ37w', rank: 2, title: '子犬の甘噛みにはどう対応する？', breed: '全犬種', age: '子犬', duration: '10:13', published: '2020.08.12', views: '62.4万回', viewCount: 624496,
    description: '甘噛みを探索や遊びの一部として捉え、叫んだり大きく反応して興奮させない対応を解説。軽い噛みは静かに受け流し、痛い時は落ち着いて離れ、安全な長いおもちゃへ誘導します。',
    points: ['大きな反応で興奮を強めない', '手を守れる長い引っ張りおもちゃを使う', '怖さや強い攻撃性がある場合は専門家へ相談する'], tags: ['甘噛み', '子犬', 'おもちゃ'] },
  { ...dogcatch, id: 'TiODguKCphk', rank: 3, title: '子犬が本気で噛んでくる。', breed: 'チワワ・全犬種', age: '子犬', dogAge: 'パピル・撮影時5〜6か月', duration: '18:17', published: '2019.11.29', views: '41.1万回', viewCount: 410940,
    description: '出血するほど噛むことがあるチワワの子犬を預かり、強いエネルギーや怖がりな面を観察。不要な挑戦を避けて噛まれる機会を減らし、体罰や中途半端な叱責を使わず、運動と適度な距離を確保する考え方を説明します。',
    points: ['噛まれる状況そのものをできるだけ作らない', '体罰は恐怖と先制的な攻撃を強めるおそれがある', '個体を直接見られる専門家と継続して取り組む'], tags: ['本気噛み', 'チワワ', '子犬'], note: '強い噛み行動は状況ごとの判断が必要です。無理に対応せず専門家へ相談してください。' },

  { ...fufu, id: 'lM7ocQY60ho', rank: 1, title: '大型犬仔犬のいる生活｜生後8か月の一日に密着', breed: 'ゴールデンレトリバー', age: '子犬', dogAge: 'てん・撮影時8か月', duration: '20:40', published: '2022.12.29', views: '214.5万回', viewCount: 2145007,
    description: '生後8か月のてんと家族の一日を追う生活記録。室内で甘える姿、散歩や屋外遊び、家族とくつろぐ夜まで、大型犬の子犬らしい元気さと成長が一本の物語として楽しめます。',
    points: ['大型犬の子犬との一日の流れ', '散歩・遊び・休息のリアルな様子', '家族の中で成長するてんの表情'], tags: ['ゴールデンレトリバー', '一日密着', '大型犬'] },
  { ...fufu, id: 'Ml7jbvofMQI', rank: 2, title: '新学期、姉の帰宅がうれしすぎる愛犬の一日', breed: 'ゴールデンレトリバー', age: '成犬', dogAge: 'てん・撮影時1歳', duration: '21:18', published: '2023.09.10', views: '70.1万回', viewCount: 700680,
    description: '暑い日の涼しい場所探しや家族との時間を過ごしながら、学校から帰ったお姉ちゃんを全身で歓迎。大きな体で甘え、再会後に安心してくつろぐまでの一日を描きます。',
    points: ['帰宅した家族を迎える大型犬の喜び', '暑い日の室内での過ごし方', '家族に甘えるてんの日常'], tags: ['お出迎え', '家族', '大型犬'] },
  { ...fufu, id: 'W2wYF99UHOg', rank: 3, title: '生後2か月のゴールデンレトリバーをお迎え', breed: 'ゴールデンレトリバー', age: '子犬', dogAge: 'てん・生後61日ごろ', duration: '5:59', published: '2022.06.11', views: '35.7万回', viewCount: 357226,
    description: '小さなてんを車で迎え、家族の腕に抱かれて新しい家へ。ケージを探検し、少し緊張しながらも撫でられて眠るまで、家族になった初日の貴重な記録です。',
    points: ['子犬を迎える初日の空気感', '新しい環境を確かめる様子', '家族との最初のふれあい'], tags: ['お迎え', '子犬', '初日'] },

  { ...coco, id: 'Xp6ndE31a1M', rank: 1, title: '犬にドッキリ！いつもの小屋が突然小さくなったら？', breed: 'フレンチブルドッグ', age: '子犬', dogAge: 'ココ・0歳', duration: '4:42', published: '2017.07.17', views: '88.4万回', viewCount: 883965,
    description: 'いつものハウスを、そっくりな小さな箱へ入れ替えるドッキリ。ココは入口や屋根を何度も確かめ、戸惑いながらも中へ入ろうと工夫し、最後は本物のハウスへ戻って安心します。',
    points: ['見慣れた物の変化に気づく反応', '小さな入口へ挑戦する試行錯誤', '元のハウスに戻った時の安心した表情'], tags: ['フレンチブルドッグ', 'ドッキリ', '子犬'] },
  { ...coco, id: 'yWZJW1uFb3M', rank: 2, title: '子犬から成犬へ｜ココ0歳総まとめスペシャル', breed: 'フレンチブルドッグ', age: '子犬', dogAge: 'ココ・0〜1歳', duration: '10:52', published: '2017.10.01', views: '60.5万回', viewCount: 605487,
    description: '1歳の誕生日に、迎えたばかりの小さな頃から成犬らしくなるまでを総集編で振り返ります。遊び、散歩、食事、家族とのふれあいを重ね、体つきも表情も変わっていく一年の成長記録です。',
    points: ['お迎えから1歳までの成長', '月齢とともに変わる遊びや表情', '家族との思い出をつないだ誕生日作品'], tags: ['誕生日', '成長記録', '子犬'] },
  { ...coco, id: 'cZN0tBHoWKM', rank: 3, title: '犬専用お風呂「わんこの湯」で毛穴汚れをすっきり', breed: 'フレンチブルドッグ', age: '成犬', dogAge: 'ココ', duration: '12:41', published: '2018.03.07', views: '50.8万回', viewCount: 508112,
    description: 'お風呂が苦手なココが犬専用施設でマイクロバブル浴を体験。足裏を洗い、泡の湯へ浸かるうちに表情がゆるみ、汚れが落ちた後は毛一本一本がつややかになる変化を紹介します。',
    points: ['犬専用浴槽とマイクロバブルの施術', '入浴中に徐々に落ち着くココ', '入浴前後の毛づやの変化'], tags: ['犬のお風呂', 'マイクロバブル', 'フレンチブルドッグ'] },

  { ...kojima, id: '3W00N6G502Q', rank: 1, title: 'ペットの専門店コジマ', breed: '全犬種', age: '子犬', duration: '0:15', published: '2022.07.28', views: '3,409.8万回', viewCount: 34098240,
    description: '子犬・子猫の映像とともに、全国の店舗、ペット用品、動物病院、トリミング、ホテルなどを紹介する15秒のブランドCM。お迎え後も続く総合的なサポートを短く訴求します。',
    points: ['子犬・子猫との出会い', '用品から医療・美容までのサービス', '短い時間で伝えるブランドイメージ'], tags: ['ペットショップ', 'CM', 'サービス'] },
  { ...kojima, id: 'eLhEoEgW4WM', rank: 2, title: '遺伝子病の根絶に向けて', breed: '全犬種', age: '子犬', duration: '3:01', published: '2019.01.22', views: '4.3万回', viewCount: 42598,
    description: '子犬・子猫の遺伝子病検査へ取り組む様子を、スタッフ、獣医師、検査場面とともに紹介。検査結果の「正常・保因・発症」の考え方を示し、健康な子を迎えるための同社の方針を伝えます。',
    points: ['遺伝子病検査を行う背景', '検査結果を分類して把握する考え方', '獣医師やスタッフが健康管理へ関わる様子'], tags: ['遺伝子病', '健康管理', '子犬'], note: '内容は株式会社コジマが自社の取り組みとして紹介しているものです。' },
  { ...kojima, id: 'v9Bi3PAse5c', rank: 3, title: 'ペットの専門店コジマ メリークリスマス', breed: '全犬種', age: '子犬', duration: '0:27', published: '2025.12.12', views: '3.4万回', viewCount: 33939,
    description: 'クリスマスツリーと赤い背景の中、子犬や子猫の写真が次々に登場する季節CM。最後は多くの犬猫がツリーを囲み、にぎやかな祝日の雰囲気で締めくくります。',
    points: ['子犬・子猫を主役にした季節演出', '写真フレーム風のテンポよい構成', 'クリスマスの華やかなブランド動画'], tags: ['クリスマス', 'CM', '子犬'] },

  { ...palm, id: '_0WH8hewZLA', rank: 1, title: '他店ではカットできなかったシーズーの初来店トリミング', breed: 'シーズー', age: '成犬', duration: '33:00', published: '2024.09.13', views: '520.1万回', viewCount: 5201282,
    description: '他店では施術が難しかったシーズーの初来店。入店時の反応を確かめ、補助具や保定を使いながらシャンプー、乾燥、全身と顔まわりのカットを進め、最後はすっきりした姿で飼い主と再会します。',
    points: ['初対面で苦手な場面を見極める', '安全を優先して工程ごとに施術する', '長く伸びた被毛が整うビフォーアフター'], tags: ['シーズー', '噛み犬', 'ビフォーアフター'], note: '安全管理を含むプロの施術記録です。家庭での模倣は避けてください。' },
  { ...palm, id: 'EIgVqPniXXY', rank: 2, title: '5年間ハーネスを替えられなかった柴犬をグルーミング', breed: '柴犬', age: '成犬', duration: '12:41', published: '2024.04.12', views: '348.8万回', viewCount: 3487731,
    description: '尻尾・耳・口・足まわりを怖がり、噛み行動から5年間ハーネスを替えられなかった柴犬カク。飼い主への聞き取り後、反応を見ながら洗浄とケアを進め、古いハーネスの取り外しと交換まで完了します。',
    points: ['苦手な部位と過去の経緯を事前確認する', '反応に合わせて慎重にグルーミングする', '長年のハーネスを安全に交換する'], tags: ['柴犬', 'ハーネス', 'グルーミング'], note: '安全管理を含むプロの施術記録です。家庭での模倣は避けてください。' },
  { ...palm, id: 'rRD5H2lgPOM', rank: 3, title: '噛み癖で獣医も断念したトイプードルのトリミング', breed: 'トイプードル', age: '成犬', duration: '20:53', published: '2023.12.15', views: '214.7万回', viewCount: 2146966,
    description: '他店で断られ、動物病院でも複数人でのケアが難しかったトイプードルのククが初来店。飼い主の経緯を聞き、反応を確かめながら洗浄、乾燥、全身と顔まわりのカットを進め、長く悩んだケアを完了します。',
    points: ['飼い主から過去の施術状況を丁寧に聞き取る', '犬の反応に応じて工程と保定を調整する', '全身が整い飼い主と再会するまでを見る'], tags: ['トイプードル', '噛み犬', '初来店'], note: '安全管理を含むプロの施術記録です。家庭での模倣は避けてください。' },

  { ...steve, id: 'QnjvzDALnGA', rank: 1, title: 'ダルい柴犬と必死なコーギーとオラオラ猫のいる朝', breed: '柴犬・コーギー・猫', age: '成犬', duration: '10:50', published: '2022.10.21', views: '240.9万回', viewCount: 2409232,
    description: 'ほぼノーカットの朝の食卓を、柴犬スティーブ、コーギーのハル、猫のディス子のアテレコでコメディ化。食事への温度差や、一粒残すスティーブを見守るハルなど、多頭飼いの関係性が笑いになります。',
    points: ['3匹それぞれの食事スタイル', '家族の朝を会話劇にするアテレコ', '食後のパトロールと遊び'], tags: ['柴犬', 'コーギー', '猫', 'アテレコ'] },
  { ...steve, id: '20olwfph3cg', rank: 2, title: '狂犬病予防接種と健康診断へ行こう', breed: '柴犬・コーギー・猫', age: '成犬', duration: '11:23', published: '2023.05.11', views: '240.6万回', viewCount: 2406249,
    description: '一家の犬猫が動物病院で体重測定、診察、健康相談、狂犬病予防接種を受ける一日をコミカルなアテレコで紹介。落ち着いて注射を終え、最後はごほうびを楽しむまでを追います。',
    points: ['受付から診察・注射までの流れ', '体重や便など日常の健康相談', '通院後のごほうびまでを楽しく見る'], tags: ['動物病院', '狂犬病予防接種', '健康診断'] },
  { ...steve, id: 'QrXYllIlTMA', rank: 3, title: '【替え歌】ピクニックマーチ【豪華版】', breed: '柴犬・コーギー・猫', age: '成犬', duration: '1:40', published: '2023.05.06', views: '199.4万回', viewCount: 1993763,
    description: '家族が犬猫へ歌っていた遊び歌を、スティーブ、ハル、ディス子の散歩やカート移動の映像でミュージックビデオ化。3匹の“歌声”と表情をテンポよく楽しむ短編です。',
    points: ['犬猫の日常映像を使った替え歌作品', '3匹の個性を生かした役割分担', '散歩や移動の楽しい場面編集'], tags: ['替え歌', 'ミュージックビデオ', '多頭飼い'] },

  { ...ranmaru, id: '800RM-MJ9-4', rank: 1, title: 'テンションMAXの柴犬に動物病院の診察券を見せた瞬間', breed: '柴犬', age: '成犬', dogAge: 'らんまる', duration: '2:09', published: '2022.10.10', views: '1,506.0万回', viewCount: 15060077,
    description: '元気いっぱいで家族との再会を喜ぶらんまるへ、毎年通う動物病院の診察券を提示。カードを見るたび真顔になって一歩引き、病院を連想したような表情の変化を見せます。',
    points: ['再会直後の高いテンション', '診察券を見た瞬間の表情の変化', 'カードから何かを察して距離を取る反応'], tags: ['柴犬', '動物病院', 'リアクション'] },
  { ...ranmaru, id: '88npQhcm9qk', rank: 2, title: '柴犬の前で食パンをなでなでしてみた', breed: '柴犬', age: '成犬', dogAge: 'らんまる', duration: '1:15', published: '2021.03.28', views: '1,037.0万回', viewCount: 10370104,
    description: 'らんまるにそっくりな食パンを、いつもの座布団へ置いて家族が優しくなでる実験。らんまるは近づいて確認し、パンへ嫉妬したように抗議しますが、自分がなでられるとすぐ穏やかな表情に戻ります。',
    points: ['自分の場所に置かれた食パンを確認', '家族がパンをなでる様子への反応', '自分がなでられると落ち着く変化'], tags: ['柴犬', '食パン', '嫉妬'] },
  { ...ranmaru, id: 'Bf_Ber_wSyQ', rank: 3, title: 'タオルの下のお姉ちゃんを発見して感情大爆発', breed: '柴犬', age: '成犬', dogAge: 'らんまる', duration: '6:28', published: '2023.08.18', views: '849.0万回', viewCount: 8489984,
    description: '3か月ぶりに帰省したお姉ちゃんを秘密にし、台所でタオルの下へ隠れてもらうサプライズ。気配を察したらんまるは匂いを追い、猛烈な勢いでタオルをめくると、鼻を鳴らしながら全身で再会を喜びます。',
    points: ['玄関で家族の気配を察する', '匂いを頼りに隠れ場所を探す', '発見直後に感情があふれる再会'], tags: ['柴犬', '再会', 'サプライズ'] },
];

export const thumbnailFor = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const youtubeFor = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export type ChannelSummary = {
  name: string;
  channelId: string;
  category: string;
  thumbnail: string;
  videos: number;
  totalViews: number;
  breeds: string;
  channelUrl: string;
  instagram?: string;
  instagramHandle?: string;
  description?: string;
};

export const channelSummaries: ChannelSummary[] = Array.from(new Set(videos.map((video) => video.channel))).map((channel) => {
  const entries = videos.filter((video) => video.channel === channel).sort((a, b) => a.rank - b.rank);
  const first = entries[0];
  return {
    name: channel, channelId: first.channelId, category: first.category, thumbnail: thumbnailFor(first.id), videos: entries.length,
    totalViews: entries.reduce((sum, video) => sum + video.viewCount, 0),
    breeds: Array.from(new Set(entries.map((video) => video.breed))).join('・'),
    channelUrl: first.channelUrl, instagram: first.instagram, instagramHandle: first.instagramHandle,
  };
});

const ownerChannel = (
  name: string,
  channelId: string,
  breeds: string,
  representativeVideoId: string,
  description = `${breeds}と飼い主さんの暮らしを楽しめるチャンネル。`,
): ChannelSummary => ({
  name,
  channelId,
  category: '飼い主さん',
  thumbnail: thumbnailFor(representativeVideoId),
  videos: 0,
  totalViews: 0,
  breeds,
  channelUrl: `https://www.youtube.com/channel/${channelId}`,
  description,
});

export const extraOwnerChannels: ChannelSummary[] = [
  ownerChannel('Toy Poodle Kotaro & Mio', 'UCRZbfmn4b-VCR3jipSEZCFA', 'トイプードル', 'npQpYNls_BI', '虎太郎とみくる、家族の毎日を追える暮らし系チャンネル。'),
  ownerChannel('Glee channel', 'UC1_DrdX2goHuPevGTpjwpyw', 'トイプードル', 'dw5ErBh7OKw', 'トイプードルのグリィと家族のおでかけ・日常記録。'),
  ownerChannel('Mame shiba UNI＆Golden retriever OKARA', 'UCyCnRz_3w--uy44zFv1dThg', '豆柴・ゴールデンレトリバー', 'ulgR1OH9h0g', '豆柴うにとゴールデンレトリバーおからのにぎやかな家族時間。'),
  ownerChannel('ポメくんの日常', 'UCEsl6Anp_CZXX9OEayrlbaA', 'ポメラニアン', 'KfHoViC76gc', 'ポメラニアンと家族の距離の近い日常を楽しめるチャンネル。'),
  ownerChannel('Shiba Inu Ringoro', 'UCQwug8A0MnUy5sILT1KMEIg', '柴犬', 'kDnBPAnkZpU', '柴犬りんご郎と子どもたちが一緒に育つ家族の記録。'),
  ownerChannel('サモエドりんたろう', 'UCVJiAbpmTTh2aYeBtMcry5g', 'サモエド', 'INFBIvcmbvQ', '白くて大きなサモエドたちとの暮らしと成長を発信。'),
  ownerChannel('犬と猫の親バカ日記', 'UCDrLRJgdu05HtV8JLQVhx3w', 'シベリアンハスキー・トイプードル', 'U7-Ds3i71xU', '犬と猫が一緒に暮らす多頭飼い家族の日常チャンネル。'),
  ownerChannel('Toby & Pi Family', 'UCPByqQHYwQ-EfJ5IQDUlE0A', 'ゴールデンレトリバー・コーギー', 'OoMT73ElEuM', '大型犬を中心に、家族で向き合う日々を丁寧に残すチャンネル。'),
  ownerChannel('ジョイ家', 'UC9PDC4xeAqgoq1mEoS53Pig', 'ゴールデンレトリバー', 'TPUOtsJvRvY', 'ゴールデンレトリバーのジョイと家族の旅や暮らしの記録。'),
  ownerChannel('コーギー犬ノエさん / NOEL and MONA', 'UCa-a9qEbO70xr0MGFhrFABw', 'ウェルシュ・コーギー', 'X2EUwjB-fH8', 'ノエルとモナの表情豊かな日常を追えるコーギーチャンネル。'),
  ownerChannel('甲斐犬一休と猫のしずくと僕のチャンネル', 'UCuxXyuKhxoYFTiNmnOVVBXA', '甲斐犬', 'R44VycpxuqU', '甲斐犬一休と猫のしずく、家族が暮らす毎日を発信。'),
  ownerChannel('秋田犬げんき', 'UC0e87WXu_SJhrc8tb08qyaQ', '秋田犬', 'WTI9rdS35_M', '秋田犬たちの素朴で表情豊かな暮らしを長く記録。'),
  ownerChannel('ボーダーコリーのライト【ふうらいTV】', 'UCdlk_jryx3sywQTf_x8BD3A', 'ボーダーコリー・ゴールデンレトリバー', 'khBr9DRK3pI', 'ボーダーコリーとゴールデンレトリバー中心の多頭飼い生活。'),
  ownerChannel('しばわんこ生活', 'UCVrQEJIhAw8OfFeBCVlRHfg', '柴犬', 'kmEzuBfZi_g', '柴犬と家族、多世代で過ごすやさしい日常を発信。'),
  ownerChannel('豆柴すみすみ', 'UC93O_mvkSvPHQDqPMJbl9Aw', '豆柴', 'TxbOwBbC3HQ', '豆柴すみすみのおでかけや家族との日常を楽しめるチャンネル。'),
  ownerChannel('豆柴福チャンネル', 'UCTEjtNZp6ihAkglsr-1BfgQ', '豆柴', 'INyNS0oLqlk', '豆柴の福と家族の何気ない毎日を届ける暮らし系チャンネル。'),
  ownerChannel('KOMUGI', 'UCtq-YnnMcvIB3MFF8zfl1-Q', '柴犬', 'SskPqnZYgBY', '柴犬こむぎと飼い主のおでかけや賑やかな日常。'),
  ownerChannel('Life with Malamutes', 'UCj9pk54KCzfvTs9gnMKJYSg', 'アラスカン・マラミュート', '80AcoFidWeE', '大きなアラスカン・マラミュートたちと暮らす家族の記録。'),
  ownerChannel('COLE&', 'UCsmiZGkqI-c42e0nSSmNC_Q', 'ゴールデンレトリバー・大型犬', 'TpHbvQWYcTM', '大型犬たちと暮らす家族のリアルな毎日を発信。'),
  ownerChannel('古民家DIYと犬', 'UCMS3gkXjGRIo-Seiqp7twZg', '犬・多頭飼い', 'fT6gkWGb78s', '犬たちとの田舎暮らしと古民家DIYを一緒に楽しめるチャンネル。'),
  ownerChannel('リリガル Lillie and Garcello', 'UC8GYDNUBerZnldr8Sj01ngQ', 'ボーダーコリー・オーストラリアンシェパード', 'RmDp92-JbgE', '会話ボタンや遊びを通して賢い犬たちとの暮らしを発信。'),
  ownerChannel('トイプードルみみと暮らす', 'UCZ9LnaH2Fnzr9VwA854EJJg', 'トイプードル', 'nvSsCAUZP3Y', 'トイプードルのみみと飼い主の等身大の暮らしと健康記録。'),
  ownerChannel('ポメラニアンのマヨちゃんねる', 'UCWmjMEjq-hdGTNbk-q4l_ng', 'ポメラニアン', 'PMxonKvXt0s', 'ポメラニアンのマヨとの手作りごはんや日常を発信。'),
  ownerChannel('Yuzuchoco@Life', 'UCTW2Mk6PT7Xiat1tVu-AiNA', 'ミニチュアダックスフンド', 'oP8Hj_BJuEs', 'ミニチュアダックスたちの甘えん坊な日常を届けるチャンネル。'),
  ownerChannel('チワワのリタ', 'UCplqsMrwpQnU6DG-Wznrj2w', 'チワワ', 'u4lZMkYqw2Y'),
  ownerChannel('チワワのチョッピチャンネル', 'UCabRocuZZP6WGFCYUSGxFsg', 'チワワ', '3SDSo1740z8'),
  ownerChannel('チワワのライ王子', 'UC8rogLfYOJoUNs0Op4c6LIA', 'チワワ', 'qdLG680R1WE'),
  ownerChannel('うにえびとろちゃんねる', 'UC7LByuUJaowGroKhhUlIN4A', 'チワワ', 'NEmXqWYzvWQ'),
  ownerChannel('チワワのみるくchannel', 'UCx5KzVQRdskP66rBCS31fBg', 'チワワ', 'GD1gJq42Iq0'),
  ownerChannel('もみときちゃんねる', 'UC4NDi9o1jFiZ4rNzgjm0fxQ', 'トイプードル', 'rhwYARbbU-c'),
  ownerChannel('マロン（漢）', 'UCfpC7dDq-cFmaj5ILzZ-86g', 'トイプードル', 'Nvu7mnZXIEo'),
  ownerChannel('テディベアドッグのモコ', 'UCjdYEoS1D4M0tkpKr66mFRQ', 'トイプードル', 'AiLn4kyVBA0'),
  ownerChannel('トイプードル太郎', 'UClJVoVPlmwRiwosrTXlCfHA', 'トイプードル', '960o9ebGXi8'),
  ownerChannel('ポメラニアンのポメくん', 'UCyvQd36efqrCgt0-tNpsgAw', 'ポメラニアン', 'SKV7qfhQsuI'),
  ownerChannel('ダックスなのたろう', 'UC-K4kzsJy3tIS4vE2Guo-9g', 'ミニチュアダックスフンド', 'rI9A1eqWOMg'),
  ownerChannel('じゃーきー@極小ダックスと暮らす20代', 'UChfZJFay3RHR__iSJr55Eog', 'ミニチュアダックスフンド', 'Onu-xoPetU8'),
  ownerChannel('うちの子ダックス', 'UCW9OhLWMeEv2TA051mTt3tg', 'ミニチュアダックスフンド', 'lLvv0n5mZQw'),
  ownerChannel('マルチーズのポニョ', 'UCLN_OPUpLlIplOGHsRwZAhg', 'マルチーズ', '05VkzDlI9_I'),
  ownerChannel('子供と犬LIFE', 'UCnHPy0JLnLvIgjxf25gPKRA', 'マルチーズ', 'zO3CX0jNETo'),
  ownerChannel('rintaro_maltese', 'UCOTUaPd6ps0HO9K64rn-9xw', 'マルチーズ', '7MMoc1Ycd6o'),
  ownerChannel('サンバ夫婦の日常', 'UCSteGx97oYTYSV3EBkUf9Hg', 'マルチーズ', 'JqCjigHAMcs'),
  ownerChannel('マルチーズ杏ちゃん日記', 'UCYIfn4lue5-ZDTk-i3Y5HYg', 'マルチーズ', 'khRGcfxfyj0'),
  ownerChannel('こまちく家族チャンネル〜こんぶ和え〜', 'UC-SRjXfEV0kmDmzC8O3OflQ', '柴犬', 'nFTSBCHqE4U'),
  ownerChannel('和風総分家', 'UCH2DxTwinV_cBKR2NTHNVWw', '柴犬', 'ULUpz19yMsQ'),
  ownerChannel('柴犬なつと子供たち Shibainu Natsu', 'UCg5H3_XUQuwqJlrZJBm1Egw', '柴犬', 'Bak4_D7rk8E'),
  ownerChannel('ももんち', 'UCVaj9sbgsC8KSZk5Iizl6OA', '柴犬', 'GzTAi3JQ3RM'),
  ownerChannel('柴犬きなこのゆるっと暮らし', 'UCKudxImOtCC8b5PxPR8YUSg', '柴犬', 'AeKoODZwHv4'),
  ownerChannel('豆柴チャンネル おと。', 'UCEKOrPUgGe3cRgLcSGCn6lA', '豆柴', 'nE7lDkR72_s'),
  ownerChannel('豆柴きなしゃん【柴犬との暮らし】', 'UCqRS-PXcgFZ1SVXcPQnIOgA', '豆柴', 'RLIZ-_eBzoI'),
  ownerChannel('豆柴がいる暮らし / Life with Mameshiba', 'UClMi6cti7btptla0WNsSR_g', '豆柴', 'P4lAPEobvec'),
  ownerChannel('豆しば次朗の日常', 'UCsC4qCRLEY1birvuJNZioNA', '豆柴', 'l7_-StZ09mk'),
  ownerChannel('豆柴おむすび', 'UCtSxa43FFx8Votrt-06gyxg', '豆柴', 'yuqARWwMQYM'),
  ownerChannel('豆柴ふわりの無警戒日記', 'UCEorDADWp7mf2ts-iwmnzgA', '豆柴', '8oDvL9n1ZyI'),
  ownerChannel('ぼたん家の日常。', 'UCZwmjq08j8hRrjtLlj0OETw', '秋田犬', '-2Ff6DTM6OU'),
  ownerChannel('びしゃもんちゃんねる', 'UCYIa8HAuse1JR7fhiH8j0-Q', '秋田犬', 'bdU4cUAP-_o'),
  ownerChannel('甲斐犬いち', 'UCGQ9dt6yRHk0cE8mIHBw6og', '甲斐犬', 'RMaV4_F2uVo'),
  ownerChannel('甲斐犬ヤマト Kai Ken Yamato', 'UC0-7xYzM_h53j__4mV0CS6A', '甲斐犬', 'B2uDgiXtRK0'),
  ownerChannel('四国犬のケンタ一家です', 'UCxxqlZVBM3rk7MCNmFP0R-w', '四国犬', 'HuUmXeEjAos'),
  ownerChannel('日本スピッツのソラ', 'UC31U9JCcx6xg26ulvf8bH3g', '日本スピッツ', 'RyJ_mqXRFoc'),
  ownerChannel('ぽぽ家の日常', 'UCWUsBbF-YDvkMeKEKH05DRQ', '日本スピッツ', 'elvcu8hkM4o'),
  ownerChannel('フレブルぶー', 'UCax-yXuowby6zVPiocw0wAA', 'フレンチブルドッグ', 'ftDoV1PXN5w'),
  ownerChannel('まるとロド', 'UC6FvgoN1c2GuJpL1LbdKDwA', 'フレンチブルドッグ', 'rizn4P1enCU'),
  ownerChannel('トロロちゃんねる【フレブル】', 'UCVgMGCgPuG9WGx2DXsDVKXg', 'フレンチブルドッグ', 'XIsEEmC5MGk'),
  ownerChannel('フレブル7兄弟', 'UCurotFWYciEw-YFbfawzTGQ', 'フレンチブルドッグ', '_u01SfzJ79s'),
  ownerChannel('うるちゃんと共働き夫婦の日常', 'UCYvMjItfb7ulygKU7PiAKuQ', 'フレンチブルドッグ', '1c7XATkPMyk'),
  ownerChannel('パグのまろやかLife', 'UCR0PAhmag7eUtAqV4dBhYuA', 'パグ', 'cNcU50S4UPE'),
  ownerChannel('ストーカー犬 ぷぅ', 'UCHR3Qizl39Dwphc3vR6U3TA', 'パグ', 'kAMKY8QM--Y'),
  ownerChannel('ハル - パグがいる生活', 'UC7ilcbvkzltb4zoj7tbDN3w', 'パグ', '1Wk6Qhv-Ln0'),
  ownerChannel('ビションフリーゼMOFFYの暮らし', 'UCQXetN9H6yKZV6v3yJFYoiA', 'ビションフリーゼ', 'je2B_8tOPYQ'),
  ownerChannel('ビションフリーゼのトノウタコンビ', 'UCH1_q9nQ62FyQBAFROGa86g', 'ビションフリーゼ', 'g-AE3iuQlZs'),
  ownerChannel('てぃも', 'UCSLc5ZJxmHtKXl2_GPgTZDw', 'ビションフリーゼ', 'jC7hatpAJ9M'),
  ownerChannel('ルルとメル', 'UCG6xqpVLxxyOLTnRLO61qzg', 'ビションフリーゼ・キャバション', 'LR-_EmvyJYE'),
  ownerChannel('まるかーちゃんねる', 'UCTboeSQ-serfy4p5dxhNDvA', 'シーズー', 'wUiZAi7kH7U'),
  ownerChannel('キャバリアるっちゃんねる', 'UCP6WHldA6XUS00Mnhf_NghA', 'キャバリア', 'HJcduCj9Uv4'),
  ownerChannel('コロッケの飼い主', 'UCTvNN-x_l5SLRQyWMGnCHQA', 'ゴールデンレトリバー', 'a4GJtTXCjgg'),
  ownerChannel('もふもふゴールデンレトリバー', 'UC-rEfQqRbdR2tKDVU2aOLdg', 'ゴールデンレトリバー', 'khAXVT5xzrs'),
  ownerChannel('ラブラドールレトリバーのYuuuTube', 'UCuc9F_6JySnidm3n_3-4Sqw', 'ラブラドールレトリバー', 'IwZI6GvupXA'),
  ownerChannel('やんちゃラブラドール銀河の成長日記', 'UCZeUtaEdOdk5QKhC7DTpHIw', 'ラブラドールレトリバー', 'hXND3hqlH0I'),
  ownerChannel('ラブラドールのロアチャンネル', 'UCFvJmqVsOPpDMiPdwvDwhXA', 'ラブラドールレトリバー', '9xEuQv6hdS4'),
  ownerChannel('ラブラドールのぼんちゃん', 'UCRegB05lQeeFwzbIu7LjRgA', 'ラブラドールレトリバー', 'j4l-2N9nLqA'),
  ownerChannel('黒ラブと保護猫の日常', 'UC1cdFsmmU4K6yDDdT3keDCg', 'ラブラドールレトリバー', '3oWhMYYkduw'),
  ownerChannel('サモエドだいふくのモチモチ日記', 'UCJaluxt3M8YIXX_tJ2ozxLw', 'サモエド', 'RqT6R26W3UY'),
  ownerChannel('ジジとロロと保護犬ムタさん', 'UCzzsA2DHLaCDQ7ss7AxrCqw', 'シベリアンハスキー・保護犬', 'bEROxa96KjU'),
  ownerChannel('もんちゃんっていうよ。', 'UCXfOjaxQMfWCvvWJR1EeGWQ', 'シベリアンハスキー', '5_kE2nwEFGs'),
  ownerChannel('六太の日常~husky', 'UCFz24AhDgqzwGJANFc5PlxA', 'シベリアンハスキー', 'ALYx02rVu60'),
  ownerChannel('マリブ日和', 'UCWGNmuOJoiUtQn3HTrq0S2g', 'バーニーズマウンテンドッグ', 'BVIfq7tiacg'),
  ownerChannel('バーニーズマウンテンドッグきのこ', 'UCDYkn-D1yN1VYfc4F0gscSw', 'バーニーズマウンテンドッグ', 'YGO6fvAPuvg'),
  ownerChannel('ドレミの歌グレートピレニーズ', 'UCLZaB5r5MtntfXu_no1dCOQ', 'グレートピレニーズ', 'nPcF7xJtM2Q'),
  ownerChannel('グレートピレニーズのムギチャンネル', 'UC_fgiBl8fTnl2ZfPN1PhAKA', 'グレートピレニーズ', 'AmVYA-nsTWI'),
  ownerChannel('古民家暮らしのまろとぷち', 'UC_FLvtfHKppkd1cFmScEa0g', 'ボーダーコリー・チワワ', 'VOoXb2l7Ppg'),
  ownerChannel('こゆき家のゆるい日常', 'UC2cI5kV3K5e6oJj-OShpjZw', 'ボーダーコリー', 'tSC7O4MXS5E'),
  ownerChannel('アメリカ暮らしのプレッツェル', 'UCHfKfrnnXI4aoNrhYPTKpFg', 'オーストラリアンシェパード', 'E57keRted-A'),
  ownerChannel('ティビさんといっしょ Life with Aussie', 'UCHU0DBAryPmD7N3VU-_j1oA', 'オーストラリアンシェパード', '_32mWFhj6pk'),
  ownerChannel('犬さんカイルと猫さんキウイ', 'UCVNRh-kbggCqEmdB5Waaw3A', 'オーストラリアンシェパード', 'gJyzbgEAXpA'),
];

export const allChannels: ChannelSummary[] = [...channelSummaries, ...extraOwnerChannels];
export const ownerApiGroupSize = 16;
export const ownerApiGroupCount = Math.ceil(extraOwnerChannels.length / ownerApiGroupSize);

export const socialCreators: SocialCreator[] = ([
  { name: '柴犬まる', handle: '@marutaro', platform: 'Instagram', url: 'https://www.instagram.com/marutaro/', breeds: '柴犬', followers: 2000000, checkedAt: '2026.09.06', description: '柴犬まるの表情豊かな写真と、家族との日々を発信。' },
  { name: '柴犬マロたん。', handle: '@minapple', platform: 'Instagram', url: 'https://www.instagram.com/minapple/', breeds: '柴犬', followers: 509000, checkedAt: '2026.09.06', description: '被りものや季節の装いも人気な、柴犬マロたんの日常。' },
  { name: 'たまねぎ家', handle: '@tamanegi.qoo.riku', platform: 'Instagram', url: 'https://www.instagram.com/tamanegi.qoo.riku/', breeds: 'スタンダードプードル', followers: 517000, checkedAt: '2026.09.06', description: 'スタンダードプードルたちと家族の、にぎやかで温かな暮らし。' },
  { name: 'かぼすママ', handle: '@kabosumama', platform: 'Instagram', url: 'https://www.instagram.com/kabosumama/', breeds: '柴犬・保護犬', followers: 498000, checkedAt: '2026.09.06', description: 'かぼすちゃんから続く、保護犬・保護猫家族の記録。' },
  { name: '柴犬チャーミー', handle: '@shiba_charmy', platform: 'Instagram', url: 'https://www.instagram.com/shiba_charmy/', breeds: '柴犬', followers: 437000, checkedAt: '2026.09.06', description: '笑顔とやさしい表情が魅力の柴犬チャーミー。' },
  { name: '柴犬だいふく', handle: '@daifuku_channel', platform: 'Instagram', url: 'https://www.instagram.com/daifuku_channel/', breeds: '柴犬', followers: 332000, checkedAt: '2026.09.06', description: '大きな福を招くような、だいふくの愛らしい毎日。' },
  { name: '柴犬岳と寅次朗', handle: '@shibainu.gaku', platform: 'Instagram', url: 'https://www.instagram.com/shibainu.gaku/', breeds: '柴犬', followers: 200000, checkedAt: '2026.09.06', description: '柴犬の岳と猫の寅次朗、仲良し兄弟の暮らし。' },
  { name: 'MOGU & SUU', handle: '@the_shiba_mogu', platform: 'Instagram', url: 'https://www.instagram.com/the_shiba_mogu/', breeds: '柴犬', followers: 191000, checkedAt: '2026.09.06', description: '柴犬もぐと家族の、ほのぼのした写真と動画。' },
  { name: '日向・蒼生・空', handle: '@hinaosora', platform: 'Instagram', url: 'https://www.instagram.com/hinaosora/', breeds: '柴犬', followers: 190000, checkedAt: '2026.09.06', description: '黒柴と赤柴、個性豊かな柴犬3兄弟の日常。' },
  { name: 'にこちゃん＆たまちゃん', handle: '@nikochan.mame48', platform: 'Instagram', url: 'https://www.instagram.com/nikochan.mame48/', breeds: '豆柴', followers: 175000, checkedAt: '2026.09.06', description: 'にこたまコンビの、表情いっぱいな豆柴暮らし。' },
  { name: 'アーニー', handle: '@ernie_pooh_', platform: 'Instagram', url: 'https://www.instagram.com/ernie_pooh_/', breeds: 'トイプードル', followers: 116000, checkedAt: '2026.09.06', description: 'ぬいぐるみのようなトイプードル、アーニーの記録。' },
  { name: 'まるぱぴ ゴマ', handle: '@marupgoma_c', platform: 'Instagram', url: 'https://www.instagram.com/marupgoma_c/', breeds: 'マルチーズ・パピヨンMIX', followers: 92000, checkedAt: '2026.09.06', description: '大きな耳と白い毛並みが印象的なゴマの日常。' },
  { name: 'タカリンコと柴犬忠太', handle: '@kowakusuritagoura89', platform: 'Instagram', url: 'https://www.instagram.com/kowakusuritagoura89/', breeds: '柴犬', followers: 227000, checkedAt: '2026.09.06', description: '柴犬忠太と飼い主さんの、自然に囲まれた暮らし。' },
  { name: 'SHIBA HANA', handle: '@mirimogu', platform: 'Instagram', url: 'https://www.instagram.com/mirimogu/', breeds: '柴犬', followers: 183000, checkedAt: '2026.09.06', description: '東京で暮らす柴犬はなの、癒やしの寝姿と毎日。' },
  { name: 'uri home', handle: '@uri__home', platform: 'Instagram', url: 'https://www.instagram.com/uri__home/', breeds: '犬・多頭飼い', followers: 177000, checkedAt: '2026.09.06', description: '3匹の犬と家族が快適に暮らす家づくりの記録。' },
  { name: 'asasaと保護犬たち', handle: '@asasa0509', platform: 'Instagram', url: 'https://www.instagram.com/asasa0509/', breeds: '保護犬・多頭飼い', followers: 127000, checkedAt: '2026.09.06', description: '保護犬しずく・なぎと家族の暮らしとインテリア。' },
  { name: '柴雄＆茶太郎', handle: '@shibaochatarou', platform: 'Instagram', url: 'https://www.instagram.com/shibaochatarou/', breeds: '柴犬・チワワ', followers: 96992, checkedAt: '2026.08.25', description: '柴犬とチワワ、それぞれの個性が光る多頭飼いの日常。' },
  { name: 'ななちゃん', handle: '@nana_chan7723', platform: 'Instagram', url: 'https://www.instagram.com/nana_chan7723/', breeds: 'シーズー', followers: 59000, checkedAt: '2026.09.06', description: '南国で暮らすシーズー、ななちゃんのお散歩と成長記録。' },
  { name: 'まみ｜わんこ×収納', handle: '@ma.home___', platform: 'Instagram', url: 'https://www.instagram.com/ma.home___/', breeds: '犬', followers: 49000, checkedAt: '2026.09.06', description: '犬と人が心地よく暮らす収納や動線のアイデア。' },
  { name: '柴犬のモモ', handle: '@shi_ba_i_nu_momo', platform: 'Instagram', url: 'https://www.instagram.com/shi_ba_i_nu_momo/', breeds: '柴犬', followers: 39000, checkedAt: '2026.09.06', description: '東京で暮らす柴犬モモのお散歩と日常。' },
  { name: '分家のおかわり', handle: '@komakoma2025', platform: 'TikTok', url: 'https://www.tiktok.com/@komakoma2025', breeds: '柴犬', followers: 290000, checkedAt: '2026.09.04', description: '柴犬こまちゃんと飼い主さんのテンポのよい日常Vlog。' },
  { name: 'ペコピノ＆さっちゃん', handle: '@sachanpug', platform: 'TikTok', url: 'https://www.tiktok.com/@sachanpug', breeds: 'パグ', followers: 279900, checkedAt: '2026.08.27', description: 'パグたちとの旅行や遊びを、楽しいVlogで発信。' },
  { name: 'コーギーのバン君', handle: '@van02030', platform: 'TikTok', url: 'https://www.tiktok.com/@van02030', breeds: 'ウェルシュ・コーギー', followers: 13600, checkedAt: '2026.09.03', description: '7歳のコーギー、バン君ののんびりした日常。' },
  { name: 'まりーちゃん', handle: '@marry320111', platform: 'TikTok', url: 'https://www.tiktok.com/@marry320111', breeds: 'ゴールデンレトリバー', followers: 10700, checkedAt: '2026.09.04', description: '自然や水辺へ出かけるゴールデンレトリバーとの暮らし。' },
  { name: 'チワワのちゃむこて', handle: '@chumkote', platform: 'TikTok', url: 'https://www.tiktok.com/@chumkote', breeds: 'チワワ', followers: 6152, checkedAt: '2026.08.26', description: 'タヌキのように愛らしいチワワ2匹の成長記録。' },
  { name: 'チワワのルーク', handle: '@luke_0915_skywalker', platform: 'TikTok', url: 'https://www.tiktok.com/@luke_0915_skywalker', breeds: 'チワワ', followers: 4513, checkedAt: '2026.08.26', description: 'ロングコートチワワ、ルークの表情豊かな毎日。' },
  { name: 'サム＆ネオ', handle: '@samgoldenretriever', platform: 'TikTok', url: 'https://www.tiktok.com/@samgoldenretriever', breeds: 'ゴールデンレトリバー・バーニーズ', followers: 4181, checkedAt: '2026.08.12', description: '大型犬2匹のお散歩や雪遊びなど、仲良しな日々。' },
  { name: 'めぐちゃん', handle: '@meguchan0208', platform: 'TikTok', url: 'https://www.tiktok.com/@meguchan0208', breeds: 'ビーグル', followers: 1740, checkedAt: '2026.08.26', description: 'シニアのビーグルと旅行やお散歩を楽しむ記録。' },
  { name: 'Bamu & Belle', handle: '@bamu_belle', platform: 'TikTok', url: 'https://www.tiktok.com/@bamu_belle', breeds: 'ゴールデンレトリバー・MIX', followers: 1419, checkedAt: '2026.08.12', description: 'ゴールデンレトリバーとMIX犬、家族とのやさしい日常。' },
  { name: 'あおい', handle: '@aoi_sagawa', platform: 'TikTok', url: 'https://www.tiktok.com/@aoi_sagawa', breeds: 'ウェルシュ・コーギー', followers: 1404, checkedAt: '2026.07.29', description: 'コーギーあおいの成長と、家族との暮らし。' },
  { name: 'はなちゃん', handle: '@hanachann07', platform: 'TikTok', url: 'https://www.tiktok.com/@hanachann07', breeds: '豆柴', followers: 1320, checkedAt: '2026.08.12', description: '豆柴はなちゃんの、くつろぎ時間や日常のひとこま。' },
  { name: 'のあとりお', handle: '@ri_tan_0405', platform: 'TikTok', url: 'https://www.tiktok.com/@ri_tan_0405', breeds: 'チワワ', followers: 1170, checkedAt: '2026.08.26', description: 'チワワ兄弟の成長と、にぎやかな多頭飼い生活。' },
  { name: 'Jiffpom', handle: '@jiffpom', platform: 'Instagram', url: 'https://www.instagram.com/jiffpom/', breeds: 'ポメラニアン', followers: 8500000, checkedAt: '2026.09.06', description: '世界中で知られるポメラニアン。ぬいぐるみのような姿と短い動画が人気。' },
  { name: 'Mocha', handle: '@mochapom', platform: 'Instagram', url: 'https://www.instagram.com/mochapom/', breeds: 'ポメラニアン', followers: 690500, checkedAt: '2026.09.06', description: '笑顔と豊かな毛並みが魅力のポメラニアン、Mochaの日常。' },
  { name: 'Mamesuke & Chibisuke', handle: '@mamesuke_chibisuke', platform: 'Instagram', url: 'https://www.instagram.com/mamesuke_chibisuke/', breeds: 'ポメラニアン', followers: 83800, checkedAt: '2026.09.06', description: '日本で暮らすポメラニアンコンビの、仲良くにぎやかな毎日。' },
  { name: 'Pixxel the Pom', handle: '@pixxel_the_pom', platform: 'Instagram', url: 'https://www.instagram.com/pixxel_the_pom/', breeds: 'ポメラニアン', followers: 85800, checkedAt: '2026.09.06', description: 'ふわふわな毛並みと表情豊かな動画が楽しいポメラニアン。' },
  { name: 'Marry・Seri・Lily・Uri', handle: '@marry_seri_lily_uri', platform: 'Instagram', url: 'https://www.instagram.com/marry_seri_lily_uri/', breeds: 'ポメラニアン', followers: 16900, checkedAt: '2026.09.06', description: 'ポメラニアンたちとの多頭飼い生活を、日本から発信。' },
  { name: 'Ao & Mono', handle: '@ao.mono', platform: 'Instagram', url: 'https://www.instagram.com/ao.mono/', breeds: 'チワワ', followers: 295000, checkedAt: '2026.09.06', description: '小さなチワワたちの愛らしい表情と、家族との日常。' },
  { name: 'Licca & Tarao', handle: '@licca_tarao_0311', platform: 'Instagram', url: 'https://www.instagram.com/licca_tarao_0311/', breeds: 'チワワ', followers: 70000, checkedAt: '2026.09.06', description: '日本で暮らすチワワコンビのコーデや生活記録。' },
  { name: 'Mine & Ten', handle: '@mine_ten_', platform: 'Instagram', url: 'https://www.instagram.com/mine_ten_/', breeds: 'チワワ', followers: 13500, checkedAt: '2026.09.06', description: '小さなチワワたちの成長と、やさしい家族時間。' },
  { name: 'Walter the Chi', handle: '@walterthechi', platform: 'Instagram', url: 'https://www.instagram.com/walterthechi/', breeds: 'チワワ', followers: 116300, checkedAt: '2026.09.06', description: '大きな瞳と個性的な表情で人気のチワワ、Walter。' },
  { name: 'Yeti & Dobby', handle: '@yetidobby', platform: 'Instagram', url: 'https://www.instagram.com/yetidobby/', breeds: 'チワワ', followers: 79000, checkedAt: '2026.09.06', description: 'チワワコンビのファッションとコミカルな日常。' },
  { name: 'Doug the Pug', handle: '@itsdougthepug', platform: 'Instagram', url: 'https://www.instagram.com/itsdougthepug/', breeds: 'パグ', followers: 3000000, checkedAt: '2026.09.06', description: '世界的に人気のパグ。衣装や映画のような短編コンテンツを発信。' },
  { name: 'Puggy Smalls', handle: '@thepuggysmalls', platform: 'Instagram', url: 'https://www.instagram.com/thepuggysmalls/', breeds: 'パグ', followers: 261000, checkedAt: '2026.09.06', description: 'イギリス発、ユーモアあふれるパグの暮らし。' },
  { name: 'Kimchi the Pug', handle: '@kimchi.the.pug', platform: 'Instagram', url: 'https://www.instagram.com/kimchi.the.pug/', breeds: 'パグ', followers: 111600, checkedAt: '2026.09.06', description: '東京で暮らすパグ、Kimchiのかわいい表情とお出かけ。' },
  { name: 'Pug Rides Shotgun', handle: '@pugridesshotgun', platform: 'Instagram', url: 'https://www.instagram.com/pugridesshotgun/', breeds: 'パグ', followers: 160900, checkedAt: '2026.09.06', description: 'ドライブや冒険を楽しむパグのアクティブな記録。' },
  { name: 'Tubby Puggy', handle: '@tubby_puggy', platform: 'Instagram', url: 'https://www.instagram.com/tubby_puggy/', breeds: 'パグ', followers: 52700, checkedAt: '2026.09.06', description: '丸いフォルムとチャーミングな表情が人気のパグ。' },
  { name: 'Yuna Bugs', handle: '@yunabugs', platform: 'Instagram', url: 'https://www.instagram.com/yunabugs/', breeds: 'ミニチュアダックスフンド', followers: 1700000, checkedAt: '2026.09.06', description: '小さな体で大きな存在感を放つダックスフンドの日常。' },
  { name: 'Crusoe the Dachshund', handle: '@crusoe_dachshund', platform: 'Instagram', url: 'https://www.instagram.com/crusoe_dachshund/', breeds: 'ミニチュアダックスフンド', followers: 871100, checkedAt: '2026.09.06', description: '衣装と物語仕立ての動画で世界的に人気のダックスフンド。' },
  { name: 'Loulou', handle: '@loulouminidachshund', platform: 'Instagram', url: 'https://www.instagram.com/loulouminidachshund/', breeds: 'ミニチュアダックスフンド', followers: 586200, checkedAt: '2026.09.06', description: '穏やかな日々と家族とのふれあいが人気のミニチュアダックス。' },
  { name: 'Calme', handle: '@calme.di', platform: 'Instagram', url: 'https://www.instagram.com/calme.di/', breeds: 'ミニチュアダックスフンド', followers: 290100, checkedAt: '2026.09.06', description: '日本発、洗練された写真と動画で見せるダックスとの暮らし。' },
  { name: 'Olive & Freddie', handle: '@oliveyoufreddie', platform: 'Instagram', url: 'https://www.instagram.com/oliveyoufreddie/', breeds: 'ミニチュアダックスフンド', followers: 159900, checkedAt: '2026.09.06', description: 'ダックスコンビの息の合った日常とコミカルな動画。' },
  { name: 'Pippa the Sausage', handle: '@pippa_thesausage', platform: 'Instagram', url: 'https://www.instagram.com/pippa_thesausage/', breeds: 'ミニチュアダックスフンド', followers: 125800, checkedAt: '2026.09.06', description: '小さな冒険と日常を届ける、表情豊かなダックスフンド。' },
  { name: 'LA Corgi', handle: '@lacorgi', platform: 'Instagram', url: 'https://www.instagram.com/lacorgi/', breeds: 'ウェルシュ・コーギー', followers: 582500, checkedAt: '2026.09.06', description: 'ロサンゼルスで暮らすコーギーの、明るくポップな毎日。' },
  { name: 'Tofu the Corgi', handle: '@tofu_corgi', platform: 'Instagram', url: 'https://www.instagram.com/tofu_corgi/', breeds: 'ウェルシュ・コーギー', followers: 324200, checkedAt: '2026.09.06', description: 'まん丸な笑顔と短い足がかわいいコーギー、Tofu。' },
  { name: 'The Corgi Story', handle: '@thecorgistory', platform: 'Instagram', url: 'https://www.instagram.com/thecorgistory/', breeds: 'ウェルシュ・コーギー', followers: 299500, checkedAt: '2026.09.06', description: 'コーギーとの暮らしを物語のように楽しめる人気アカウント。' },
  { name: 'Ruby the Corgi', handle: '@ruby_thecorgi', platform: 'Instagram', url: 'https://www.instagram.com/ruby_thecorgi/', breeds: 'ウェルシュ・コーギー', followers: 229300, checkedAt: '2026.09.06', description: '元気な遊びとユーモラスな表情が魅力のコーギー。' },
  { name: 'Super Corgi Jojo', handle: '@supercorgi_jojo', platform: 'Instagram', url: 'https://www.instagram.com/supercorgi_jojo/', breeds: 'ウェルシュ・コーギー', followers: 140500, checkedAt: '2026.09.06', description: '海やアウトドアを楽しむアクティブなコーギー。' },
  { name: 'Nala', handle: '@adventuringwithnala', platform: 'Instagram', url: 'https://www.instagram.com/adventuringwithnala/', breeds: 'ゴールデンレトリバー', followers: 4700000, checkedAt: '2026.09.06', description: '飼い主さんとの冒険と深い絆を届けるゴールデンレトリバー。' },
  { name: 'Tucker Budzyn', handle: '@tuckerbudzyn', platform: 'Instagram', url: 'https://www.instagram.com/tuckerbudzyn/', breeds: 'ゴールデンレトリバー', followers: 4400000, checkedAt: '2026.09.06', description: '表情とセリフを組み合わせたコメディ動画で人気のゴールデン。' },
  { name: 'Drake the Pupstar', handle: '@drakethepupstar', platform: 'Instagram', url: 'https://www.instagram.com/drakethepupstar/', breeds: 'ゴールデンレトリバー', followers: 1100000, checkedAt: '2026.09.06', description: 'やんちゃでスター性たっぷりなゴールデンレトリバー。' },
  { name: 'Watson & Kiko', handle: '@wat.ki', platform: 'Instagram', url: 'https://www.instagram.com/wat.ki/', breeds: 'ゴールデンレトリバー', followers: 1000000, checkedAt: '2026.09.06', description: 'ゴールデンたちの友情と家族との温かな時間を発信。' },
  { name: 'Riley', handle: '@hdbrosriley', platform: 'Instagram', url: 'https://www.instagram.com/hdbrosriley/', breeds: 'ゴールデンレトリバー', followers: 639900, checkedAt: '2026.09.06', description: '豊かな表情と家族との楽しい日常が人気のゴールデン。' },
  { name: 'Levi the Husky Rescue', handle: '@levithehuskyrescue', platform: 'Instagram', url: 'https://www.instagram.com/levithehuskyrescue/', breeds: 'シベリアンハスキー・保護犬', followers: 700700, checkedAt: '2026.09.06', description: '保護犬Leviの成長と、家族との新しい暮らし。' },
  { name: 'Moon the Husky', handle: '@thehuskymoon', platform: 'Instagram', url: 'https://www.instagram.com/thehuskymoon/', breeds: 'シベリアンハスキー', followers: 402900, checkedAt: '2026.09.06', description: 'おしゃべりな反応と豊かな表情が魅力のハスキー。' },
  { name: 'Maya Husky', handle: '@_mayahuskyy', platform: 'Instagram', url: 'https://www.instagram.com/_mayahuskyy/', breeds: 'シベリアンハスキー', followers: 385400, checkedAt: '2026.09.06', description: '雪景色にも映える美しいハスキーの日常と冒険。' },
  { name: 'Sassy Huskies', handle: '@sassyhuskies', platform: 'Instagram', url: 'https://www.instagram.com/sassyhuskies/', breeds: 'シベリアンハスキー', followers: 296700, checkedAt: '2026.09.06', description: 'にぎやかな多頭飼いとハスキーらしいリアクション。' },
  { name: 'Gone to the Snow Dogs', handle: '@gonetothesnowdogs', platform: 'Instagram', url: 'https://www.instagram.com/gonetothesnowdogs/', breeds: 'シベリアンハスキー', followers: 236600, checkedAt: '2026.09.06', description: '雪遊びや旅を楽しむハスキーたちのアウトドア記録。' },
  { name: 'Millie the Lab', handle: '@the_lab_millie', platform: 'Instagram', url: 'https://www.instagram.com/the_lab_millie/', breeds: 'ラブラドールレトリバー', followers: 182500, checkedAt: '2026.09.06', description: '遊び好きなラブラドール、Millieの明るい暮らし。' },
  { name: 'Jax the Lab', handle: '@imjaxthelab', platform: 'Instagram', url: 'https://www.instagram.com/imjaxthelab/', breeds: 'ラブラドールレトリバー', followers: 141900, checkedAt: '2026.09.06', description: 'ラブラドールらしい元気な遊びと家族への愛情を発信。' },
  { name: 'Jenny the Lab', handle: '@jenny.the.lab', platform: 'Instagram', url: 'https://www.instagram.com/jenny.the.lab/', breeds: 'ラブラドールレトリバー', followers: 104800, checkedAt: '2026.09.06', description: '家族とのお出かけや日常を楽しむラブラドール。' },
  { name: 'Bojack the Lab', handle: '@bojackthelab', platform: 'Instagram', url: 'https://www.instagram.com/bojackthelab/', breeds: 'ラブラドールレトリバー', followers: 102300, checkedAt: '2026.09.06', description: '表情豊かなラブラドールの遊びとトレーニング。' },
  { name: 'Dogswiss', handle: '@dogswiss', platform: 'Instagram', url: 'https://www.instagram.com/dogswiss/', breeds: 'ラブラドールレトリバー', followers: 67900, checkedAt: '2026.09.06', description: 'スイスの自然を楽しむラブラドールとの美しい暮らし。' },
  { name: 'Maya Polar Bear', handle: '@mayapolarbear', platform: 'Instagram', url: 'https://www.instagram.com/mayapolarbear/', breeds: 'サモエド', followers: 1600000, checkedAt: '2026.09.06', description: '白くふわふわな姿と大きな笑顔で世界的人気のサモエド。' },
  { name: 'Coconut Rice Bear', handle: '@coconutricebear', platform: 'Instagram', url: 'https://www.instagram.com/coconutricebear/', breeds: 'サモエド', followers: 854000, checkedAt: '2026.09.06', description: '真っ白な毛並みと愛嬌たっぷりの表情が人気のサモエド。' },
  { name: 'りんたろう＆かのん', handle: '@suihanki.dog', platform: 'Instagram', url: 'https://www.instagram.com/suihanki.dog/', breeds: 'サモエド', followers: 760000, checkedAt: '2026.09.06', description: '「炊飯器から犬」の愛称でも親しまれる、日本のサモエド兄妹。' },
  { name: 'Nube the Samoyed', handle: '@nubethesamoyed', platform: 'Instagram', url: 'https://www.instagram.com/nubethesamoyed/', breeds: 'サモエド', followers: 167100, checkedAt: '2026.09.06', description: '雲のような毛並みと笑顔が魅力のサモエド。' },
  { name: 'Vito Corleone', handle: '@vitothedogfather', platform: 'Instagram', url: 'https://www.instagram.com/vitothedogfather/', breeds: 'ゴールデンドゥードル', followers: 412500, checkedAt: '2026.09.06', description: '人間のような仕草と家族との掛け合いが人気のドゥードル。' },
  { name: 'Mobi', handle: '@toypoodlemobi', platform: 'Instagram', url: 'https://www.instagram.com/toypoodlemobi/', breeds: 'トイプードル', followers: 171400, checkedAt: '2026.09.06', description: 'オランダで暮らす、明るく好奇心いっぱいのトイプードル。' },
  { name: 'Milo', handle: '@mrpoodlemilo', platform: 'Instagram', url: 'https://www.instagram.com/mrpoodlemilo/', breeds: 'トイプードル', followers: 164900, checkedAt: '2026.09.06', description: '毎日を笑顔にするコミカルなトイプードル、Milo。' },
  { name: 'Romeo', handle: '@poodletoyromeo', platform: 'Instagram', url: 'https://www.instagram.com/poodletoyromeo/', breeds: 'トイプードル', followers: 142400, checkedAt: '2026.09.06', description: '家族とのにぎやかな日常を届けるトイプードル。' },
  { name: 'Le Parisien Poodle', handle: '@leparisienpoodle', platform: 'Instagram', url: 'https://www.instagram.com/leparisienpoodle/', breeds: 'トイプードル', followers: 142400, checkedAt: '2026.09.06', description: 'パリで暮らす小さなトイプードルの、おしゃれな毎日。' },
  { name: 'Lilo', handle: '@toylilo', platform: 'Instagram', url: 'https://www.instagram.com/toylilo/', breeds: 'トイプードル', followers: 69400, checkedAt: '2026.09.06', description: 'ピンクとファッションが似合う、個性派トイプードル。' },
  { name: 'Apollo the Frenchie', handle: '@somefrenchienamedapollo', platform: 'Instagram', url: 'https://www.instagram.com/somefrenchienamedapollo/', breeds: 'フレンチブルドッグ', followers: 402800, checkedAt: '2026.09.06', description: 'フレブルとドッグパパの日常を、テンポよいコメディで発信。' },
  { name: 'Winston the Frenchie', handle: '@winstonthefrenchiee_', platform: 'Instagram', url: 'https://www.instagram.com/winstonthefrenchiee_/', breeds: 'フレンチブルドッグ', followers: 279100, checkedAt: '2026.09.06', description: '大きな耳と愛嬌ある表情が魅力のフレンチブルドッグ。' },
  { name: 'TJ the Frenchie', handle: '@tj.the.frenchie', platform: 'Instagram', url: 'https://www.instagram.com/tj.the.frenchie/', breeds: 'フレンチブルドッグ', followers: 266100, checkedAt: '2026.09.06', description: '車中泊や旅、犬と行ける場所を紹介する冒険派フレブル。' },
  { name: 'Dad and His Frenchies', handle: '@dadandhisfrenchies', platform: 'Instagram', url: 'https://www.instagram.com/dadandhisfrenchies/', breeds: 'フレンチブルドッグ', followers: 79500, checkedAt: '2026.09.06', description: '複数のフレンチブルドッグと暮らす、にぎやかな家族の日常。' },
  { name: 'Daily Dougie', handle: '@dailydougie', platform: 'Instagram', url: 'https://www.instagram.com/dailydougie/', breeds: 'シーズー', followers: 465100, checkedAt: '2026.09.06', description: 'もふもふなシーズーDougieの、くすっと笑える日常。' },
  { name: 'Roku', handle: '@its.me.roku.the.shihtzu', platform: 'Instagram', url: 'https://www.instagram.com/its.me.roku.the.shihtzu/', breeds: 'シーズー', followers: 143600, checkedAt: '2026.09.06', description: '旅・健康・暮らしを発信するセラピードッグのシーズー。' },
  { name: 'Mason the Shih Tzu', handle: '@masontheshihtzu1', platform: 'Instagram', url: 'https://www.instagram.com/masontheshihtzu1/', breeds: 'シーズー', followers: 113900, checkedAt: '2026.09.06', description: '小さな体と大きな個性で人気のニューヨークのシーズー。' },
  { name: 'いくら', handle: '@i_am_ikura', platform: 'Instagram', url: 'https://www.instagram.com/i_am_ikura/', breeds: 'シーズー', followers: 25500, checkedAt: '2026.09.06', description: '日本で暮らすシーズー、いくらの成長と手作り服の記録。' },
  { name: 'Bunny', handle: '@whataboutbunny', platform: 'TikTok', url: 'https://www.tiktok.com/@whataboutbunny', breeds: 'シーパドゥードル', followers: 8500000, checkedAt: '2026.09', description: '会話ボタンを使って意思を伝える犬Bunnyの学びと日常。' },
  { name: 'Gudan the Husky', handle: '@gudan_ohusky', platform: 'TikTok', url: 'https://www.tiktok.com/@gudan_ohusky', breeds: 'シベリアンハスキー', followers: 8500000, checkedAt: '2026.09', description: '表情豊かでおしゃべりなハスキーのショート動画。' },
  { name: 'Nala', handle: '@adventuringwithnala', platform: 'TikTok', url: 'https://www.tiktok.com/@adventuringwithnala', breeds: 'ゴールデンレトリバー', followers: 7800000, checkedAt: '2026.09', description: '飼い主さんとの冒険と絆が心温まるゴールデン。' },
  { name: 'Brodie That Dood', handle: '@brodiethatdood', platform: 'TikTok', url: 'https://www.tiktok.com/@brodiethatdood', breeds: 'ゴールデンドゥードル', followers: 7500000, checkedAt: '2026.09', description: '大きくふわふわなBrodieの旅と楽しい家族動画。' },
  { name: 'Hammy & Olivia', handle: '@hammyandolivia', platform: 'TikTok', url: 'https://www.tiktok.com/@hammyandolivia', breeds: 'ウェルシュ・コーギー', followers: 7100000, checkedAt: '2026.09', description: 'コーギーたちを主人公にしたテンポのよいコメディ。' },
  { name: 'Meeka the Husky', handle: '@meekathehusky', platform: 'TikTok', url: 'https://www.tiktok.com/@meekathehusky', breeds: 'シベリアンハスキー', followers: 6100000, checkedAt: '2026.09', description: 'おしゃべりな反応と飼い主さんとの掛け合いが人気。' },
  { name: 'Doug the Pug', handle: '@dougthepug', platform: 'TikTok', url: 'https://www.tiktok.com/@dougthepug', breeds: 'パグ', followers: 6000000, checkedAt: '2026.09', description: '衣装や小道具を使った世界的人気のパグ動画。' },
  { name: 'Maya Polar Bear', handle: '@mayapolarbear', platform: 'TikTok', url: 'https://www.tiktok.com/@mayapolarbear', breeds: 'サモエド', followers: 5400000, checkedAt: '2026.09', description: 'ふわふわなサモエドMayaの、笑顔とコミカルな日常。' },
  { name: 'Skaya', handle: '@skaya.siberian', platform: 'TikTok', url: 'https://www.tiktok.com/@skaya.siberian', breeds: 'シベリアンハスキー', followers: 4800000, checkedAt: '2026.09', description: 'ツッコミたくなる反応が楽しいシベリアンハスキー。' },
  { name: 'Dog and His Boomer', handle: '@dog_and_his_boomer', platform: 'TikTok', url: 'https://www.tiktok.com/@dog_and_his_boomer', breeds: 'ジャーマンシェパード・チワワ', followers: 4700000, checkedAt: '2026.09', description: '大きなシェパードと小さなチワワの対照的なコンビ。' },
  { name: 'Mad Max Fluffy Road', handle: '@madmax_fluffyroad', platform: 'TikTok', url: 'https://www.tiktok.com/@madmax_fluffyroad', breeds: 'ウェルシュ・コーギー', followers: 4200000, checkedAt: '2026.09', description: '元気なコーギーの遊びと表情を短く楽しく発信。' },
  { name: 'Tatum', handle: '@hi.this.is.tatum', platform: 'TikTok', url: 'https://www.tiktok.com/@hi.this.is.tatum', breeds: '保護犬・ピットブルMIX', followers: 3700000, checkedAt: '2026.09', description: '保護犬Tatumと家族の、笑いと愛情に満ちた毎日。' },
  { name: 'Coco the Maltese', handle: '@cocothemaltesedog', platform: 'TikTok', url: 'https://www.tiktok.com/@cocothemaltesedog', breeds: 'マルチーズ', followers: 2600000, checkedAt: '2026.09', description: '白く小さなマルチーズCocoのキュートなショート動画。' },
  { name: 'Crusoe the Dachshund', handle: '@crusoe_dachshund', platform: 'TikTok', url: 'https://www.tiktok.com/@crusoe_dachshund', breeds: 'ミニチュアダックスフンド', followers: 2200000, checkedAt: '2026.09', description: '衣装とセットを使った物語動画で人気のダックスフンド。' },
  { name: 'りんたろう＆かのん', handle: '@samoyed_rintaro.kanon', platform: 'TikTok', url: 'https://www.tiktok.com/@samoyed_rintaro.kanon', breeds: 'サモエド', followers: 580000, checkedAt: '2026.09.06', description: '日本のサモエド兄妹。ふわふわな暮らしをショート動画で発信。' },
  { name: 'きなこ', handle: '@pomekinako', platform: 'TikTok', url: 'https://www.tiktok.com/@pomekinako', breeds: 'ポメラニアン', followers: 70300, checkedAt: '2026.06.22', description: '日本のポメラニアン、きなこのかわいい仕草と日常。' },
  { name: 'Luna the Golden', handle: '@goldenretriever_luna', platform: 'TikTok', url: 'https://www.tiktok.com/@goldenretriever_luna', breeds: 'ゴールデンレトリバー', followers: 649800, checkedAt: '2026.09', description: 'ゴールデンレトリバーLunaの遊びと家族との時間。' },
  { name: 'Chelle & Lexi', handle: '@chelleandlexihusky', platform: 'TikTok', url: 'https://www.tiktok.com/@chelleandlexihusky', breeds: 'シベリアンハスキー', followers: 617400, checkedAt: '2026.09', description: 'ハスキーとのにぎやかな暮らしと声の掛け合い。' },
  { name: 'Sam & Beagle', handle: '@sammcgraww', platform: 'TikTok', url: 'https://www.tiktok.com/@sammcgraww', breeds: 'ビーグル', followers: 610600, checkedAt: '2026.09', description: 'ビーグルとの暮らしをコミカルな短編で発信。' },
  { name: 'Lychee', handle: '@lycheeisachihuahua', platform: 'TikTok', url: 'https://www.tiktok.com/@lycheeisachihuahua', breeds: 'チワワ', followers: 571900, checkedAt: '2026.09', description: '小さなチワワLycheeの大きな個性とリアクション。' },
  { name: 'Elton', handle: '@eltonthegoldenretriever', platform: 'TikTok', url: 'https://www.tiktok.com/@eltonthegoldenretriever', breeds: 'ゴールデンレトリバー', followers: 550300, checkedAt: '2026.09', description: '遊び好きなゴールデンEltonの明るいショート動画。' },
  { name: 'Ollie Pop', handle: '@olliepopmaltipoo', platform: 'TikTok', url: 'https://www.tiktok.com/@olliepopmaltipoo', breeds: 'マルチプー', followers: 504300, checkedAt: '2026.09', description: 'マルチプーOllieの愛らしい表情と家族との暮らし。' },
  { name: 'Kevin the Berner', handle: '@itskevintheberner', platform: 'TikTok', url: 'https://www.tiktok.com/@itskevintheberner', breeds: 'バーニーズマウンテンドッグ', followers: 226900, checkedAt: '2026.09', description: '大きな体で甘えるバーニーズの、ほのぼのした日常。' },
  { name: 'Ryder the Dalmatian', handle: '@ryderthedal', platform: 'TikTok', url: 'https://www.tiktok.com/@ryderthedal', breeds: 'ダルメシアン', followers: 198400, checkedAt: '2026.09', description: 'スポーティーなダルメシアンの遊びとトレーニング。' },
  { name: 'Jade', handle: '@jademinipinscher', platform: 'TikTok', url: 'https://www.tiktok.com/@jademinipinscher', breeds: 'ミニチュアピンシャー', followers: 160900, checkedAt: '2026.09', description: '小さく俊敏なミニチュアピンシャーの元気な毎日。' },
  { name: 'Penguin', handle: '@penguinthechihuahua', platform: 'TikTok', url: 'https://www.tiktok.com/@penguinthechihuahua', breeds: 'チワワ', followers: 129300, checkedAt: '2026.09', description: '個性的なチワワPenguinの表情豊かなショート動画。' },
  { name: 'Moose & Poppy', handle: '@mooseandpoppy', platform: 'TikTok', url: 'https://www.tiktok.com/@mooseandpoppy', breeds: 'ラブラドールレトリバー', followers: 108900, checkedAt: '2026.09', description: 'ラブラドールコンビの遊びと家族との日常。' },
  { name: 'Cosito', handle: '@soyuncosito', platform: 'TikTok', url: 'https://www.tiktok.com/@soyuncosito', breeds: 'ヨークシャーテリア', followers: 105300, checkedAt: '2026.09', description: 'ヨークシャーテリアの小さな冒険とかわいいリアクション。' },
  { name: 'Goody the Golden', handle: '@goodythegolden', platform: 'TikTok', url: 'https://www.tiktok.com/@goodythegolden', breeds: 'ゴールデンレトリバー', followers: 78900, checkedAt: '2026.09', description: '人懐っこいゴールデンGoodyの楽しい日常。' },
  { name: 'Our Golden Bros', handle: '@ourgoldenbros', platform: 'TikTok', url: 'https://www.tiktok.com/@ourgoldenbros', breeds: 'ゴールデンレトリバー', followers: 78600, checkedAt: '2026.09', description: 'ゴールデン兄弟の仲良しな遊びと成長記録。' },
] satisfies SocialCreator[]).filter((creator) => creator.followers >= 1000);
