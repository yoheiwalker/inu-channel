export type SeoLanding = {
  slug: string;
  name: string;
  description: string;
  intro: string;
};

export const breedLandings: SeoLanding[] = [
  { slug: 'shiba-inu', name: '柴犬', description: '柴犬の人気YouTube動画とInstagram・TikTokアカウントをまとめて比較。登録者数や再生数、動画の見どころからお気に入りを探せます。', intro: '凛とした表情から家族に甘える姿まで、柴犬ならではの魅力を発信するクリエイターを集めました。暮らし、成長、笑える日常、ケアの動画をSNS横断で探せます。' },
  { slug: 'chihuahua', name: 'チワワ', description: 'チワワの人気YouTube動画・Instagram・TikTokアカウント一覧。子犬の成長や暮らし、しつけ動画を探せます。', intro: '小さな体と豊かな表情が魅力のチワワ。子犬期の成長記録から、多頭飼い、しつけ、家族との日常まで、気になる発信者へすぐに移動できます。' },
  { slug: 'toy-poodle', name: 'トイプードル', description: 'トイプードルの人気動画とSNSクリエイターを一覧で紹介。YouTube・Instagram・TikTokから犬種で探せます。', intro: 'トイプードルのかわいい日常、トリミング、健康、家族との暮らしを発信するアカウントをまとめました。動画の内容や人気度を見比べて選べます。' },
  { slug: 'pomeranian', name: 'ポメラニアン', description: 'ポメラニアンの人気YouTube・Instagram・TikTokを犬種別に紹介。注目動画やフォロワー数も確認できます。', intro: 'ふわふわの毛並みと元気なリアクションで人気のポメラニアン。日常、成長、おでかけを中心に、見ていて楽しいアカウントをまとめています。' },
  { slug: 'miniature-dachshund', name: 'ミニチュアダックスフンド', description: 'ミニチュアダックスフンドの人気動画・SNSアカウントまとめ。YouTube、Instagram、TikTokを横断して探せます。', intro: '短い足と長い胴、表情豊かなミニチュアダックスフンド。家族との日常や多頭飼い、冒険、成長を記録するクリエイターを紹介します。' },
  { slug: 'corgi', name: 'ウェルシュ・コーギー', description: 'コーギーの人気YouTube動画とInstagram・TikTokアカウント一覧。再生数やフォロワー数から探せます。', intro: '短い足と大きな笑顔が愛されるウェルシュ・コーギー。家族との暮らしや遊び、コミカルなショート動画を発信する人気アカウントを集めました。' },
  { slug: 'golden-retriever', name: 'ゴールデンレトリバー', description: 'ゴールデンレトリバーの人気動画と飼い主クリエイターまとめ。YouTube・Instagram・TikTokを犬種から検索できます。', intro: '人懐っこく家族思いなゴールデンレトリバー。子犬のお迎え、大型犬との生活、旅や遊びなど、温かな成長記録を中心に紹介します。' },
  { slug: 'labrador-retriever', name: 'ラブラドールレトリバー', description: 'ラブラドールレトリバーのYouTube・Instagram・TikTok人気アカウントと注目動画をまとめて紹介します。', intro: '遊び好きで表情豊かなラブラドールレトリバー。家族との日常、アウトドア、トレーニングを発信する国内外のクリエイターをまとめました。' },
  { slug: 'siberian-husky', name: 'シベリアンハスキー', description: 'シベリアンハスキーの人気動画・SNSクリエイター一覧。YouTube、Instagram、TikTokの注目アカウントを比較できます。', intro: '美しい姿と、おしゃべりなリアクションのギャップが人気のシベリアンハスキー。多頭飼い、雪遊び、家族との掛け合いを楽しめる発信者を紹介します。' },
  { slug: 'samoyed', name: 'サモエド', description: 'サモエドの人気YouTube・Instagram・TikTokまとめ。ふわふわな人気犬の動画や飼い主アカウントを探せます。', intro: '真っ白な毛並みと「サモエドスマイル」で人気のサモエド。成長、きょうだい、多頭飼い、家族との暮らしを動画とSNSから探せます。' },
  { slug: 'pug', name: 'パグ', description: 'パグの人気動画とInstagram・TikTok・YouTubeアカウント一覧。コミカルな日常や飼い主クリエイターを紹介します。', intro: '愛嬌のある表情と仕草が魅力のパグ。家族との暮らし、衣装やコメディ、何気ない日常を発信する人気クリエイターを集めました。' },
  { slug: 'french-bulldog', name: 'フレンチブルドッグ', description: 'フレンチブルドッグの人気動画・SNSアカウントまとめ。YouTube、Instagram、TikTokからお気に入りを探せます。', intro: '大きな耳とユーモラスな表情で人気のフレンチブルドッグ。子犬の成長、おでかけ、家族との暮らしを発信するアカウントをまとめています。' },
  { slug: 'shih-tzu', name: 'シーズー', description: 'シーズーの人気YouTube動画とInstagram・TikTokアカウント一覧。トリミング、成長、日常の動画を探せます。', intro: 'もふもふの毛並みと穏やかな表情が魅力のシーズー。暮らしや成長に加え、プロによるトリミング動画も見比べられます。' },
];

export const categoryLandings: SeoLanding[] = [
  { slug: 'veterinarian', name: '獣医師', description: '獣医師・動物医療関係者が発信する犬の健康動画まとめ。歯磨き、誤食、フードなどの動画を内容確認済みの要約付きで紹介します。', intro: '犬の健康や病気、日常ケアについて専門的な立場から発信するチャンネルをまとめています。動画は一般情報として紹介し、診断や治療が必要な場合は動物病院への相談を案内します。' },
  { slug: 'dog-training', name: 'しつけ教室', description: '犬のしつけ教室・ドッグトレーナーの人気YouTube動画まとめ。甘噛み、噛み癖、子犬の接し方を要約付きで紹介します。', intro: '子犬の甘噛みや興奮、怖がりなど、暮らしの困りごとを実演で学べるチャンネルをまとめました。犬の個性や家庭環境により対応は異なるため、必要に応じて専門家へ相談してください。' },
  { slug: 'pet-food', name: 'ペットフード', description: '犬のペットフードや食事に関する人気動画まとめ。フード選びと犬との暮らしを、動画の要点・犬種・年齢付きで紹介します。', intro: 'フード選びの基礎から、食事を含む飼い主さんとの日常までを紹介します。原材料や体質、年齢によって合う食事は変わるため、持病や不安がある場合は獣医師への相談が安心です。' },
  { slug: 'pet-shop', name: 'ペットショップ', description: 'ペットショップ公式YouTubeチャンネルの犬動画まとめ。サービス、健康管理、子犬に関する注目動画を紹介します。', intro: 'ペットショップや関連企業が公式に公開する犬動画をまとめています。店舗やサービスの紹介は、発信元の説明であることが分かるように区別して掲載します。' },
  { slug: 'grooming-salon', name: 'トリミングサロン', description: 'トリミングサロンの人気犬動画まとめ。柴犬、トイプードル、シーズーなどの施術動画を内容確認済み要約付きで紹介します。', intro: 'プロのトリマーが安全に配慮しながら施術する様子を紹介します。犬ごとの苦手な場面や、ビフォーアフターを確認できます。家庭で危険な施術をまねしないよう注意書きも掲載しています。' },
  { slug: 'dog-owners', name: '飼い主さん', description: '犬と暮らす飼い主YouTuber・Instagram・TikTokクリエイターまとめ。犬種や人気動画、フォロワー数から探せます。', intro: '犬とのリアルな暮らしや成長、家族との絆を発信する飼い主クリエイターを集めました。YouTubeだけでなくInstagram・TikTokも横断して、お気に入りの犬を探せます。' },
];

export const siteUrl = 'https://moemel.com';
export const contentUpdated = '2026-09-06';

export const landingBySlug = (items: SeoLanding[], slug: string) => items.find((item) => item.slug === slug);
