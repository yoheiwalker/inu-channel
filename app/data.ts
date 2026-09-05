export type Video = {
  id: string; rank: 1 | 2 | 3; title: string; channel: string; channelUrl: string;
  category: string; breed: string; age: string; dogAge?: string; duration: string;
  published: string; views: string; viewCount: number; description: string;
  points: string[]; tags: string[]; instagram?: string; instagramHandle?: string;
  source?: string; note?: string;
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

const qoo = { channel: 'くぅのドッグフード研究室', channelUrl: 'https://www.youtube.com/@qoo-dogfood', category: '獣医師' };
const shippolab = { channel: 'しっぽLABチャンネル', channelUrl: 'https://www.youtube.com/@sippolab0927', category: '獣医師' };
const dogcatch = { channel: '犬のしつけチャンネル / 金倉高志', channelUrl: 'https://www.youtube.com/@dogcatch', category: 'しつけ教室' };
const fufu = { channel: "FUFU家's ゴールデンレトリバーTEN", channelUrl: 'https://www.youtube.com/@fufu_ten_goldenretriever', category: 'ペットフード', instagram: 'https://www.instagram.com/fufu_ten_goldenretriever/', instagramHandle: '@fufu_ten_goldenretriever' };
const coco = { channel: 'フレンチブルドッグココ', channelUrl: 'https://www.youtube.com/@miroku_coco', category: 'ペットフード', instagram: 'https://www.instagram.com/miroku_coco/', instagramHandle: '@miroku_coco' };
const kojima = { channel: '株式会社コジマ', channelUrl: 'https://www.youtube.com/@petkojima1', category: 'ペットショップ', instagram: 'https://www.instagram.com/pets.kojima.official/', instagramHandle: '@pets.kojima.official' };
const palm = { channel: 'DOG salon Palm', channelUrl: 'https://www.youtube.com/@dogpalm7106', category: 'トリミングサロン', instagram: 'https://www.instagram.com/mugitrimming/', instagramHandle: '@mugitrimming', source: 'https://dogsalonpalm.com/' };
const steve = { channel: '柴犬スティーブ', channelUrl: 'https://www.youtube.com/@shibainuSteve', category: '飼い主さん', instagram: 'https://www.instagram.com/shiba2929/', instagramHandle: '@shiba2929', source: 'https://www.steve-studio.jp/' };
const ranmaru = { channel: 'SHIBA DOG RANMARU', channelUrl: 'https://www.youtube.com/@ShibainuRanmaru', category: '飼い主さん', source: 'https://shibainuranmaru.com/' };

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

export const channelSummaries = Array.from(new Set(videos.map((video) => video.channel))).map((channel) => {
  const entries = videos.filter((video) => video.channel === channel).sort((a, b) => a.rank - b.rank);
  const first = entries[0];
  return {
    name: channel, category: first.category, thumbnail: thumbnailFor(first.id), videos: entries.length,
    totalViews: entries.reduce((sum, video) => sum + video.viewCount, 0),
    breeds: Array.from(new Set(entries.map((video) => video.breed))).join('・'),
    channelUrl: first.channelUrl, instagram: first.instagram, instagramHandle: first.instagramHandle,
  };
});
