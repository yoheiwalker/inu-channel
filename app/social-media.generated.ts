export type SocialMediaItem = {
  id: string;
  title: string;
  embedUrl: string;
  thumbnail: string;
  viewCount: number | null;
};

export type SocialMediaProfile = {
  icon: string;
  media: SocialMediaItem[];
};

export const socialMediaProfiles: Record<string, SocialMediaProfile> = {
  "Instagram:@marutaro": {
    "icon": "/social/instagram/marutaro.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/marutaro/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/10593517_501208056648267_1283747068_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xNTAuQzMifQ%3D%3D&_nc_ohc=p4YkLh_E6P0Q7kNvwFhFrCc&_nc_oc=AdobIcLu5iFZxaHZJhmgpesFo3hmdcrvq03EQAMf0SFljuVzo4yqekBjMjP9r_0SIG0&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKWU0GhLBHpoV12H1OBmNT-AA0jWpcxW-PrTh6HwkldSA&oe=6AA58CD3",
        "viewCount": null,
        "thumbnail": "/social/instagram/marutaro-1.jpg"
      }
    ]
  },
  "Instagram:@minapple": {
    "icon": "/social/instagram/minapple.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/minapple/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/483533953_598114919928804_5420608442697554724_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=DDp0cpY5E6MQ7kNvwGRYbBb&_nc_oc=AdoAjIC7Gov-0e4voT-OcHQBADZ6KnWQI2E_WC5L2rqnHz5Na944YVd-otcRS8RuR5g&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJ4fyYzliQhSY8yXFs2XuGO2LgChYlRqMipXfRxwoPOTA&oe=6AA59AF3",
        "viewCount": null,
        "thumbnail": "/social/instagram/minapple-1.jpg"
      }
    ]
  },
  "Instagram:@tamanegi.qoo.riku": {
    "icon": "/social/instagram/tamanegi.qoo.riku.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/tamanegi.qoo.riku/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/444143986_1112137856714753_3950460346623457542_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=NUidV-Xi4KMQ7kNvwFgr2Wl&_nc_oc=AdoeqEGqSS7PlNECTKmsW2MOnnDsKMe4kAEUOcrWiKeyFPmeD3upnWNGcdG8sHSGJbM&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKxd1Gi-WqcFgCpIFGUTCrsffzayK5LVkpgjMmZywdCUw&oe=6AA59E66",
        "viewCount": null,
        "thumbnail": "/social/instagram/tamanegi.qoo.riku-1.jpg"
      }
    ]
  },
  "Instagram:@kabosumama": {
    "icon": "/social/instagram/kabosumama.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/kabosumama/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/10413122_281671555346482_1659536881_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xNTAuQzMifQ%3D%3D&_nc_ohc=DoEgQAtgul4Q7kNvwGn8vv-&_nc_oc=AdqmF8XXDJl1Lnx662KOewr0TrUggnEBtBW3gllM-yn9MGMG1pfxrsuVWg8i22bPLyM&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQIce-hUNXsMQCwd-2KBtz7H7uBWBiiK-UogxC1h2bWFiw&oe=6AA5A0AF",
        "viewCount": null,
        "thumbnail": "/social/instagram/kabosumama-1.jpg"
      }
    ]
  },
  "Instagram:@shiba_charmy": {
    "icon": "/social/instagram/shiba_charmy.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/shiba_charmy/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/457230658_471648845706159_1601713386422845090_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=E2MGKa8ojV4Q7kNvwFxy1_v&_nc_oc=AdrdNCWcR0eIbb_EtT7wMtiqcBdExgD8LFP8YGE-p_kxRXwyojRn7DSvcQu8RhQ2Tz8&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKdWvfQQ6c4LGz51LI9T8d4lPQD80c58MIlFRK27XSv6g&oe=6AA578E9",
        "viewCount": null,
        "thumbnail": "/social/instagram/shiba_charmy-1.jpg"
      }
    ]
  },
  "Instagram:@daifuku_channel": {
    "icon": "/social/instagram/daifuku_channel.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/daifuku_channel/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/21480285_1862892400705271_1530518016905707520_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=uQ1wjPwoQwAQ7kNvwEieoK6&_nc_oc=Adq6lM0KvSk0fR4yVfoyX8Bd3TZBDvWvWywMfBpwV2d0q2YKdnCbk5tjJKqetvJvS7Q&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJrsrneK7v-7umocH0oJVHRvwTs1mpY5ODACtianG5iKQ&oe=6AA5873A",
        "viewCount": null,
        "thumbnail": "/social/instagram/daifuku_channel-1.jpg"
      }
    ]
  },
  "Instagram:@shibainu.gaku": {
    "icon": "/social/instagram/shibainu.gaku.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/shibainu.gaku/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.82787-19/538395235_18490722658069708_5537125584997189330_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=102&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=ThUieQ0qWeMQ7kNvwHxIYqB&_nc_oc=AdrfBhb9ZG8XxhbAz93k-49pH5J489KhGr2SECsUpfqvRIMNID1Wi_ieYrk4bNA1L4k&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_gid=_idO5Bel5GBlhuS448Fzkw&_nc_ss=7fa8c&oh=00_AQL5Ifjvo5ljhVmDAEvmfVrZDPzGNbGIuzWraFiIZXQITQ&oe=6AA5937F",
        "viewCount": null,
        "thumbnail": "/social/instagram/shibainu.gaku-1.jpg"
      }
    ]
  },
  "Instagram:@the_shiba_mogu": {
    "icon": "/social/instagram/the_shiba_mogu.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/the_shiba_mogu/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/72591362_2811700585560335_2990917943925145600_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=OQDwGJMrsloQ7kNvwFWdRCA&_nc_oc=AdqIbbAglLMzKM3HiMqBUCwjMWVi13xhatVkQREytMyfKBsGIi6yzD54LIvZdyi1qqs&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKIx3jtON-sij7g6CZ0aFvXCZNcFc4Sjfc4QqUCgRH1Qg&oe=6AA577DA",
        "viewCount": null,
        "thumbnail": "/social/instagram/the_shiba_mogu-1.jpg"
      }
    ]
  },
  "Instagram:@hinaosora": {
    "icon": "/social/instagram/hinaosora.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/hinaosora/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/34882746_241020940000159_6301977660557885440_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&_nc_aid=0&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=D6Gnb8nPLEcQ7kNvwFrrK8V&_nc_oc=AdqBwMi5fnd4OtK9iLkFCddn92Y42u6PgkyMxivV5RJihL9oW266K8KT9tQQzmW7cLo&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQL2Vt1aTUKQGOXuaTHWvd0x7N7DjNJL4V-RxtgIMoi5fw&oe=6AA5A025",
        "viewCount": null,
        "thumbnail": "/social/instagram/hinaosora-1.jpg"
      }
    ]
  },
  "Instagram:@nikochan.mame48": {
    "icon": "/social/instagram/nikochan.mame48.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/nikochan.mame48/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/13658518_185473725204980_207055231_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=19iUGYtsvXsQ7kNvwHnwHqM&_nc_oc=Ado43ugLtcOvNm__fcnqwp5x3GkO-ayTpvmcSK6oCRkAlWVgpzfrvhusIN1X_4HY68o&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQL99S7wbiSPJaqKPz_gpPT9rpkCyddAQIU4uwboRmVNtg&oe=6AA59B97",
        "viewCount": null,
        "thumbnail": "/social/instagram/nikochan.mame48-1.jpg"
      }
    ]
  },
  "Instagram:@ernie_pooh_": {
    "icon": "/social/instagram/ernie_pooh_.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/ernie_pooh_/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/17126266_221690701640163_6315718313204776960_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42MjAuQzMifQ%3D%3D&_nc_ohc=oHBEp5nzHa0Q7kNvwGDbe7l&_nc_oc=AdoqdMsvdj0peiIZgIPZt1GEADDhSl79MzHU-8qvPKMxigyVzHlK163a2IqNTR0Snwo&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKAp5Y7NEQNl9jfNWOReQ72YsS08r_QOtYW12Jnz96Imw&oe=6AA57C07",
        "viewCount": null,
        "thumbnail": "/social/instagram/ernie_pooh_-1.jpg"
      }
    ]
  },
  "Instagram:@marupgoma_c": {
    "icon": "/social/instagram/marupgoma_c.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/marupgoma_c/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/19228424_479035529138660_3760794744448352256_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=103&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=XKkQjE0AbcAQ7kNvwFY7p6V&_nc_oc=AdpSeRQ6ZtPOPdU9W6KmroPpVZVf9yNN_UvA_k7d6iuvBKvstJYWjJujqE2IGO7NGlQ&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJIg5umKOrpVYgEeUmAxulfhzlGeRuSgnbxzolKbx2a5Q&oe=6AA58630",
        "viewCount": null,
        "thumbnail": "/social/instagram/marupgoma_c-1.jpg"
      }
    ]
  },
  "Instagram:@kowakusuritagoura89": {
    "icon": "/social/instagram/kowakusuritagoura89.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/kowakusuritagoura89/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.82787-19/625860683_18059317562663460_7743827875815148568_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=xrsFq1tQR_4Q7kNvwHUvB0R&_nc_oc=AdpMxl_sbH89iYWDrg2RuUtdU8OAmOnH1R4nGcK2cWfR4fW36HgAZDbnOtomyK84YQE&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_gid=4p_j8kliz46nsJyl1ykBxg&_nc_ss=7fa8c&oh=00_AQJPmLwmxF9FgyH6OvoKPZExZOUUEgJxq27IzalQMymEnA&oe=6AA5AC8E",
        "viewCount": null,
        "thumbnail": "/social/instagram/kowakusuritagoura89-1.jpg"
      }
    ]
  },
  "Instagram:@mirimogu": {
    "icon": "/social/instagram/mirimogu.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/mirimogu/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/58410757_1547135715417897_2642363905992556544_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=lCps98BuVmcQ7kNvwHcBaUM&_nc_oc=Adqug5zAPlwpOSUNSxVQg_9TfoYkcV-qmhFI7PGX-sxZHKqT_Zls8WR01HkG5MeL2IY&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKx4VcrLi7wiIF3QfG8WaAWV2jUvkH1CJB-6XpOwF4igg&oe=6AA5859D",
        "viewCount": null,
        "thumbnail": "/social/instagram/mirimogu-1.jpg"
      }
    ]
  },
  "Instagram:@uri__home": {
    "icon": "/social/instagram/uri__home.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/uri__home/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/325298692_570595275081849_1912760725643921139_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=103&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDAxLkMzIn0%3D&_nc_ohc=zApzp51wb9YQ7kNvwFu_x5b&_nc_oc=AdrOfLwT5f0C95zeywsb5eUHv116Hfk-cyC6vhz6sM6mOl2yyE2Aq7LVrxbYc4SpnUA&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJ8jub7WNB6_DklbiGaPeznnXugjy5tkhYv6BiRIrhqrg&oe=6AA5A426",
        "viewCount": null,
        "thumbnail": "/social/instagram/uri__home-1.jpg"
      }
    ]
  },
  "Instagram:@asasa0509": {
    "icon": "/social/instagram/asasa0509.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/asasa0509/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/12940695_183820532010989_326739427_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=0IkZd9TRFdcQ7kNvwHTwxro&_nc_oc=Ado1cpTAZhZ3wJTQs5jhduaxfUl31NUsWjRMymNBjjko0Vq7cmIVe7ZGC-X4Ys_zonw&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJuajAQi7XZQQqs7YbMK8AAA6YptoGF40no_BdhZzpo_A&oe=6AA587E2",
        "viewCount": null,
        "thumbnail": "/social/instagram/asasa0509-1.jpg"
      }
    ]
  },
  "Instagram:@shibaochatarou": {
    "icon": "/favicon.svg",
    "media": [
      {
        "id": "profile",
        "title": "注目リール・最新投稿",
        "embedUrl": "https://www.instagram.com/shibaochatarou/embed/",
        "thumbnailUrl": null,
        "viewCount": null,
        "thumbnail": "/favicon.svg"
      }
    ]
  },
  "Instagram:@nana_chan7723": {
    "icon": "/social/instagram/nana_chan7723.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/nana_chan7723/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/286305032_185831550462656_4040354341641598514_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42NDcuQzMifQ%3D%3D&_nc_ohc=vKuxg9aRgXYQ7kNvwGdBBwA&_nc_oc=AdrriWO3dlwjrP4LLPL2ED6xa8YF1izxQ4DU5tpEonV-h9RsYZmQ-20xbRMPbqVeoU8&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKALUkTJ_X7Nh8CYb3Yip0wwYrRGT7_HlsUDAkECBpbUw&oe=6AA58197",
        "viewCount": null,
        "thumbnail": "/social/instagram/nana_chan7723-1.jpg"
      }
    ]
  },
  "Instagram:@ma.home___": {
    "icon": "/social/instagram/ma.home___.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/ma.home___/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/21107729_223062548221764_1927997131113627648_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=gk3LqTkCirsQ7kNvwEvwBY1&_nc_oc=AdppgWROFjZXmXfiKPwtbkli7fLu15BYl4YN_y5okDEy14dnt3kf2YXij7VhLIE9KyQ&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQLNn8GSRPD87fr8OswB3ZemFkPHiNID-o7EP2UWpqc6Uw&oe=6AA590C8",
        "viewCount": null,
        "thumbnail": "/social/instagram/ma.home___-1.jpg"
      }
    ]
  },
  "Instagram:@shi_ba_i_nu_momo": {
    "icon": "/social/instagram/shi_ba_i_nu_momo.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/shi_ba_i_nu_momo/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/10261095_1527732194158803_422764358_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xNTAuQzMifQ%3D%3D&_nc_ohc=84hWe078AJwQ7kNvwEX_lZa&_nc_oc=AdpGTFQmz3EjplHmcHRZjsjdry6yH0CbnqaOZ--lsqZNMlGQ1SX0f7tCE-A0zBw_83s&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKNgGNgG4MYJSdsvT0jCnlw1_Wlbi_xitWcax1l0iJg0g&oe=6AA590BB",
        "viewCount": null,
        "thumbnail": "/social/instagram/shi_ba_i_nu_momo-1.jpg"
      }
    ]
  },
  "Instagram:@jiffpom": {
    "icon": "/social/instagram/jiffpom.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/jiffpom/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/138762267_161663878759787_5775438764026920974_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=102&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=Se8FHj39PA4Q7kNvwEc8GOd&_nc_oc=Adqz2Y1T8BqaAJPEh4P7dJd3q3bziIWfy8D50bHqp9Lo2ip6ooh3oe7577RGl5Xc-Ew&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQIitE0mXKo9t5m6Ev-wugHYkJPbY20IrSiDA2B867JiRA&oe=6AA5A910",
        "viewCount": null,
        "thumbnail": "/social/instagram/jiffpom-1.jpg"
      }
    ]
  },
  "Instagram:@mochapom": {
    "icon": "/social/instagram/mochapom.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/mochapom/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/35370048_1949434151763171_3306260498701352960_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=103&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=JUpXzWrYtMoQ7kNvwGZOIbT&_nc_oc=AdqOd9UtbOmyZsVIsGyux3-Y0teys4RyBtKTx-k-nyqFPcJuyFu6QJH7LyUWXHhm2eY&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQITduHNUqZxwQ8jJqRYTP6Lm11cI_ZMgdct3VMx5brSrA&oe=6AA59232",
        "viewCount": null,
        "thumbnail": "/social/instagram/mochapom-1.jpg"
      }
    ]
  },
  "Instagram:@mamesuke_chibisuke": {
    "icon": "/social/instagram/mamesuke_chibisuke.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/mamesuke_chibisuke/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/432305410_784273813237297_1630654417322268714_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42MzAuQzMifQ%3D%3D&_nc_ohc=QKFzlLE6mKoQ7kNvwHdt_LM&_nc_oc=AdqEHZToJHbwoGMO2cQFEJa9RH3cvGFB-NMMkJ9riRPD_qG_YTyuS1C3ji1xy8bmkls&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKiHpr9jjqXzxO_Qt_hHD-ao3CmlpMZlTFhbOUD4R-nmA&oe=6AA58435",
        "viewCount": null,
        "thumbnail": "/social/instagram/mamesuke_chibisuke-1.jpg"
      }
    ]
  },
  "Instagram:@pixxel_the_pom": {
    "icon": "/social/instagram/pixxel_the_pom.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/pixxel_the_pom/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/67447773_923496618001541_1336393518125416448_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDEzLkMzIn0%3D&_nc_ohc=oCyrJN4sIGYQ7kNvwH-hFYI&_nc_oc=Adol9GtCT2yoPYugkA2u8TQW8qfzWCrB8DCTX-hcxL4CnPeYjXWZQrnxLNaP8IBYOKA&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKn1NI8Celu9ama399gwW9-g0k8GaX4NaX8a2Btrqwucw&oe=6AA5A852",
        "viewCount": null,
        "thumbnail": "/social/instagram/pixxel_the_pom-1.jpg"
      }
    ]
  },
  "Instagram:@marry_seri_lily_uri": {
    "icon": "/social/instagram/marry_seri_lily_uri.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/marry_seri_lily_uri/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/372757437_3533053360316905_5012298453581642466_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42ODEuQzMifQ%3D%3D&_nc_ohc=ukshILKojG4Q7kNvwF-BjFH&_nc_oc=AdpdlTfpsIxFUjlOdLutYMBuayQ3niVkA1seHHril4D7dIIqVB5RmDFLfNKTSKzNkJc&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKO0T0CDwpCCGw23Pg3g4d9bmntt2ZgjBFHn6AX2e8Jhg&oe=6AA57BCA",
        "viewCount": null,
        "thumbnail": "/social/instagram/marry_seri_lily_uri-1.jpg"
      }
    ]
  },
  "Instagram:@ao.mono": {
    "icon": "/social/instagram/ao.mono.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/ao.mono/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/146884961_160956285839278_2293530031213440924_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44NTAuQzMifQ%3D%3D&_nc_ohc=9bikNhOKzhgQ7kNvwELcVF_&_nc_oc=Adp0GxeMpIK6q0AYEwcQpExFF98MW39siQJQsKjOcsOTpXqoi7YfbdGlcQEAnr0XPUQ&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJMHl3wPLlUsOYRMrewTHsG8AKX6LgmZmZ_2RYTT6eMjQ&oe=6AA59543",
        "viewCount": null,
        "thumbnail": "/social/instagram/ao.mono-1.jpg"
      }
    ]
  },
  "Instagram:@licca_tarao_0311": {
    "icon": "/social/instagram/licca_tarao_0311.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/licca_tarao_0311/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/342403433_6354626137929092_4132175251597600143_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy43MTQuQzMifQ%3D%3D&_nc_ohc=MpKY95bk2bMQ7kNvwHlxM85&_nc_oc=AdqqOeoRzFhiG6zCnCAaorC_L0vAWQLYGIZIFBORoWFqfp0SA36uxAbpsttaGXhJN1o&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJsk5hx255TSq8qO9mA99X1YWbhkY2h3Y1bpoDeN8GYOg&oe=6AA590B2",
        "viewCount": null,
        "thumbnail": "/social/instagram/licca_tarao_0311-1.jpg"
      }
    ]
  },
  "Instagram:@mine_ten_": {
    "icon": "/social/instagram/mine_ten_.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/mine_ten_/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-19/554952925_18053953043634194_1822631135616024827_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=yeTZAhhxkJMQ7kNvwHKQoNE&_nc_oc=AdpjC70yKhdoShWkZC3HSgqvhPAhlIhrt9bVVOAVA3t-EN_a5mtrdsTY4NHTMDkqgrc&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_gid=PLbYg1mRNQNmYAExWu5LEg&_nc_ss=7fa8c&oh=00_AQJYiHTxCG5e6aBgMOk766WYyNYXpaKj7EAC_5TnodCAgA&oe=6AA5ADBB",
        "viewCount": null,
        "thumbnail": "/social/instagram/mine_ten_-1.jpg"
      }
    ]
  },
  "Instagram:@walterthechi": {
    "icon": "/social/instagram/walterthechi.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/walterthechi/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/11856819_1768270470066548_502438794_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xNTAuQzMifQ%3D%3D&_nc_ohc=sifo7i8_8w8Q7kNvwG45P4j&_nc_oc=AdrLURzTiQKHS-lEUPpdJK0D4BzI2Dh0oFUJW9Lrb8T1079dxk5baiczQN33mdXZ80k&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKVnBiOf68vM09CnySrl0NodXHfsHmkFdKYRyDo2fr8NQ&oe=6AA58AE2",
        "viewCount": null,
        "thumbnail": "/social/instagram/walterthechi-1.jpg"
      }
    ]
  },
  "Instagram:@yetidobby": {
    "icon": "/social/instagram/yetidobby.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/yetidobby/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/424558545_7494950407195434_938555875750906694_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=FUm_qbT9y6AQ7kNvwHZBkNG&_nc_oc=AdrLZDC--qUPmbeX31QcToMjRp4kMUPfOotk3E6VlFnHiisxLxac-mUEbE2oinaOgn0&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQIpSxR8f7XwF_E3gx13MlNkTeNhKnEYwhVzIAAes8AIbg&oe=6AA58A90",
        "viewCount": null,
        "thumbnail": "/social/instagram/yetidobby-1.jpg"
      }
    ]
  },
  "Instagram:@itsdougthepug": {
    "icon": "/social/instagram/itsdougthepug.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/itsdougthepug/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/297475710_601500781363651_8351975528106007611_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=109&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy43NTAuQzMifQ%3D%3D&_nc_ohc=u7ChKeov-QEQ7kNvwEhqoHp&_nc_oc=AdpYg6Kazfeh9MEaukHE52Yr8b8nM80-cgOIPN580ym37K54x_5mYxbfo1D17dUkDdY&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQK5pIWwGXy6QSDqIsyv8T2e5mIdl0xXOSCWPe70uVIl2A&oe=6AA5A1C4",
        "viewCount": null,
        "thumbnail": "/social/instagram/itsdougthepug-1.jpg"
      }
    ]
  },
  "Instagram:@thepuggysmalls": {
    "icon": "/social/instagram/thepuggysmalls.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/thepuggysmalls/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-19/552684753_18537518587018337_4245433552156995749_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=WxuL9h0WHEIQ7kNvwHMDqlY&_nc_oc=AdqTdJMJ6W1vu8wEZIb5SVRIlOY6YBF5oHiRQV2PXwkR4bQ76fq3vS07jUWPmvGHzCg&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_gid=zGbmqhGQouvABlcvpJBmDQ&_nc_ss=7fa8c&oh=00_AQInbnxTk9rtfHsjo4J_XmZ1KWU5k19KXxMLNFhcJSXmGg&oe=6AA57688",
        "viewCount": null,
        "thumbnail": "/social/instagram/thepuggysmalls-1.jpg"
      }
    ]
  },
  "Instagram:@kimchi.the.pug": {
    "icon": "/social/instagram/kimchi.the.pug.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/kimchi.the.pug/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.82787-19/640604333_18509087836072868_5775943517602318737_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=109&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=8NotEZcbBkgQ7kNvwHPmcMH&_nc_oc=AdqP-Q3TC4eEwYKcl8hEpKpGbo-TjAlVRGoCmTBBlFZWM9GECOafKJUEgbjegLENRzA&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_gid=iAwQfZF03NJgml7QzEb9vg&_nc_ss=7fa8c&oh=00_AQLuQ7oZLxexNs2kl4udSYE3K-JLovB9Vl0QiKeLElpMzQ&oe=6AA5943E",
        "viewCount": null,
        "thumbnail": "/social/instagram/kimchi.the.pug-1.jpg"
      }
    ]
  },
  "Instagram:@pugridesshotgun": {
    "icon": "/social/instagram/pugridesshotgun.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/pugridesshotgun/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/28150799_792320957642950_323595768227168256_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=109&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy45MjQuQzMifQ%3D%3D&_nc_ohc=1F6lZwYhPxIQ7kNvwEAX2f9&_nc_oc=AdozmJIOXb0t3NnTzFKF3zL4DbwikofVrmd3LnEILbJ9Bvf-hF88Z_d22Yiw39JAwOA&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQIcqivH1ADTftVv5ABlhRWFYpvyoNTAcowOH5At_6uqBA&oe=6AA586EF",
        "viewCount": null,
        "thumbnail": "/social/instagram/pugridesshotgun-1.jpg"
      }
    ]
  },
  "Instagram:@tubby_puggy": {
    "icon": "/social/instagram/tubby_puggy.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/tubby_puggy/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/319302502_154171170347483_3610460227802793652_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=Vngy7BYItNMQ7kNvwHbyvGz&_nc_oc=AdrCyx3rzvijFkOkmLLoz3Pzia76jIq2YFsh8B7YWgo5Yybi4uhF9IUb2CGsLcop2Ho&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQK57GqdoVhKxf2Dkj1DwLhZpOztYB7RHpoA74PO5L0vkg&oe=6AA581E9",
        "viewCount": null,
        "thumbnail": "/social/instagram/tubby_puggy-1.jpg"
      }
    ]
  },
  "Instagram:@yunabugs": {
    "icon": "/social/instagram/yunabugs.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/yunabugs/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/331311910_145348811719147_4375940110152124960_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=vCdcEDQRzzAQ7kNvwGNUtxi&_nc_oc=Adr13UpPyz6leydvDsjg3eJeoq4-DPKOWnxwFo8tvCLH792yVkp3Tks0CU5rCYgZEhQ&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJ9c83D3TXrEqBmfv3BTZmXlPd0jlwwbATdxe_j0l06-g&oe=6AA5ADC0",
        "viewCount": null,
        "thumbnail": "/social/instagram/yunabugs-1.jpg"
      }
    ]
  },
  "Instagram:@crusoe_dachshund": {
    "icon": "/social/instagram/crusoe_dachshund.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/crusoe_dachshund/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/11350664_496636260503180_929279461_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xNTAuQzMifQ%3D%3D&_nc_ohc=-cjc1z05EGcQ7kNvwFYu1VS&_nc_oc=AdrgJW4bmfTQaN6BBaLSNBBFMFZQvSj_dPRr1oF4J0mH8d6f94zN5kxaNkvg-neCfvw&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJGYZQ7RLRJHp1xjshQ5IWX6Oh62nsbCMy9VZoZMiR1vw&oe=6AA594ED",
        "viewCount": null,
        "thumbnail": "/social/instagram/crusoe_dachshund-1.jpg"
      }
    ]
  },
  "Instagram:@loulouminidachshund": {
    "icon": "/social/instagram/loulouminidachshund.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/loulouminidachshund/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/164902561_733019750713439_3934352502203724713_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=oeKj6yInyE8Q7kNvwEsT8-y&_nc_oc=AdqB54dw2zC-gABMZktPgSGXbCDxPoa4Xhq4UPspIbrKv9_0F8u_AtL6NSW6qXRSvK4&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQLlEvEADffQHBR0uh3B8fg8qRGkhVNZ_4XYC7JS23rLrA&oe=6AA58E96",
        "viewCount": null,
        "thumbnail": "/social/instagram/loulouminidachshund-1.jpg"
      }
    ]
  },
  "Instagram:@calme.di": {
    "icon": "/social/instagram/calme.di.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/calme.di/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/357143027_967517234397528_2343674127278725900_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=103&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=tCSEZQYlJXEQ7kNvwEJSGNW&_nc_oc=AdpfO5M-7dXfyh6ZrRAxba7rlGF1EukEZE_ZDmXmCC1sgUljmr75GdX4ekhrm1JgRZw&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQInA1VInnUKzrq9C4ZK5PTXI1GazYXh9j1OWAbZex3NHg&oe=6AA59B89",
        "viewCount": null,
        "thumbnail": "/social/instagram/calme.di-1.jpg"
      }
    ]
  },
  "Instagram:@oliveyoufreddie": {
    "icon": "/social/instagram/oliveyoufreddie.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/oliveyoufreddie/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/347569802_274941554967485_778674218341634618_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy45ODQuQzMifQ%3D%3D&_nc_ohc=w6QOsooNHKEQ7kNvwFQHS8d&_nc_oc=AdpXAc370ujxIf0GyXjDLvfKQjhY2HSreIPmFBGdHA-PDRUb-6WXFl9dTKS7C_FDQsw&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQI--Z-uZfmPYobD0yTz5vrpkXvckysokklN6Wug_Trtuw&oe=6AA5980C",
        "viewCount": null,
        "thumbnail": "/social/instagram/oliveyoufreddie-1.jpg"
      }
    ]
  },
  "Instagram:@pippa_thesausage": {
    "icon": "/social/instagram/pippa_thesausage.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/pippa_thesausage/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/67563786_1097766513946282_2248573412777656320_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=wstOeROkXCkQ7kNvwH1kaHf&_nc_oc=Adrqjm6WblBkScZsEZh0X7sSC3mdFFp3hcIYgs_h_BMvE2ja4jfMLaZtObipEg2VTyw&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJ7fAobxfhiRjVCBocca7rggwD272ry0PwCenQH1lXzLA&oe=6AA57EBB",
        "viewCount": null,
        "thumbnail": "/social/instagram/pippa_thesausage-1.jpg"
      }
    ]
  },
  "Instagram:@lacorgi": {
    "icon": "/social/instagram/lacorgi.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/lacorgi/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/324391490_1230219887564312_5509873902520757811_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44OTkuQzMifQ%3D%3D&_nc_ohc=AbOdwiix7sEQ7kNvwGE43qo&_nc_oc=AdruG8dw9jYUiDOxZZ6Qfonz5ACTkSKsPELtRM3MlNCjwYDv7jr6c1pl0rnXTC4GRx0&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKdTQN4fN6xcWURFT0Hs9kTw0N8Yn9XEA4nZxHb_rlzbg&oe=6AA599DA",
        "viewCount": null,
        "thumbnail": "/social/instagram/lacorgi-1.jpg"
      }
    ]
  },
  "Instagram:@tofu_corgi": {
    "icon": "/social/instagram/tofu_corgi.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/tofu_corgi/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/12751071_1044733315568362_652066949_a.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=BLq05dA-ZWYQ7kNvwFXAWKr&_nc_oc=AdoQCKTSoUVL9BF7f6ou5o6iqx56b7On3WrLuEVdW4QWEpaGLWEjJPGzvSJ1uIvQe-Y&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJMkyLQi-2n3NuDGxdQ1GsoLLxunfeolOqT3XXKlSBHRg&oe=6AA58888",
        "viewCount": null,
        "thumbnail": "/social/instagram/tofu_corgi-1.jpg"
      }
    ]
  },
  "Instagram:@thecorgistory": {
    "icon": "/social/instagram/thecorgistory.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/thecorgistory/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/462217136_9052717258094251_4416787070754319825_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=XttQMjnJv_oQ7kNvwFRi8Fm&_nc_oc=Adpxia5-7NDgMRcqWmwOaJN53KDG5nMXvWXIqmHoN_LFM2efMukdLX7OlVS6jP3eHlA&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQL8Tpvj8PFGG4og4jgVeFR1ThKf6V6NPr0LD8ezE-Xo7g&oe=6AA5AE17",
        "viewCount": null,
        "thumbnail": "/social/instagram/thecorgistory-1.jpg"
      }
    ]
  },
  "Instagram:@ruby_thecorgi": {
    "icon": "/social/instagram/ruby_thecorgi.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/ruby_thecorgi/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/50128954_2306891012928125_8097588987482341376_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=103&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=GvJNh0gaEBoQ7kNvwE6Pvd4&_nc_oc=AdotI6WqrNNqN4eFHh8A72XkDif-pCJs7PEj8jf4r-k3Erz-JVUT1qh9IrT8mlVVA8k&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKFV9-Nf9GdOQk4ioXn2NMRzEioi593HzJlYWFeJYGpDQ&oe=6AA5924B",
        "viewCount": null,
        "thumbnail": "/social/instagram/ruby_thecorgi-1.jpg"
      }
    ]
  },
  "Instagram:@supercorgi_jojo": {
    "icon": "/social/instagram/supercorgi_jojo.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/supercorgi_jojo/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/307665196_771396220599329_8694392907325099812_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=ASHUNjnDIH4Q7kNvwFsec_S&_nc_oc=AdpxnOqNMZ_WzL2FuRnxySUo6LrAlz-FaEINpnuTms_zF0_FiNaOiYxZqj_JhDJ-If4&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQLVMcM2T3iJAtqul-AISRL6s5kHoizk85jUmF57vKbTiQ&oe=6AA5AAD9",
        "viewCount": null,
        "thumbnail": "/social/instagram/supercorgi_jojo-1.jpg"
      }
    ]
  },
  "Instagram:@adventuringwithnala": {
    "icon": "/social/instagram/adventuringwithnala.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/adventuringwithnala/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/373241616_850900296123622_8527750903854466562_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42NTEuQzMifQ%3D%3D&_nc_ohc=xus4XMYEig8Q7kNvwFLjnx3&_nc_oc=AdpEE5g98CzBvGCcJXecZTe7lqmSNNZL8c_3U_y6q7TsNVmmBNIJVmoS3YEfL1tEVLo&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKJWuBD7NVsHYFLEVsV3wNrEsruddj-57e_0j_N6i4cfA&oe=6AA5AAAC",
        "viewCount": null,
        "thumbnail": "/social/instagram/adventuringwithnala-1.jpg"
      }
    ]
  },
  "Instagram:@tuckerbudzyn": {
    "icon": "/social/instagram/tuckerbudzyn.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/tuckerbudzyn/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/52776067_395963534532563_4705838255675801600_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=6PmeSDtJqcMQ7kNvwG_dJAq&_nc_oc=AdrcfKvjkHvcYSN-gcbaGZKgl78qj9DzMd-_6ZRHmHYNea33eatfHP5HfcU0-gAzbzM&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQIh58YCNki3lnGbLoSIUI5K7nhxZlXaI6zXrQ7RQbzk2w&oe=6AA597B9",
        "viewCount": null,
        "thumbnail": "/social/instagram/tuckerbudzyn-1.jpg"
      }
    ]
  },
  "Instagram:@drakethepupstar": {
    "icon": "/social/instagram/drakethepupstar.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/drakethepupstar/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/491422338_508113535567137_3441687630327644577_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=yZ7i3KWfaboQ7kNvwEUWkh-&_nc_oc=AdrdT-wK4mAjWRzTJPcf8a97DYf5a0TwWMpk530dFcZeUO6Nm6TLwHYsPDRyXiwdqko&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKdkl-LsUjuUqSTkDVX6ATuO-0G-J9y65RSpZ34XMvhew&oe=6AA58B67",
        "viewCount": null,
        "thumbnail": "/social/instagram/drakethepupstar-1.jpg"
      }
    ]
  },
  "Instagram:@wat.ki": {
    "icon": "/social/instagram/wat.ki.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/wat.ki/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.82787-19/627038948_18548804230031137_1191832274674253994_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=102&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=WIMkbs86v80Q7kNvwEtiJTh&_nc_oc=AdosrlLkCl7qYe9g5JDtUfBjiiElT5NUBBnNzguOZ15bMGvNvrZrfeI_lD-3HLFAHvo&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_gid=HtKWX4act2PkoU6IP4WKxg&_nc_ss=7fa8c&oh=00_AQIZKCLHH9NVxvGv3THPpTAsdhzyNg6T9Q8C9NJxlVh1cg&oe=6AA588DF",
        "viewCount": null,
        "thumbnail": "/social/instagram/wat.ki-1.jpg"
      }
    ]
  },
  "Instagram:@hdbrosriley": {
    "icon": "/favicon.svg",
    "media": [
      {
        "id": "profile",
        "title": "注目リール・最新投稿",
        "embedUrl": "https://www.instagram.com/hdbrosriley/embed/",
        "thumbnailUrl": null,
        "viewCount": null,
        "thumbnail": "/favicon.svg"
      }
    ]
  },
  "Instagram:@levithehuskyrescue": {
    "icon": "/social/instagram/levithehuskyrescue.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/levithehuskyrescue/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.82787-19/778256094_17982140112113553_4510830659344718118_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=WtqxF1Dk_REQ7kNvwGU15yN&_nc_oc=AdoAT1LhDRAVulno8A8nCSWi8BquQr6vvWjmZpr2vxX3Zkc8UW6kb1sOwHZUBfpky6o&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_gid=AUMCwFArBS5-fXMxfBIbIQ&_nc_ss=7fa8c&oh=00_AQJgTSKx5xWVAa0O0XE4fjd3cglTFTZzWEq3GYg7P-4L-w&oe=6AA5A436",
        "viewCount": null,
        "thumbnail": "/social/instagram/levithehuskyrescue-1.jpg"
      }
    ]
  },
  "Instagram:@thehuskymoon": {
    "icon": "/social/instagram/thehuskymoon.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/thehuskymoon/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.82787-19/624286609_18358494076205528_4203993062077540501_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=csSILDYACGUQ7kNvwEviNTE&_nc_oc=AdocHhsVe2vLMbg1Ykn3O2Sv_AqYylkf__Vk2nbEV5orhLyO_N71_qRoxqwpWQg9YKo&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_gid=LWqjVh-X2Jz8w6fbdIQ8Tg&_nc_ss=7fa8c&oh=00_AQIajLimgKA0S0E8-qtP7Qs24e-Bi3KKH0WTAtFldDVCWg&oe=6AA59C9C",
        "viewCount": null,
        "thumbnail": "/social/instagram/thehuskymoon-1.jpg"
      }
    ]
  },
  "Instagram:@_mayahuskyy": {
    "icon": "/social/instagram/_mayahuskyy.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/_mayahuskyy/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/254695831_388606982949562_1802235008175097964_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=103&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=EZpfqAFoeQ4Q7kNvwHnla-0&_nc_oc=Adoxer3ZBhxSxvdplbRFPwdPq6VKPbei9MZfnvtwBIoBWKDUxEPrYXXDNZWQaQO1hu8&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQLVcYLiwGDF8WT24WM-z631DHUfO8uYvoInND70I-QvzA&oe=6AA58C96",
        "viewCount": null,
        "thumbnail": "/social/instagram/_mayahuskyy-1.jpg"
      }
    ]
  },
  "Instagram:@sassyhuskies": {
    "icon": "/social/instagram/sassyhuskies.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/sassyhuskies/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-19/685632942_18402792361148065_2929097947280563544_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=EXf1BgdU300Q7kNvwEI_AUP&_nc_oc=AdqKtPN0TeS1hYkz98Y1SVELwDiUXDCf6Z3frWa6agq2ew2QrT7zb3t3GpC546NXxqw&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_gid=2TAOC2Du8drvpWY7t-cFkw&_nc_ss=7fa8c&oh=00_AQJ-AJj_bB_DtAgmkEkN3QW5jel3mfJ7T62c7IC79omi8w&oe=6AA58F51",
        "viewCount": null,
        "thumbnail": "/social/instagram/sassyhuskies-1.jpg"
      }
    ]
  },
  "Instagram:@gonetothesnowdogs": {
    "icon": "/social/instagram/gonetothesnowdogs.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/gonetothesnowdogs/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/294082096_1150077625540540_830456674761603873_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=bKjsKhxQMs4Q7kNvwH0JcVW&_nc_oc=Adp8zFCzS3LNtK5eY9d0MLdQ1mgPTbsU5jLON5h7LFVGmY6TuJNgoqVSTrMXJsd6xx4&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQId2HEIrupTI-TnUVfxr1R0mH5fvH3UPZaiIVo0Zt9iTA&oe=6AA5A4C0",
        "viewCount": null,
        "thumbnail": "/social/instagram/gonetothesnowdogs-1.jpg"
      }
    ]
  },
  "Instagram:@the_lab_millie": {
    "icon": "/social/instagram/the_lab_millie.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/the_lab_millie/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-19/657285009_18571799581031845_8378376367123033226_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDc5LkMzIn0%3D&_nc_ohc=eRfg6j5ahZUQ7kNvwHsbKFD&_nc_oc=AdpdgUHVcbX5nkqCN-McvOkaFN6zFCSzcvpPgK8mGL6x8StdTK31xuru0hLuzq2tyV0&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_gid=k7P4Fkdr8usp2vgu6kqAvg&_nc_ss=7fa8c&oh=00_AQJ6FhhxUc1axq_iflaKHKW1SO05kM4BXcmnDobOwfuvTQ&oe=6AA5805B",
        "viewCount": null,
        "thumbnail": "/social/instagram/the_lab_millie-1.jpg"
      }
    ]
  },
  "Instagram:@imjaxthelab": {
    "icon": "/social/instagram/imjaxthelab.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/imjaxthelab/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.82787-19/787743917_18131773072709984_2288830677600621608_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=cpPT2rDYFToQ7kNvwFZuC7y&_nc_oc=AdqADxq-tLEYGSp8GTWrNhXxDNoaHiU9jW5mswBy1i4EvX0KWhn3MOPDruUYb6hkadg&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_gid=wVMuvT4WFY6QTPcNdOX3XQ&_nc_ss=7fa8c&oh=00_AQKT1qfwiXvTfgVQVq6jtsu37HqxKGAPLtnZb99FzAuvAA&oe=6AA586B2",
        "viewCount": null,
        "thumbnail": "/social/instagram/imjaxthelab-1.jpg"
      }
    ]
  },
  "Instagram:@jenny.the.lab": {
    "icon": "/social/instagram/jenny.the.lab.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/jenny.the.lab/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/386368098_249782554700508_4078416172731223321_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=102&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4zOTUuQzMifQ%3D%3D&_nc_ohc=EsGF8PttcysQ7kNvwFNvHy_&_nc_oc=Ado4JfONkn2kuDLhCNJyR1pSv12lJ5T-zXiDeXjQ2ADFprZBlLUMaq855PoZ6BRyn8k&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQLe7X_1hy7fps8AIv9un9Pq8LxJTeHVR2eA4OGJ_fe_dQ&oe=6AA58300",
        "viewCount": null,
        "thumbnail": "/social/instagram/jenny.the.lab-1.jpg"
      }
    ]
  },
  "Instagram:@bojackthelab": {
    "icon": "/social/instagram/bojackthelab.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/bojackthelab/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/278487570_383568963665383_3826442558914438405_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=B3mJvEXouJ0Q7kNvwESqcji&_nc_oc=AdpdvbZqCjNuS2t7M083uHLK_4Dkzw2ndKOiTt7AwEbTD9gs8oHyoyGx9-EtUBnWx4E&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQK9QS8T0TAmNsXwHA60FRtGfGfGYBtheYYPOlHTHpvD_Q&oe=6AA579E0",
        "viewCount": null,
        "thumbnail": "/social/instagram/bojackthelab-1.jpg"
      }
    ]
  },
  "Instagram:@dogswiss": {
    "icon": "/social/instagram/dogswiss.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/dogswiss/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/51427995_619941935126775_7213236795826241536_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=IUFSDr1BE5sQ7kNvwG7AnOK&_nc_oc=Adpm8IKIYh1iU0-kRa-xyI-ntdCuy-k8uG7cel0hD7k03zYE34w2Qvxpr0rAEaIpiko&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQJIelmTJhgBylpD_jw1CBsWMe86LlpNgK6eQbRMRQVZWw&oe=6AA57E6C",
        "viewCount": null,
        "thumbnail": "/social/instagram/dogswiss-1.jpg"
      }
    ]
  },
  "Instagram:@mayapolarbear": {
    "icon": "/social/instagram/mayapolarbear.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/mayapolarbear/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/40467556_2144512145622698_7063281169487364096_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=rT2P-7g-QwwQ7kNvwGG_IbO&_nc_oc=AdrsZsxFhk65zk80FHwGBXl2N1QYLgy4b3oDPvQgFLgiaS5cmu4xv24ig01oDuQDvBI&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKnItc5sBgnmh2LggOeFuHvlYiYULVgOTs-gtVFmSPumw&oe=6AA5AAD7",
        "viewCount": null,
        "thumbnail": "/social/instagram/mayapolarbear-1.jpg"
      }
    ]
  },
  "Instagram:@coconutricebear": {
    "icon": "/social/instagram/coconutricebear.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/coconutricebear/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/355277182_1314951446108522_8030485052938086588_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=I6dqS_HniTAQ7kNvwGH3440&_nc_oc=Adq4gJJnHjQaQfp1tP9b0Yi7JE6q3URBE9xUt4BzokoLEAsG7R5kpV5garsPY9V2zho&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQIMVgFdeRH7_9Unps4aaZhqknA4cfcYEEeyhczsDuD7XA&oe=6AA5975C",
        "viewCount": null,
        "thumbnail": "/social/instagram/coconutricebear-1.jpg"
      }
    ]
  },
  "Instagram:@suihanki.dog": {
    "icon": "/favicon.svg",
    "media": [
      {
        "id": "profile",
        "title": "注目リール・最新投稿",
        "embedUrl": "https://www.instagram.com/suihanki.dog/embed/",
        "thumbnailUrl": null,
        "viewCount": null,
        "thumbnail": "/favicon.svg"
      }
    ]
  },
  "Instagram:@nubethesamoyed": {
    "icon": "/social/instagram/nubethesamoyed.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/nubethesamoyed/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/338614113_2279391702243786_4126830658346525489_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=WeTLV10HvV0Q7kNvwGORbmG&_nc_oc=AdrxHFCWqRb5e9phk4St-tfOIUjPsn1jjlaovXGX0mkIPEax4Xjnb7E7O02KU9LsBPM&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKQ28WDMazY_0S-naWbQbks1dYFhSM96eiUjNa2QLbOgg&oe=6AA5A454",
        "viewCount": null,
        "thumbnail": "/social/instagram/nubethesamoyed-1.jpg"
      }
    ]
  },
  "Instagram:@vitothedogfather": {
    "icon": "/social/instagram/vitothedogfather.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/vitothedogfather/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.82787-19/730171291_18597830596030126_8683476175405963612_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=gAnEPnwgIeYQ7kNvwE96mjl&_nc_oc=AdrwlBgEkv8VDFJR6UMcwZf9fNULHlZ75tIGEeRImSImVM09nrUizo3drff-uigLVl8&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_gid=PxZXV5_bgThKKWZzfX7YzQ&_nc_ss=7fa8c&oh=00_AQJPkZrnNzmRPb-zjIV7OQTyma15ZSwBrjr3MvFw3Oe1ig&oe=6AA57947",
        "viewCount": null,
        "thumbnail": "/social/instagram/vitothedogfather-1.jpg"
      }
    ]
  },
  "Instagram:@toypoodlemobi": {
    "icon": "/social/instagram/toypoodlemobi.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/toypoodlemobi/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/437864083_421382047204283_8629007288443907230_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=A70cxJbVoNEQ7kNvwEcSDuL&_nc_oc=Adpoddo-MowzklSF_heJnM1nNrFCUpnKNFgKvHyZhPqXt_6BvctUtXQ8I6sxd4yfyJU&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQIOtwx_LW8lS1gUIlISiUcME_CYURJv-O0D7BRhFRzBrQ&oe=6AA58648",
        "viewCount": null,
        "thumbnail": "/social/instagram/toypoodlemobi-1.jpg"
      }
    ]
  },
  "Instagram:@mrpoodlemilo": {
    "icon": "/social/instagram/mrpoodlemilo.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/mrpoodlemilo/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/131443487_688743138700405_4679436348447156365_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=102&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=0JsxgygcuNUQ7kNvwHUpYzn&_nc_oc=Adpo_WhOyAUnsvhn0emuC3O6iAx8gKFgq0CgSerKGFpYsS2o-wvUEGhnA83SKAx4wPA&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQLZSxPaU7GXUXyyx57SATxX5A6jWhBnScxj5IvQnDWSQg&oe=6AA5895C",
        "viewCount": null,
        "thumbnail": "/social/instagram/mrpoodlemilo-1.jpg"
      }
    ]
  },
  "Instagram:@poodletoyromeo": {
    "icon": "/social/instagram/poodletoyromeo.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/poodletoyromeo/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/473643542_1320261559007419_4430602198458291926_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=4GshYlFOQJYQ7kNvwHA2-FC&_nc_oc=AdpIzVW0Zm49-L1SXrybOon1Gtu0_BMBf-BL5VDyqlnwfgJG-UL_kO2RhMzAsLAdqkg&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQI_B93fzuZFR4LbTjm7fMI0lEYUfVgAZr2L2HPQRMUw0A&oe=6AA59751",
        "viewCount": null,
        "thumbnail": "/social/instagram/poodletoyromeo-1.jpg"
      }
    ]
  },
  "Instagram:@leparisienpoodle": {
    "icon": "/social/instagram/leparisienpoodle.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/leparisienpoodle/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-19/548085878_17918951664160175_6547903303544530460_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy45NjMuQzMifQ%3D%3D&_nc_ohc=cdSFsB-unqwQ7kNvwEhg3so&_nc_oc=Adr6lOpfmd24kxsS1OLi-SozjbitBDNUEl40elM6hBQ4fzvGKKvFkRlf0HWrp4RZKcs&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_gid=VGT5DUvkXbJXfp3OSy_2ow&_nc_ss=7fa8c&oh=00_AQLEtArb-LlnOGAT6ggf_M2In9c2ZPLtx5afyi_A0mddow&oe=6AA57DCF",
        "viewCount": null,
        "thumbnail": "/social/instagram/leparisienpoodle-1.jpg"
      }
    ]
  },
  "Instagram:@toylilo": {
    "icon": "/social/instagram/toylilo.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/toylilo/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/168133730_159844972674927_383403153072948503_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy43NDIuQzMifQ%3D%3D&_nc_ohc=2xtCIq5QkDQQ7kNvwH-D9Sq&_nc_oc=Adre5vkaa_peDd4jpRWTLr27nWEpYn5vOxxKCRIpDvZKIa-DKIGb1_NDYxFqss2QUNc&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKHUtoMuvjl0p_Dqlzbs_328iHn0J5zLSObrJyCDJ7WwA&oe=6AA57EEF",
        "viewCount": null,
        "thumbnail": "/social/instagram/toylilo-1.jpg"
      }
    ]
  },
  "Instagram:@somefrenchienamedapollo": {
    "icon": "/social/instagram/somefrenchienamedapollo.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/somefrenchienamedapollo/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.82787-19/625772383_18086810009137257_6654477821164406903_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=mU0Qwgz_v_4Q7kNvwFAUH_x&_nc_oc=AdrMZKkFBiBtWm-puX_8_81WwyEKjBAke8Wi5s9HpALDIaC9mzuCK9gToSUFRtojeW4&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_gid=DWhK3-Ec0v5k2vfyJAgyzw&_nc_ss=7fa8c&oh=00_AQL4So_kxbriojVYXFJer-ZlYaV2_fcT4Icscb4wubt0DQ&oe=6AA5A8EC",
        "viewCount": null,
        "thumbnail": "/social/instagram/somefrenchienamedapollo-1.jpg"
      }
    ]
  },
  "Instagram:@winstonthefrenchiee_": {
    "icon": "/social/instagram/winstonthefrenchiee_.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/winstonthefrenchiee_/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.75761-19/504168840_18306814144246619_3919092165912862690_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=a3RtNfg5x90Q7kNvwGWztKM&_nc_oc=AdpiMZGF1tAf4KFfNRiopY1K8f60xRmnye6epDZWsuitwzEav-BpHjJ4DtpmdWLobiQ&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_gid=aNDCEjcr0LsmmtjXTJWdSw&_nc_ss=7fa8c&oh=00_AQIs6_IyHFdSS84xFETx2SUbCqJrTiFVfNnKOro8jUWwvg&oe=6AA585DB",
        "viewCount": null,
        "thumbnail": "/social/instagram/winstonthefrenchiee_-1.jpg"
      }
    ]
  },
  "Instagram:@tj.the.frenchie": {
    "icon": "/social/instagram/tj.the.frenchie.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/tj.the.frenchie/embed/",
        "thumbnailUrl": "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/459726560_493262150297079_933229849711307745_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDE1LkMzIn0%3D&_nc_ohc=RJtiOEYh4lQQ7kNvwFSV88d&_nc_oc=AdpKh2HtSwYR61oSZU2aOCQmZt_NsXwzIDC_AsUg8KJ4oPajcEieavhn6aZgq7bwxe4&_nc_zt=24&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQL5pKG6bnITK9hZ4mWbqc8Crm5GQbP1VCpGfhlRK9mWRg&oe=6AA58017",
        "viewCount": null,
        "thumbnail": "/social/instagram/tj.the.frenchie-1.jpg"
      }
    ]
  },
  "Instagram:@dadandhisfrenchies": {
    "icon": "/social/instagram/dadandhisfrenchies.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/dadandhisfrenchies/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.82787-19/611242656_18068722751627909_4464804499847187334_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=qKxBHj7i40IQ7kNvwFAaRaR&_nc_oc=AdokMWEY_o5JXx8Xk_XkD1b8NTtUbsV8ELUOAcyZVCe8MQGL7SwM1jAC4yNkHyxTAd4&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_gid=fCr72sj10Mtap667YqdqJw&_nc_ss=7fa8c&oh=00_AQLkFXU0f_FkQVxdAUVb4K-58PEwf2IHjZk4zyjhwHI99A&oe=6AA5A4E9",
        "viewCount": null,
        "thumbnail": "/social/instagram/dadandhisfrenchies-1.jpg"
      }
    ]
  },
  "Instagram:@dailydougie": {
    "icon": "/social/instagram/dailydougie.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/dailydougie/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/21480380_493982584314744_4160901549712736256_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=eP24iCkYFZEQ7kNvwF4o9la&_nc_oc=AdoR_xxCIh7y8_BprnnRwIlzawsWXAOZZQymXdzX-0onFB9GtJHBA1ufTAunsBgO_DI&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQIdYaUrCDBQT2z9d3rszgh_PSJkkBV1lVdH_mPm4_9DRg&oe=6AA59EB6",
        "viewCount": null,
        "thumbnail": "/social/instagram/dailydougie-1.jpg"
      }
    ]
  },
  "Instagram:@its.me.roku.the.shihtzu": {
    "icon": "/social/instagram/its.me.roku.the.shihtzu.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/its.me.roku.the.shihtzu/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-19/430355282_1426156688024904_6513950542411439644_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=8r3RqfaK-jsQ7kNvwHYzc0z&_nc_oc=Adq04r4QKdHnlRiEqvC6z6aGQYs3grw-4AS_Uc4Lk1WcqfR_v9nQJ3V7O7fzQjIJh5M&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQKaOEzdOSSvwbOTNISB304-HZrP4aAReO47sdKZJBAtMw&oe=6AA5937F",
        "viewCount": null,
        "thumbnail": "/social/instagram/its.me.roku.the.shihtzu-1.jpg"
      }
    ]
  },
  "Instagram:@masontheshihtzu1": {
    "icon": "/social/instagram/masontheshihtzu1.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/masontheshihtzu1/embed/",
        "thumbnailUrl": "https://scontent-nrt1-2.cdninstagram.com/v/t51.82787-19/589279799_18498193471078529_1079408242639106587_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=Jls3HnKSlDsQ7kNvwGlvL4R&_nc_oc=AdqfWfUK8n2_hI5qAX8Lgp33J8NDL-3og75fnCSTJzjVTmKiqNFkHQ_N1gKfDWXwNp8&_nc_zt=24&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_gid=FwxKxz2TnQRyvQCcDM6Edw&_nc_ss=7fa8c&oh=00_AQKLzhPvzi4sPCmR6Z6hovyy0BmJyQWQajLCDocm1o04Ng&oe=6AA5A917",
        "viewCount": null,
        "thumbnail": "/social/instagram/masontheshihtzu1-1.jpg"
      }
    ]
  },
  "Instagram:@i_am_ikura": {
    "icon": "/social/instagram/i_am_ikura.jpg",
    "media": [
      {
        "id": "profile",
        "title": "人気リール・最新投稿",
        "embedUrl": "https://www.instagram.com/i_am_ikura/embed/",
        "thumbnailUrl": "https://scontent-nrt6-1.cdninstagram.com/v/t51.2885-19/91606790_209165110390160_3408018981297061888_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=jw5_XFUG8dMQ7kNvwFPfed7&_nc_oc=Adpi6NRSV7lZ2g_R41JeuSy4ZgiSVgxyJgY44E4zKAOI1jX8FwmajKGbZSizABq9jBk&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_ss=7fa8c&oh=00_AQLBjH675ElbfEFMdgvdTEiVe3YKyAgUTjd81_6ZH3rCBQ&oe=6AA58287",
        "viewCount": null,
        "thumbnail": "/social/instagram/i_am_ikura-1.jpg"
      }
    ]
  },
  "TikTok:@van02030": {
    "icon": "/social/tiktok/van02030.jpg",
    "media": [
      {
        "id": "7247882870037990657",
        "title": "この動画でバズって色んな方に見てもらえるようになりました！#コーギーのバン君 #おすすめ #犬 #みんなに癒しを #みんなに笑顔を #コメント待ってます",
        "embedUrl": "https://www.tiktok.com/player/v1/7247882870037990657?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/87ba3d0aea6649bd9ac022ac979d58a0_1687529243~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=AZPwF5AN%2BWZGMt8pntNZKCPBADU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 3600000,
        "thumbnail": "/social/tiktok/van02030-1.jpg"
      },
      {
        "id": "7056739198115597569",
        "title": "言葉理解してるよなw#コーギーのバン君 #おすすめ #犬 #みんなに癒しを #みんなに笑顔を #コメント待ってます",
        "embedUrl": "https://www.tiktok.com/player/v1/7056739198115597569?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/f6d15c7e354f41f5bd3b74d749c86332~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=5mzPZO625%2BjPtACDCvPlfmHckPY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 2100000,
        "thumbnail": "/social/tiktok/van02030-2.jpg"
      },
      {
        "id": "6966200069372513538",
        "title": "パンを離さないバンくん攻略法教えます#コーギーのバン君 #みんなに笑顔を #みんなに癒しを #おすすめ #バズりたい",
        "embedUrl": "https://www.tiktok.com/player/v1/6966200069372513538?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/9379eaafa38e4c1c819d73baa9b333b9~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=mjaiyJa9DoTnjcngH3U0Y4PciWY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 307100,
        "thumbnail": "/social/tiktok/van02030-3.jpg"
      }
    ]
  },
  "TikTok:@sachanpug": {
    "icon": "/social/tiktok/sachanpug.jpg",
    "media": [
      {
        "id": "7424806583667903751",
        "title": "おーはーよみんな★今日は私の東京に行った時の動画になります🙇‍♀️✨とっても楽しくてスポンジボブカフェに行けて本当に嬉しい日でした😍🧽❤️ お時間ある時良かったらご覧下さい✨ #パグのいる生活 #犬のいる生活 #パグしか勝たん #ファビュラス様#ペットのいる暮らし #東京 #パグ #ペコピノさっちゃん #旅行vlog #スポンジボブ#鼻ぺちゃ #東京旅行",
        "embedUrl": "https://www.tiktok.com/player/v1/7424806583667903751?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oIEZKwNciPMioUBIA8tZAEBE1YXJBns71kzOV~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=3I06s%2FQvEiJauMAPYz%2FHfjGIsUU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 3900000,
        "thumbnail": "/social/tiktok/sachanpug-1.jpg"
      },
      {
        "id": "7451151641807555858",
        "title": "おはよ〜みんな✨今回の動画は広島県旅行Part1になります🫣✨大変好ましい無料が沢山のお宿に行ってみたかったパグちゃんが看板犬のカフェ☕️🩷大変長っかました動画になりますが良かったらご覧ください🥰 #パグのいる生活 #犬のいる生活 #ペコピノさっちゃん #日常vlog #鼻ぺちゃ #ファビュラス様 #パグ #旅行vlog #広島県#別邸藤屋#カフェ#温泉旅行#温泉#ドッグラン",
        "embedUrl": "https://www.tiktok.com/player/v1/7451151641807555858?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/owpnZBDEEBBE7V7BfEAgIXqFD8najgt6v9eRUz~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=9csEqpsbGh%2BZjt4jVXnFGu1vcrg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 3500000,
        "thumbnail": "/social/tiktok/sachanpug-2.jpg"
      },
      {
        "id": "7679045533129936136",
        "title": "ぶんぶんBOON🐝💓またまたブンブンさんの所でスクイーズのふっくぶっくろｵｵｵｵ！！購入したのでワクワクしながら開封するデースぅ！🙏❤️ྀི #開封動画#購入品紹介#スクイーズ#ブンブン#vlog",
        "embedUrl": "https://www.tiktok.com/player/v1/7679045533129936136?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/okORefZEAnjTAI7E1EFVAcCDAPoWADazfuIIzi~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=S0M%2Fw0YsVQp7UxacYYpXsa%2FlHHo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 650700,
        "thumbnail": "/social/tiktok/sachanpug-3.jpg"
      }
    ]
  },
  "TikTok:@komakoma2025": {
    "icon": "/social/tiktok/komakoma2025.jpg",
    "media": [
      {
        "id": "7648988797161508116",
        "title": "家に蜂の巣あったので駆除しました。(怖かった…)",
        "embedUrl": "https://www.tiktok.com/player/v1/7648988797161508116?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/oIeNjVCfUIoAIAD6VETLXBWIQWGAgcApXAerZR~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=kyg48jTyia%2BXGeCgy3QWFgR76g8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 2800000,
        "thumbnail": "/social/tiktok/komakoma2025-1.jpg"
      },
      {
        "id": "7658627520161467669",
        "title": "飼い主とW杯を観戦する柴犬こまちゃん。",
        "embedUrl": "https://www.tiktok.com/player/v1/7658627520161467669?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oU5QjbxYaSAIBiwpokK0EKvil6YBBOaAAIAEA~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=LSuYl2ScnhvSTEhX2QmfigASzmo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 2100000,
        "thumbnail": "/social/tiktok/komakoma2025-2.jpg"
      },
      {
        "id": "7671612761771609364",
        "title": "家にゴキブリか出たので退治した柴犬こまちゃん。",
        "embedUrl": "https://www.tiktok.com/player/v1/7671612761771609364?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o0sdDf7tEEEcQlFsxAqgFC0uIeRwAAoKDBvAbl~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=ZNsjCpOo9B1nBBc71PlM8uIpz8A%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 966000,
        "thumbnail": "/social/tiktok/komakoma2025-3.jpg"
      }
    ]
  },
  "TikTok:@chumkote": {
    "icon": "/social/tiktok/chumkote.jpg",
    "media": [
      {
        "id": "7668282331303808274",
        "title": "また騙されたよ。ウキウキな気持ちを返してくれよ。 #悟り #チワワ #病院 #犬のいる生活 #チワワのいる暮らし",
        "embedUrl": "https://www.tiktok.com/player/v1/7668282331303808274?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oIIrIDBzRNmaA7DqBF9bffYcsYxEEE5gUAziBr~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=2%2FQRxTqsId3RrOWaqxLIrsOX%2FNU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1400000,
        "thumbnail": "/social/tiktok/chumkote-1.jpg"
      },
      {
        "id": "7548805597894954247",
        "title": "その後、でもかわいい〜♡って言われて爆笑してしまった #犬界隈 #肘打ち界隈 #チワワ #おすすめにのりたい #たぬき",
        "embedUrl": "https://www.tiktok.com/player/v1/7548805597894954247?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/oIUuEEoMRCf1eStXQ2dXxAQkIDBK8heARjgWMp~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=whKlmivCPdtAv%2Bue6%2BJ0xTvyRIk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 428400,
        "thumbnail": "/social/tiktok/chumkote-2.jpg"
      },
      {
        "id": "7504644817071148296",
        "title": "リングドッグの動画、たくさんの再生・いいね・温かいコメントありがとうございます😳✨️ 嬉しすぎてびっくりしています…！ せっかくなので、前から撮ったバージョンの動画も載せさせてください🫶🏻🤍 「いつかうちの子にもリングドッグを…」と思っている方の参考になれば嬉しいです🥰 #リングドッグ #結婚式 #チワワ #wedding #weddingdog",
        "embedUrl": "https://www.tiktok.com/player/v1/7504644817071148296?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o82A3ICzvAtAAAi2imDEglEXYEBaBlaIrga0A~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=LxEH1%2BmElN0Ngsy7YG9gsiBT9Oc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 167500,
        "thumbnail": "/social/tiktok/chumkote-3.jpg"
      }
    ]
  },
  "TikTok:@marry320111": {
    "icon": "/social/tiktok/marry320111.jpg",
    "media": [
      {
        "id": "7660715080048397589",
        "title": "【哀悼】たくさん遊んでくれてありがとう！ 前日ストーリーにて先出し致しました際、たくさんのコメントを頂きました。ありがとございました 何度味わってもお別れは辛いものですね。いきものを飼ってる宿命です。 犬の一生はあまりにも短いけど４歳でって、、、 しかも原因不明って やりきれないです。 #ゴールデンレトリバー  #お別れ #まりーちゃん",
        "embedUrl": "https://www.tiktok.com/player/v1/7660715080048397589?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/ocaQPAcP9IYlqBVKBuiwRipEIEULBu8ABuyZa~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=1mq4Gf4Yzo0Z0iBoca1%2Fwnpo1zU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 182400,
        "thumbnail": "/social/tiktok/marry320111-1.jpg"
      },
      {
        "id": "7658523780351872277",
        "title": "絶対に1人で見ないでください…』 誰もいないはずの部屋から、。😱 #ホラー  #ほらみてほらみて犬だね  #夏",
        "embedUrl": "https://www.tiktok.com/player/v1/7658523780351872277?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUTrIcmbLDAtipphTIFzBRqCpEfg3B5SIsflIE~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=WcMfDXctHjkm%2BXnJTZWpoxSc%2Fxc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 8132,
        "thumbnail": "/social/tiktok/marry320111-2.jpg"
      },
      {
        "id": "7663689099529686292",
        "title": "海に浸かりながら参拝出来る神社【舌間厳島神社】八幡浜 おっちょこな犬の為に船旅の安全を祈願です。落っこちないように あ、この不思議そうな犬の表情はクラゲを発見した時のヤツです。 #まりーちゃん #ゴールデンレトリバー",
        "embedUrl": "https://www.tiktok.com/player/v1/7663689099529686292?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oEfREESQAflgBAaa7iCWI285gAFKBqAuW7DUAE~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=k5VPP%2B0Ptkm5li%2BW7ILphjF2rdo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 2859,
        "thumbnail": "/social/tiktok/marry320111-3.jpg"
      }
    ]
  },
  "TikTok:@aoi_sagawa": {
    "icon": "/social/tiktok/aoi_sagawa.jpg",
    "media": [
      {
        "id": "7507814103369387282",
        "title": "#コーギーのいる暮らし #corgi #welishcorgi #ウェルシュコーギー #welishcorgipenbroke",
        "embedUrl": "https://www.tiktok.com/player/v1/7507814103369387282?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/oEjSxAOLRUAp4EIoAMFfBCg0pH3A0vEfRADiEq~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=ENCLmjwHfTHIn1A2A4d6h5Jqgrk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 714,
        "thumbnail": "/social/tiktok/aoi_sagawa-1.jpg"
      },
      {
        "id": "7503740676903800082",
        "title": "おやつ〜〜〜#コーギーのいる暮らし #corgi #welishcorgi #ウェルシュコーギー",
        "embedUrl": "https://www.tiktok.com/player/v1/7503740676903800082?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/owkBQGDoFteKIpimQRxCAB3Ew2gEIUBfgoqNIE~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=%2FAPu8W%2BLvmUNgeIDtoHf4g6NKII%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 707,
        "thumbnail": "/social/tiktok/aoi_sagawa-2.jpg"
      },
      {
        "id": "7640855443312495880",
        "title": "久しぶりに投稿〜#コーギーのいる暮らし #welishcorgi #corgi #ウェルシュ・コーギー・ペンブローク",
        "embedUrl": "https://www.tiktok.com/player/v1/7640855443312495880?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/okwQ4QixAAmWDe7XjX8E4UMCOmEeeQIpyYz1CT~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=I0lFGfxXMDaeHWHMlZbBv3rsXxE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 571,
        "thumbnail": "/social/tiktok/aoi_sagawa-3.jpg"
      }
    ]
  },
  "TikTok:@bamu_belle": {
    "icon": "/social/tiktok/bamu_belle.jpg",
    "media": [
      {
        "id": "7614056327115148551",
        "title": "母ちゃんを迎えに行ったよ🐶 #ゴールデンレトリバー #goldenretriever #dog #いぬ #大型犬",
        "embedUrl": "https://www.tiktok.com/player/v1/7614056327115148551?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/ogAAeIj6mGAgH9R4AGJHFNcqLAfIQQeGeRTEV8~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=MYAGrh%2B4TTN%2BKES6uMOZgyar2Qw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 24100,
        "thumbnail": "/social/tiktok/bamu_belle-1.jpg"
      },
      {
        "id": "7616635618075970824",
        "title": "ばむ兄ちゃんも来ると思って 隣空けておいたけど…… 全然ばむ兄ちゃんが来ない！笑 お兄ちゃん大好きなべるです🥰 #ゴールデンレトリバー #goldenretriever #dog #ゴールデンレトリバーのいる生活",
        "embedUrl": "https://www.tiktok.com/player/v1/7616635618075970824?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oYBxAuAAALi3E2AAOEclmrioIwzPbaC4ASBY5~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=10JJtNs0F9QMgE0hTWy6cCE1XO0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 7024,
        "thumbnail": "/social/tiktok/bamu_belle-2.jpg"
      },
      {
        "id": "7642610097390161170",
        "title": "今日も仲良く水分補給🥤 #ゴールデンレトリバー #雑種犬 #goldenretriever #dog",
        "embedUrl": "https://www.tiktok.com/player/v1/7642610097390161170?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o0aPlASWaBvhQGBdiIYAt4aABEEArAIYjiAAA~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=G46WJjKxm7hQhIQfyJ0c4X0VL%2BA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 953,
        "thumbnail": "/social/tiktok/bamu_belle-3.jpg"
      }
    ]
  },
  "TikTok:@meguchan0208": {
    "icon": "/social/tiktok/meguchan0208.jpg",
    "media": [
      {
        "id": "7250092534767078658",
        "title": "2年前、右目の中にメラノーマが出来てしまい、右眼球を摘出することになりました。 摘出した右目は病理検査の結果、悪性黒色腫でした。 2年前の動画を見ると泣けてきますが、現在13歳とは思えないほど元気なお婆ちゃんビーグルです👵🏻🐶✨ #2年前#眼球摘出#メラノーマ#悪性黒色腫#ウインク犬#beagle#ビーグル#シニア犬",
        "embedUrl": "https://www.tiktok.com/player/v1/7250092534767078658?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUqeECBdItVQMBKkJbJ47QYykYIAincenDDgAB~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=m7HphPAMnSvtwe77OE%2FlBEd7Txw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 2500000,
        "thumbnail": "/social/tiktok/meguchan0208-1.jpg"
      },
      {
        "id": "7263065691513801986",
        "title": "術後のお見舞いに来てくれた娘の友達とまったり過ごすメグです🐶👦🏻 . #2年前 #お見舞いありがとう#お久しぶり#イケメン#あざと犬 #ビーグル#beagle",
        "embedUrl": "https://www.tiktok.com/player/v1/7263065691513801986?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/780f2dfd9bae418ea8e9cecf63b97496_1691064269~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=bSc4FkA%2F4AkrnggUNzK%2Fnv8O7FQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 103100,
        "thumbnail": "/social/tiktok/meguchan0208-2.jpg"
      },
      {
        "id": "7316849124593405186",
        "title": "このウインクは病気に負けず頑張った証😉🐶✨ 可哀想…⁇ それ全然違うよ♪ 痛みも無くなって毎日幸せだよ🐶💕 . 涙流して 可哀想って言われると… 違うんだけどな〜って😞モヤモヤ… むしろ早期発見でラッキー✌️🐶✨ 命拾いしました🫶　長生きしてみんなをビックリさせたいな🐶🤭🏅✨ . . #可愛いおばあちゃん犬 #可哀想じゃない#元気いっぱい #頑張った分#長生きしてね #beag#beagle#ビーグル#ビーグル犬犬#いぬ#イヌ#垂れ耳犬#眼球摘出#眼球摘出#メラノーマニア犬との暮らし#シニア犬 #シニア犬が愛おしい#シニア犬",
        "embedUrl": "https://www.tiktok.com/player/v1/7316849124593405186?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/7f7854af40404bbf8927489a612b65c6_1703586704~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=gkDm7Edrfm9OkniPLjp4mv%2FtVVw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 24100,
        "thumbnail": "/social/tiktok/meguchan0208-3.jpg"
      }
    ]
  },
  "TikTok:@luke_0915_skywalker": {
    "icon": "/social/tiktok/luke_0915_skywalker.jpg",
    "media": [
      {
        "id": "7624648624168865032",
        "title": "2026年varワンちゃん用鯉のぼり袋🎏の作り方😉 去年とほぼ同じ大きさですが気持ち小さめなので大きいお友達は店頭に在庫あれば2025年varを買うのがオススメ😌 ルークの近くのダイソーでは2025年varも数点一緒に置いてありました🎏 4月後半になると在庫無くなるので早めに行きましょう😉 犬服 ダイソー 簡単 手作り ハンドメイド 材料費110円 お散歩 鯉のぼり 端午の節句 こどもの日 男の子 小型犬 チワワ 超小型犬  #チワワのルーク #犬服 #ハンドメイド #鯉のぼり #こどもの日",
        "embedUrl": "https://www.tiktok.com/player/v1/7624648624168865032?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/oEf7QO5AAABiAKwz8QBqK0IX6EAidMIEBi0CD8~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=zpF3%2FUd1%2BRKK%2FLBpKLPkrQBfqcI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 87300,
        "thumbnail": "/social/tiktok/luke_0915_skywalker-1.jpg"
      },
      {
        "id": "7206656438633041153",
        "title": "チワワのルーク 避難訓練 #チワワのルーク #チワワ #わんこ #ブラックタン",
        "embedUrl": "https://www.tiktok.com/player/v1/7206656438633041153?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUBEAXiAeeAZRCyCIkDnV7b2QE8Xg8TnBQGA5V~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=iXeMAx%2BrozlMuR%2Bn129%2FKNRgtOw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 8368,
        "thumbnail": "/social/tiktok/luke_0915_skywalker-2.jpg"
      },
      {
        "id": "7501495012157361429",
        "title": "2025年春いなばWanちゅ～るテレビCM出演！🐶 今回は出演中のCM動画です☺️ ちっちゃく…ほんの2秒くらいの出演ですが…😌 ルークを探せ！😉 🗓️5/1からテレビCMも放映です📺️ #ワンちゅーる #わんちゅーる #ワンちゅーるメーカー  #チワワのルーク #チワワ #ブラックタン  #kawaii #dog #chihuahua  #犬 #dogs #dogsofinstagram #ロングコートチワワ #チワワexpo2025スプリング #チワワexpo #カバーモデル  #ルークスカイウォーカー #チワックス #チワックスタグラム #kawaii #filtrosnoopy #longcoatchihuahua #dogsofinstagram #cute #いぬ #犬 #愛犬 #いぬすたぐらむ #ふわもこ部 #いなば #いなばちゅーる",
        "embedUrl": "https://www.tiktok.com/player/v1/7501495012157361429?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUwEnAFGbID69jAAnqAgfPEqo1Q0RIqBUAfqUC~tplv-tiktokx-dmt-logom:tos-alisg-i-0068/o0QBQqYIAGIukAAAopDEeLfOPDoi7gh3jVNzeA.image?dr=14573&x-expires=1789023600&x-signature=qRWVywBwZM6HqxHhNaQKQC58ROs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 6189,
        "thumbnail": "/social/tiktok/luke_0915_skywalker-3.jpg"
      }
    ]
  },
  "TikTok:@samgoldenretriever": {
    "icon": "/favicon.svg",
    "media": []
  },
  "TikTok:@whataboutbunny": {
    "icon": "/social/tiktok/whataboutbunny.jpg",
    "media": [
      {
        "id": "7677685275170032927",
        "title": "This killed me 😆 The beef has been (seemingly) one-sided until now…I’m glad Ten has gained some attitude! #whataboutbunny",
        "embedUrl": "https://www.tiktok.com/player/v1/7677685275170032927?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/okMi3FBRVDqSjcE2nAAYAkiGIffgvqEEdXIQJD~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=SEf1syWm1eVDSLJRnDmcxllsjgY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 122500,
        "thumbnail": "/social/tiktok/whataboutbunny-1.jpg"
      },
      {
        "id": "7676650401575243039",
        "title": "Tenrec’s been pressing so much more recently…this request was so clear! #whataboutbunny #talkingdog",
        "embedUrl": "https://www.tiktok.com/player/v1/7676650401575243039?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/oc8jGeMzqgU1RlQcwFILF4EIgaGLKfAIvAee77~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=vDAod7sjH0c1psjK09OCK5Hr4bc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 117100,
        "thumbnail": "/social/tiktok/whataboutbunny-2.jpg"
      },
      {
        "id": "7679617944812358926",
        "title": "Little did I know this would eventually help her insult Tenrec easier...🙃 It's super interesting how Bunny has taken to calling Tenrec a cat, and vice versa (re yesterday's post) - Buns/Ten must first have a shared understanding of their species - they know they are 'dog', which then allows them to consciously break the rules of that understanding by referring to each other as 'cat'- what do you think?",
        "embedUrl": "https://www.tiktok.com/player/v1/7679617944812358926?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-85c255-tx/owElDweqSEiFYB9QvGmfBF9k8D6z53QwT1TxDg~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=nAjV3UMqM2g6SRVRO4uhzettVMA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 84700,
        "thumbnail": "/social/tiktok/whataboutbunny-3.jpg"
      }
    ]
  },
  "TikTok:@ri_tan_0405": {
    "icon": "/social/tiktok/ri_tan_0405.jpg",
    "media": [
      {
        "id": "6996992910877150465",
        "title": "これなにこれなに 🐶🐶🐶#チワワ #チワワのいる生活 #chihuahua #ブラックタンチワワ #ロングコートチワワ #うちの子が可愛すぎる #パピー #犬のいる暮らし #わんこ #いぬ",
        "embedUrl": "https://www.tiktok.com/player/v1/6996992910877150465?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/5e86ffd086594771a576c66285c80e6d_1629114365~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=jilgJ9u1JzbXH9UbSZMMOYRk9yQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 55900,
        "thumbnail": "/social/tiktok/ri_tan_0405-1.jpg"
      },
      {
        "id": "7034077996449336578",
        "title": "ｴｹﾁｪﾝいた🧸🍼♡#チワワ #チワワのいる生活 #わんこのいる生活 #わんこのいる暮らし #chihuahua #いぬのいる暮らし #ロングコートチワワ #インスタも見てね #fyp #癒し",
        "embedUrl": "https://www.tiktok.com/player/v1/7034077996449336578?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/b763cc32e4c44405b71d179d47e471b9_1637748911~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=hFOCbim1OhIgGeoaqUK%2B7Xun92U%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 32600,
        "thumbnail": "/social/tiktok/ri_tan_0405-2.jpg"
      },
      {
        "id": "7516551110346444049",
        "title": "⚠音量注意⚠ ワクチンいってきた💉 注射いたいよねえ🐶 #犬のいる生活 #子犬のいる生活 #チワワ #ロングコートチワワ #パピー犬 #子犬 #パピー #犬 #おすすめ #おすすめにのりたい",
        "embedUrl": "https://www.tiktok.com/player/v1/7516551110346444049?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/o8AQgE4ARdMIoATfgAGUCCug0mFDECF0UyhBfg~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=U399ek0A5rmIvIE93u1tjlpf8YM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 8696,
        "thumbnail": "/social/tiktok/ri_tan_0405-3.jpg"
      }
    ]
  },
  "TikTok:@hanachann07": {
    "icon": "/social/tiktok/hanachann07.jpg",
    "media": [
      {
        "id": "7141744882191699202",
        "title": "みかんショートケーキ🍰#纏#ショートケーキ缶#気になる子#くん活",
        "embedUrl": "https://www.tiktok.com/player/v1/7141744882191699202?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-alisg-i-photomode-sg/a8db18bce59e4736a9feadb551c99431~tplv-photomode-image.jpeg?dr=14555&x-expires=1789023600&x-signature=cMpwUIo%2FUMxqNT%2Fu7cxUfXZMj2E%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=my2&ftpl=1",
        "viewCount": 959,
        "thumbnail": "/social/tiktok/hanachann07-1.jpg"
      },
      {
        "id": "7156111923698765058",
        "title": "娘ちゃんたちの 自己紹介動画を作ってみました🐹🐭🐶  #自己紹介動画#娘ちゃんたちの自己紹介動画#ファンタスティックベイベ#可愛すぎる#3人のママ#楽しく編集",
        "embedUrl": "https://www.tiktok.com/player/v1/7156111923698765058?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/940a3bfb138e45b5bc5db50f31858cf6~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=ORw7S6JXcUHNHxpIRXgEaJdJIjs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 791,
        "thumbnail": "/social/tiktok/hanachann07-2.jpg"
      },
      {
        "id": "7164915376407448834",
        "title": "そこで くつろぐの😂💭？ この後降りてもらいました💡  #豆柴#くつろぐ犬 #まったりする #こたつ好き#笑わせてくてる",
        "embedUrl": "https://www.tiktok.com/player/v1/7164915376407448834?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/ogxdEuxBAzhrzw9SY5aANfKAJAoGUIKEK3tLBB~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=Dcsa8metZ%2FpzTsdckyvU1TNPvSM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 718,
        "thumbnail": "/social/tiktok/hanachann07-3.jpg"
      }
    ]
  },
  "TikTok:@gudan_ohusky": {
    "icon": "/social/tiktok/gudan_ohusky.jpg",
    "media": [
      {
        "id": "7669782008423386389",
        "title": "ADEUS CARLOS",
        "embedUrl": "https://www.tiktok.com/player/v1/7669782008423386389?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o4kwIEXF1EKACAA6iBOiABUiI2BAO0AiOwfxhm~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=D3TS7KNnggGZSyV0mdvHvPraIM8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 467600,
        "thumbnail": "/social/tiktok/gudan_ohusky-1.jpg"
      },
      {
        "id": "7680970417770597652",
        "title": "ME DEXA CARLOS, eu soh uma excessau",
        "embedUrl": "https://www.tiktok.com/player/v1/7680970417770597652?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUJEdiYvihYYgWpIgpAGhVtBBWaBAn61VISvQ~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=BKyUJm40M7IfyQouQXbmDP7mRvQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 291900,
        "thumbnail": "/social/tiktok/gudan_ohusky-2.jpg"
      },
      {
        "id": "7648322957319687444",
        "title": "6 ANO DA DUQUESA 💅 Nada como um finau de semana na Pousada Gaia Viva, o melhó lugar do reinu brasileru: 100 mil metru quadradu de DIVERSÃU lobística E o bom é que eles aceitam homanos!!!! QUEM GOSTA DA CARAMELITA DEIXA OS PARABEIS ABAIXU, quem nau gosta favor reveja seus conceitu.",
        "embedUrl": "https://www.tiktok.com/player/v1/7648322957319687444?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/ogTkIizi1EKACAA5TBEi6AaiIuBACnAtcwfDTl~tplv-tiktokx-dmt-logom:tos-alisg-i-0068/oMJInSACJLQsAEoASUqvjfAApIQneDlGgRNN1f.image?dr=14573&x-expires=1789023600&x-signature=yFRaSgCCuuG%2F9hrs4hv5J9PXDcI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 276200,
        "thumbnail": "/social/tiktok/gudan_ohusky-3.jpg"
      }
    ]
  },
  "TikTok:@adventuringwithnala": {
    "icon": "/social/tiktok/adventuringwithnala.jpg",
    "media": [
      {
        "id": "7237177884702444843",
        "title": "Another night sleeping in the mountains with blondie. Got me some morning Nala smushes. Full vid coming soon!",
        "embedUrl": "https://www.tiktok.com/player/v1/7237177884702444843?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/3407c7b99c7240dfa7694b6fbfa00fab_1685036804~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=UxAwl2R83M4uF0%2Fdqk6CI1EAAnc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 33900000,
        "thumbnail": "/social/tiktok/adventuringwithnala-1.jpg"
      },
      {
        "id": "7423140763678149918",
        "title": "If you’re only here for the stomps, this one’s for you 🫵",
        "embedUrl": "https://www.tiktok.com/player/v1/7423140763678149918?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/bdfa85e6582b4aaf9f29ba43a02b09c8_1728334664~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=UsWvgf5uSWsKwPFULitHFWVcHVc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 30100000,
        "thumbnail": "/social/tiktok/adventuringwithnala-2.jpg"
      },
      {
        "id": "7664413499694615821",
        "title": "I saw quite a few comments on a recent video saying Nala's stomps were slowing down and just wanted to provide some reassurance that her stomps are not slowing down. All of these stomps are from the last few months and the last clip was from a hike last week where we did a 6 mile hike (Nala probably did closer to 8 miles with how much she was running around). Yes there will be a day when her stomps are not so stompy but today is not that day 😊 She's a very stompy girl still. It's mainly the heat in the warmer months that makes her move a little more slowly. And truthfully the heat slows me down too. Any guesses what supercharges the Nala stomps? 😂",
        "embedUrl": "https://www.tiktok.com/player/v1/7664413499694615821?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/o8advAAx3E4ltBkCZMiD3iBAIEdIBdrg162qA~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=TEZsh6wokia0Hl0V%2FTkqE6CjmpQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 22000000,
        "thumbnail": "/social/tiktok/adventuringwithnala-3.jpg"
      }
    ]
  },
  "TikTok:@brodiethatdood": {
    "icon": "/social/tiktok/brodiethatdood.jpg",
    "media": [
      {
        "id": "7314339309811797291",
        "title": "Brodie is undefeated in dance-offs 🧸🕺🏽 #lakers #goldendoodle #dancebattle #sportsdog",
        "embedUrl": "https://www.tiktok.com/player/v1/7314339309811797291?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/3714d20476fe457198301e7100e2adc2_1703002340~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=fuDec0DFRTqXCyIYJ14GC38hHpw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 19500000,
        "thumbnail": "/social/tiktok/brodiethatdood-1.jpg"
      },
      {
        "id": "7677284055989177614",
        "title": "It’s like being attacked by a giant teddy bear… Btw this is puppy Brodie, he was only 1 in this vid! #goldendoodle #doglove #slowmotion",
        "embedUrl": "https://www.tiktok.com/player/v1/7677284055989177614?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oIiRBf9jCitJIUMbFA1wiBQLETIZAAYICBcAti~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=nT2sErOTflTLkfsxvWrhcAja97U%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 16400000,
        "thumbnail": "/social/tiktok/brodiethatdood-2.jpg"
      },
      {
        "id": "7405599640533372203",
        "title": "Here are just some of our favorite moments of Brodie doing what he was born to do. 🐻❤️ #goldendoodle #spreadjoy #childrenshospital #therapydog",
        "embedUrl": "https://www.tiktok.com/player/v1/7405599640533372203?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/88d330532d5540a9b613af63c56cc379_1724250542~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=QUzKHl2RmVSSjEbFFjTKcNXuREY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 6500000,
        "thumbnail": "/social/tiktok/brodiethatdood-3.jpg"
      }
    ]
  },
  "TikTok:@hammyandolivia": {
    "icon": "/social/tiktok/hammyandolivia.jpg",
    "media": [
      {
        "id": "6929959899178732805",
        "title": "Part 2 - potato casserole #dogsoftiktok #funny #fyp #trending",
        "embedUrl": "https://www.tiktok.com/player/v1/6929959899178732805?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/8ad43bc3040f4a17a5c4d82cdc1f7e77_1613507037~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=jGfJoD44mGOUeuacloDvXXe%2Fy74%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 28300000,
        "thumbnail": "/social/tiktok/hammyandolivia-1.jpg"
      },
      {
        "id": "7046402741878525190",
        "title": "Carrying your potato from room to room can be strenuous work, but we love our potato. #potato #dog #nolegs #cute",
        "embedUrl": "https://www.tiktok.com/player/v1/7046402741878525190?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/9fee46b3feac414da8d84733ec517c2a_1640618488~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=AihSCSBNNTEf3HlqbugzMA6Fn4E%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 26200000,
        "thumbnail": "/social/tiktok/hammyandolivia-2.jpg"
      },
      {
        "id": "7494626944445812011",
        "title": "How did we do?!",
        "embedUrl": "https://www.tiktok.com/player/v1/7494626944445812011?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oABPEAr4g0Cs0AAJCBjQ0AAki5avDj48DiAIE~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=FV%2FEKCsK6Fu9Iy8y94DO9kksT9A%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 553600,
        "thumbnail": "/social/tiktok/hammyandolivia-3.jpg"
      }
    ]
  },
  "TikTok:@dougthepug": {
    "icon": "/social/tiktok/dougthepug.jpg",
    "media": [
      {
        "id": "6847256587975888133",
        "title": "Doug The Pug’s Celebrity Friends ⭐️ Comment who your fav is! #dougthepug #colesprouse #LegendaryChallenge #fyp",
        "embedUrl": "https://www.tiktok.com/player/v1/6847256587975888133?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/o06TDeh4GHgMLe8ENGIlpeQBBCkgi0LA9Pr6QA~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=t01L%2BSkZa7lhrGREECLvqpyLGy8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 14000000,
        "thumbnail": "/social/tiktok/dougthepug-1.jpg"
      },
      {
        "id": "6790144711106497797",
        "title": "How Doug The Pug Got Famous - Part 1 #dougthepug #foryoupage",
        "embedUrl": "https://www.tiktok.com/player/v1/6790144711106497797?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/6d922b4248b3483d8c31bce94ac673a5_1580953770~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=NsjEXdjWWqdgDJDGfvd%2FPisnxnU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 13800000,
        "thumbnail": "/social/tiktok/dougthepug-2.jpg"
      },
      {
        "id": "7467765859264580895",
        "title": "How’d I do @Cole Walliser ♥️  #glambot #redcarpet #dougthepug #grammys",
        "embedUrl": "https://www.tiktok.com/player/v1/7467765859264580895?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/oIkt4AqMPEVqwefXQAAa6AQiIIdL8ReAwjgoKH~tplv-tiktokx-dmt-logom:tos-useast8-i-0068-tx2/ogAj1nACfACqAbDjEaLiWpIAxFROtoEAZVEEEe.image?dr=14573&x-expires=1789023600&x-signature=cipvmaB%2Bdqj9MLrMCrwFeEYamvY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1400000,
        "thumbnail": "/social/tiktok/dougthepug-3.jpg"
      }
    ]
  },
  "TikTok:@mayapolarbear": {
    "icon": "/social/tiktok/mayapolarbear.jpg",
    "media": [
      {
        "id": "7192977250915060998",
        "title": "I swear I would die for her 🥺❤️ #thingsmydogdoes #samoyed",
        "embedUrl": "https://www.tiktok.com/player/v1/7192977250915060998?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/cc444374d4424725b8c79f01e87861c8_1674745530~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=cesJbYRxGLoo7GYt%2FMF4pD%2Fqyfg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 5900000,
        "thumbnail": "/social/tiktok/mayapolarbear-1.jpg"
      },
      {
        "id": "7213785540657827077",
        "title": "Had to add some extra measurements for all the tasting 🤭 #dogbirthday #dogcake",
        "embedUrl": "https://www.tiktok.com/player/v1/7213785540657827077?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/6b4e35a55f41408e9e49fda5eeefdbf2_1679590340~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=ERO7fophrdOEiWIA78H6%2FkkdCMg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 4900000,
        "thumbnail": "/social/tiktok/mayapolarbear-2.jpg"
      },
      {
        "id": "7371799072006622496",
        "title": "Maya hopes this made you smile ᵕ̈ #dog #samoyed #motivation #wholesome #happiness",
        "embedUrl": "https://www.tiktok.com/player/v1/7371799072006622496?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast2a-p-0037-euttp/oEpyHC82MqGPe6lbEqFEgQDcImAjkWHQIIfKee~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=c0tDaGzBUzAdHh8nKx%2FObWGcuzM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 531800,
        "thumbnail": "/social/tiktok/mayapolarbear-3.jpg"
      }
    ]
  },
  "TikTok:@meekathehusky": {
    "icon": "/social/tiktok/meekathehusky.jpg",
    "media": [
      {
        "id": "7060882505523580206",
        "title": "Haircut PRANK on Meeka Goes Wrong 😳🤣🥰 #huskiesoftiktok",
        "embedUrl": "https://www.tiktok.com/player/v1/7060882505523580206?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/991fb32da59f46609a921c3f9d5e559f_1643989827~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=1z3C1axiJDk6nj0ubTmz0HgtzOE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 98600000,
        "thumbnail": "/social/tiktok/meekathehusky-1.jpg"
      },
      {
        "id": "7204169276813479211",
        "title": "Eating My Husky’s Food From Her Bowl! (PRANK) 👀🤣",
        "embedUrl": "https://www.tiktok.com/player/v1/7204169276813479211?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/74eeda5a4da2417e9f1e6292ef84b95e_1677351382~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=ojk0%2BfFsLNEug%2BF2omb69YmqlIY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 26800000,
        "thumbnail": "/social/tiktok/meekathehusky-2.jpg"
      },
      {
        "id": "7672451970753482014",
        "title": "My Husky Demands I Go Play With Her 👀😳",
        "embedUrl": "https://www.tiktok.com/player/v1/7672451970753482014?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/owD6BqZmICfeOIEWofjBIjkIIZ8JgAXjHyAnFU~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=NAw4KrSb5d9qOZ7qfeOvItm6Ztg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 902800,
        "thumbnail": "/social/tiktok/meekathehusky-3.jpg"
      }
    ]
  },
  "TikTok:@skaya.siberian": {
    "icon": "/social/tiktok/skaya.siberian.jpg",
    "media": [
      {
        "id": "7102186718534700294",
        "title": "Skaya plays truth or dare using her talking buttons! (part 4)",
        "embedUrl": "https://www.tiktok.com/player/v1/7102186718534700294?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/f7fb1bbae04e4a10a9eeecc36c78da2d_1653606710~tplv-tiktokx-dmt-logom:tos-useast2a-v-0068/8d3b8e0f74b54651b4b7ee74d3b5105d.image?dr=14573&x-expires=1789023600&x-signature=aIyqzNB6dkZzm597P%2BHvyT2Z2Mg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 26900000,
        "thumbnail": "/social/tiktok/skaya.siberian-1.jpg"
      },
      {
        "id": "6958957956868214021",
        "title": "Skaya answers your fan questions! (pt.5)",
        "embedUrl": "https://www.tiktok.com/player/v1/6958957956868214021?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/f3ef603abc28483fb3126ff70a87167a~tplv-tiktokx-dmt-logom:tos-maliva-p-0000/6e14fd81287444d890618331339d7ed5.image?dr=14573&x-expires=1789023600&x-signature=9gunEtqPG2P%2BbWNWsE7SB7yqMcQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 26700000,
        "thumbnail": "/social/tiktok/skaya.siberian-2.jpg"
      },
      {
        "id": "7316353284791487750",
        "title": "Skaya's Advent Calendar! 🎁 (Day 22)",
        "embedUrl": "https://www.tiktok.com/player/v1/7316353284791487750?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/9a2d01fe2bfa4fb18e93fe29836bbabf_1703471255~tplv-tiktokx-dmt-logom:tos-useast2a-v-0068/o8NdQ7gEEIAx3ANLAKAfQ0IReEIE2ECSjGejEL.image?dr=14573&x-expires=1789023600&x-signature=etbcWl%2Bc6TSZEQ0PhyYBazvFIeo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 91300,
        "thumbnail": "/social/tiktok/skaya.siberian-3.jpg"
      }
    ]
  },
  "TikTok:@dog_and_his_boomer": {
    "icon": "/social/tiktok/dog_and_his_boomer.jpg",
    "media": [
      {
        "id": "7670392736587074847",
        "title": "One of the most common questions I got after Part 1 was why I’m running 80 kWh of batteries and still haven’t cut the grid completely. The short answer is because I chose not to. My house is just under 4,000 sq ft with three AC systems. The extra battery capacity lets me stay off the grid much longer in the evenings and during outages while keeping everything running the way we normally live. The grid is simply my backup. If it goes down, the system does exactly what I built it to do. The biggest mistake I see people make is undersizing their battery bank. That’s why I added the two Pytes USA V16 batteries.(32 kWh total)  Part 3 is coming because there’s still a lot I want to cover. #solarpower #solarbatteries #solarenergy",
        "embedUrl": "https://www.tiktok.com/player/v1/7670392736587074847?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/oIAA4IWJUIAf173ZAGEeHxo5LAsQqgejmIt1Kw~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=i%2FXoQbNfdq5RtAGSUt%2FD2%2FIVLBk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 44200,
        "thumbnail": "/social/tiktok/dog_and_his_boomer-1.jpg"
      },
      {
        "id": "7676899099651722526",
        "title": "When a chihuahua thinks a  German shepherd dog is  His lover 😃 #dogs #dog #chihuahuas #germanshepherd",
        "embedUrl": "https://www.tiktok.com/player/v1/7676899099651722526?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/ogvDfEfEcAiyqUqVuIBIRVAhEpIUFJELDt6d0J~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=cQlvLXbkf9S0AVQnH6XN%2FcSEisE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 2529,
        "thumbnail": "/social/tiktok/dog_and_his_boomer-2.jpg"
      },
      {
        "id": "7675487845267574047",
        "title": "my dogs are in love and the cats are trying to figure out if what rhe puppies would be called 😬",
        "embedUrl": "https://www.tiktok.com/player/v1/7675487845267574047?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/oYq5V6EiCBvIMAiR2EFIg50I2hE8AhfisezBiV~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=3DLmLQ8w6QB4aP4fXIQuiAWar9U%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1000,
        "thumbnail": "/social/tiktok/dog_and_his_boomer-3.jpg"
      }
    ]
  },
  "TikTok:@madmax_fluffyroad": {
    "icon": "/social/tiktok/madmax_fluffyroad.jpg",
    "media": [
      {
        "id": "7682019560609828110",
        "title": "Bongo moves to the beat of his own drum ❤️ ✨MEET BONGO✨ 3 months old ✨LIKES✨ Cuddles Snacks Little toys Meeting people More cuddles Smooches Snacks Snoozing on a human shoulder ✨DISLIKES✨ Wearing costumes apparently Dog Backpack by @Little Chonk  See all the dogs available for adoption via @Best Friends, their pop-up in Brooklyn, or at the link in our bio! Btw if you’re wondering if I walked Bongo on our adventure, I did not because he’s only 3 months old and hasn’t had all his vaccinations yet and the streets are dirty and we didn’t want little homie to get sick. I can’t wait to share the next adoptable pup with you soon! #dogsoftiktok #adoptdontshop",
        "embedUrl": "https://www.tiktok.com/player/v1/7682019560609828110?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oEDKQISRBEtA52DaDegFSnETIfBQqsEBRCQxcA~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=DTxlMygegJ9AKyCq0SWHUAMx9Y0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=sg1",
        "viewCount": 59200,
        "thumbnail": "/social/tiktok/madmax_fluffyroad-1.jpg"
      },
      {
        "id": "7671257081650957581",
        "title": "Her snorts melted my heart 🥹 ✨MEET WING STOP RANCH✨ (Yes that’s her actual name) 5 years old Winnie came to Best Friends via @Animal Care Centers of NYC after being rescued from cruel conditions where she is suspected to have been used as a breeding dog. She was such a sweetheart, incredibly playful, but definitely moved a little slower due to the conditions in which she previously lived.  We don’t know the exact details so can’t speculate.  She currently lives with an incredible foster family in Queens, and is very playful with another sweet girl named Connie. ✨LIKES✨ Snacks Pup Cups Kisses Scratches Relaxing Meeting people The smells of the subway ✨DISLIKES✨ Woody Woodpecker Dog Backpack by @Little Chonk  See all the dogs available for adoption via @Best Friends, their pop-up in Brooklyn, or at the link in our bio! I can’t wait to share the next adoptable pup with you soon! #dogsoftiktok #adoptdontshop",
        "embedUrl": "https://www.tiktok.com/player/v1/7671257081650957581?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oIpLj4PLGQreKrf7A9LIkMjzCCe2UiHQIRAHI6~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=EP%2Fk8Tq3WOBjTn3HMwRu4EyIuWs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=sg1",
        "viewCount": 50800,
        "thumbnail": "/social/tiktok/madmax_fluffyroad-2.jpg"
      },
      {
        "id": "7668659650736262414",
        "title": "Birdie needs a nest ❤️ ✨MEET BIRDIE✨ 4 years old Birdie is such a special little girl. She was all enthusiasm and kisses the second we met, took to the backpack immediately, and wanted to say hi to every single person we passed. She's dog-friendly, great with commands and absolutely showed off playing fetch. Just don't bother with chicken fingers. She's not interested. I tried for 20 minutes. Zero dice. ✨LIKES✨ Bully sticks Rope toys Playing fetch Wrastlin’ Giving kisses People Pup cups ✨DISLIKES✨ Chicken fingers Miami Vice Dog Backpack by @Little Chonk  Birdie is available for adoption via The North Hempstead Animal Shelter, their location in Port Washington, NY, or at the link in bio! I can’t wait to share the next adoptable pup with you soon! #dogsoftiktok #adoptdontshop",
        "embedUrl": "https://www.tiktok.com/player/v1/7668659650736262414?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oAXjWGkzqxDtXQvsBhFEgzD5EbARqYlIIffrSI~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=UyknaT%2F4M7OUwltEpONsO0V8w%2Bc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=sg1",
        "viewCount": 44100,
        "thumbnail": "/social/tiktok/madmax_fluffyroad-3.jpg"
      }
    ]
  },
  "TikTok:@hi.this.is.tatum": {
    "icon": "/social/tiktok/hi.this.is.tatum.jpg",
    "media": [
      {
        "id": "7682566319388101919",
        "title": "Roob Fwee, my Furrend. Todd and the Lindas are on our hearts today. 🤎 @tuckerbudzyn",
        "embedUrl": "https://www.tiktok.com/player/v1/7682566319388101919?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-i-photomode-us/6933c3de8fb049afae65643f9b9041d8~tplv-photomode-image.jpeg?dr=14555&x-expires=1789023600&x-signature=WY3P1TbiLv2jqnBM3RCRYPKK1Js%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=my2&ftpl=1",
        "viewCount": 538400,
        "thumbnail": "/social/tiktok/hi.this.is.tatum-1.jpg"
      },
      {
        "id": "7681454623068114206",
        "title": "Determination is a virtue I fink.",
        "embedUrl": "https://www.tiktok.com/player/v1/7681454623068114206?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/oseEGlDSFu5KmAaTJRrGAB1EjuTQQVUfAqgnXE~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=lqqsmyVYG5xbYINOVBWnQv2ZHjg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 296000,
        "thumbnail": "/social/tiktok/hi.this.is.tatum-2.jpg"
      },
      {
        "id": "7677373846667808030",
        "title": "These runners work good!",
        "embedUrl": "https://www.tiktok.com/player/v1/7677373846667808030?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/oo49ovCiHl3AiLCAUERAaBuElTAIA6oBigDhu~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=ASOGWwONyhtoa7wjubSOSie5vjg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 241300,
        "thumbnail": "/social/tiktok/hi.this.is.tatum-3.jpg"
      }
    ]
  },
  "TikTok:@cocothemaltesedog": {
    "icon": "/social/tiktok/cocothemaltesedog.jpg",
    "media": [
      {
        "id": "6817995642200214789",
        "title": "What if all delivery workers looked like this🐶🥺 #fyp #petvlog #hoopsathome #dog #viral #foryou",
        "embedUrl": "https://www.tiktok.com/player/v1/6817995642200214789?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/8bd6694800e14f279b0ffe8039bd7c57~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=yYZ9JlAQ3xUO13CAmrQpBczFQeU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 66900000,
        "thumbnail": "/social/tiktok/cocothemaltesedog-1.jpg"
      },
      {
        "id": "7432166168024141099",
        "title": "These trick-or-treaters are getting out of hand🔪🤣🩸 #fyp #dog #dogsoftiktok",
        "embedUrl": "https://www.tiktok.com/player/v1/7432166168024141099?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oMjAEDAFNIAhBRAgifEJ0vQFwmtHDfiCS4gngI~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=hS%2Fcyv64UdP1aRxNk%2Bt6x50CWr0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 62500000,
        "thumbnail": "/social/tiktok/cocothemaltesedog-2.jpg"
      },
      {
        "id": "6726970061409504518",
        "title": "#fyp #foryou #foryourpage",
        "embedUrl": "https://www.tiktok.com/player/v1/6726970061409504518?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/7cebc6e27ad146fa82a5d4c9adf48776~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=mq214lr0yEBQ1G2eUQirfMG4UUk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 22900000,
        "thumbnail": "/social/tiktok/cocothemaltesedog-3.jpg"
      }
    ]
  },
  "TikTok:@crusoe_dachshund": {
    "icon": "/social/tiktok/crusoe_dachshund.jpg",
    "media": [
      {
        "id": "7082098851770993966",
        "title": "So graceful in his Speedo 😅 #dogs #dogsoftiktok stitched with @Sara Carson & The Super Collie",
        "embedUrl": "https://www.tiktok.com/player/v1/7082098851770993966?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/bdd9553b212b42768d9b683b2fe9b64d_1648929637~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=mDxlis4gCm4MBvhZ9Ds%2FX7yXdjU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 21900000,
        "thumbnail": "/social/tiktok/crusoe_dachshund-1.jpg"
      },
      {
        "id": "7140662747376766251",
        "title": "If dogs went to school.. 🤗 #dachshunds #weens #backtoschool #fyp",
        "embedUrl": "https://www.tiktok.com/player/v1/7140662747376766251?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/fde71ebf4672447db082dece81d7c386_1662565119~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=LZQyC5aHfnikBe3X%2BPCx0UXx%2BMk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 5500000,
        "thumbnail": "/social/tiktok/crusoe_dachshund-2.jpg"
      },
      {
        "id": "7649399418008898830",
        "title": "“How about a post for mr Oakley Dokily?! Oakley is doing good! Like me, we’re both gettin’ older, but he’s still a young chap compared to me. He enjoys his naps these days.. and he still talks about “retiring” although I’m not sure what he’s planning to ‘retire from’.. 🤣”  ~ Crusoe",
        "embedUrl": "https://www.tiktok.com/player/v1/7649399418008898830?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-maliva-i-photomode-us/e77594ac4ef04db6bdd8d0476691cfda~tplv-photomode-image.jpeg?dr=14555&x-expires=1789023600&x-signature=h8NMDjOI59UHrINj%2BglVOFn%2Bkuo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=my2&ftpl=1",
        "viewCount": 66100,
        "thumbnail": "/social/tiktok/crusoe_dachshund-3.jpg"
      }
    ]
  },
  "TikTok:@samoyed_rintaro.kanon": {
    "icon": "/social/tiktok/samoyed_rintaro.kanon.jpg",
    "media": [
      {
        "id": "7671587651169881352",
        "title": "トルティーヤキッシュつくったら爆食してくれました！",
        "embedUrl": "https://www.tiktok.com/player/v1/7671587651169881352?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oQFeEjFqAgUab5Y2BADAIRdnROqg9CBEAvEvf2~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=hacNjcgH9JpdT9C3rxw9JLumdtM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1500000,
        "thumbnail": "/social/tiktok/samoyed_rintaro.kanon-1.jpg"
      },
      {
        "id": "7674172426300804370",
        "title": "ゴーヤチャンプルーつくってる間に空手の修行しました😂",
        "embedUrl": "https://www.tiktok.com/player/v1/7674172426300804370?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o4pqE2MUAAAqARnhgEF1gIUDxff6TzCEBECCAI~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=DM9qvHHtoQG59ifqho5PxyeL2dE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 770300,
        "thumbnail": "/social/tiktok/samoyed_rintaro.kanon-2.jpg"
      },
      {
        "id": "7658604183016197384",
        "title": "５歳の誕生日にバナナケーキつくったら爆食してくれました！",
        "embedUrl": "https://www.tiktok.com/player/v1/7658604183016197384?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/owBzQqURAENNXCD8BAgFQSfgIfp0qzECwAPqRA~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=16uj86OQ%2BNSNUzBxwB%2FZLBlol7k%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 686700,
        "thumbnail": "/social/tiktok/samoyed_rintaro.kanon-3.jpg"
      }
    ]
  },
  "TikTok:@pomekinako": {
    "icon": "/social/tiktok/pomekinako.jpg",
    "media": [
      {
        "id": "7670130051366554887",
        "title": "くるみちゃんのおこ顔可愛すぎる🤣笑 #pomeranian  #ポメラニアン  #犬  #多頭飼い  #怒る犬",
        "embedUrl": "https://www.tiktok.com/player/v1/7670130051366554887?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUEiqAaGB4mAYTrADlEAAIvnBAxbipBBxxnHI~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=feCCJby8fDMKFMQxiFiYLbWUPmc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 8962,
        "thumbnail": "/social/tiktok/pomekinako-1.jpg"
      },
      {
        "id": "7656003840197561618",
        "title": "ポメランチャーで戦争終結へ🫶 #pomeranian  #ポメラニアン  #癒し  #犬",
        "embedUrl": "https://www.tiktok.com/player/v1/7656003840197561618?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/okBBbvDQFA40PlfFARI2ACbEViyIQUAfgq5voE~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=ER4aIl0gm8%2Fvd8roNe0ctDrWZPg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 5283,
        "thumbnail": "/social/tiktok/pomekinako-2.jpg"
      },
      {
        "id": "7671579548156398866",
        "title": "毎日こんな感じ😳 まるでぬいぐるみ🧸 #pomeranian  #ポメラニアン  #犬  #癒し  #あごのせ",
        "embedUrl": "https://www.tiktok.com/player/v1/7671579548156398866?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oQIP9xQA4rALAIdsHCjPP7eWAnGfDEAgRAfUBb~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=m1N%2BoczyLMyX%2F3dz8rwmfINE3co%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 5012,
        "thumbnail": "/social/tiktok/pomekinako-3.jpg"
      }
    ]
  },
  "TikTok:@goldenretriever_luna": {
    "icon": "/social/tiktok/goldenretriever_luna.jpg",
    "media": [
      {
        "id": "7681260333020744981",
        "title": "Dogs should be allowed to sleep wherever they want! ☺️ #dog #goldenretriever #dogsoftiktok #dogs",
        "embedUrl": "https://www.tiktok.com/player/v1/7681260333020744981?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o4AfVFGCAZNRlDfKIGUBZRA7CDEEmqdcgACZE9~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=aUZC7gh4GyOeJVc2%2FB8YBD2CodA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 186400,
        "thumbnail": "/social/tiktok/goldenretriever_luna-1.jpg"
      },
      {
        "id": "7681823618061421844",
        "title": "Having a conversation with my dog…🤭 #dog #goldenretriever #dogsoftiktok #dogs #funny",
        "embedUrl": "https://www.tiktok.com/player/v1/7681823618061421844?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o4O2SeAQIfGA2g8LoATAEUoexAoMNiAAINepeL~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=U%2FCFO3LAEEBc3TknihOaQmsbMe0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 41500,
        "thumbnail": "/social/tiktok/goldenretriever_luna-2.jpg"
      },
      {
        "id": "7681865720333896981",
        "title": "Meet the golden retriever…💛😅 #dog #goldenretriever #dogsoftiktok #dogs #funnydog",
        "embedUrl": "https://www.tiktok.com/player/v1/7681865720333896981?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/okTJrDeIJANDV1Q4FQCmj0AvUeQSLCIcGccue2~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=2TF9Nw2%2Fz5s%2BfFAXP1PzehpkHXg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 20600,
        "thumbnail": "/social/tiktok/goldenretriever_luna-3.jpg"
      }
    ]
  },
  "TikTok:@chelleandlexihusky": {
    "icon": "/favicon.svg",
    "media": []
  },
  "TikTok:@sammcgraww": {
    "icon": "/social/tiktok/sammcgraww.jpg",
    "media": [
      {
        "id": "7679901900753407245",
        "title": "Never to young to educate on the terms cruelty free or animal testing. Jorgie often asks about Ted’s ear tattoo, and since she could talk I’d explain in simple terms why he has it. #crueltyfree #stopanimaltesting #beagle #rescuedog #familydog",
        "embedUrl": "https://www.tiktok.com/player/v1/7679901900753407245?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oAJfFAA8VJHRRPtREPLIAxGbIKAjfoAgQdeJkP~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=kIEFmDESi2gghlt9HA4pPCkGXr0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1300000,
        "thumbnail": "/social/tiktok/sammcgraww-1.jpg"
      },
      {
        "id": "7681035037726297357",
        "title": "Bully behavior isn’t cute. I’m here pouring my soul into my content that all has one underlying theme; kindness. I am and will never be in support of brands that sell special use goods in a country that requires testing by law, because corporate money should not be more important than ending animal testing. #stopanimaltesting #loreal #dogmom #rescuedog #crueltyfree",
        "embedUrl": "https://www.tiktok.com/player/v1/7681035037726297357?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oQlUfADmZhCDMFRjqVeBTASEgERYCZEIAAhIEZ~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=K08fvUNrKbN%2Bq34It5RfXCVDiOQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 35700,
        "thumbnail": "/social/tiktok/sammcgraww-2.jpg"
      },
      {
        "id": "7679534674317806862",
        "title": "One of the best gifts in life, is life. I am so happy I can help the intended parents dream of expanding their family come true.  #eggdonation #eggdonor #lgbtq #ivf #travelday",
        "embedUrl": "https://www.tiktok.com/player/v1/7679534674317806862?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oYGzbDkfQAS1GsAE3DYEjiAAvIERgAFQqmC1kf~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=EVolFoslmVoLjy846hO7xnYnN%2F0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 21900,
        "thumbnail": "/social/tiktok/sammcgraww-3.jpg"
      }
    ]
  },
  "TikTok:@eltonthegoldenretriever": {
    "icon": "/social/tiktok/eltonthegoldenretriever.jpg",
    "media": [
      {
        "id": "7007521724824571141",
        "title": "Needed some comfort #🥺 #fyp #fy #goldenretriever #dogtok #dogs #",
        "embedUrl": "https://www.tiktok.com/player/v1/7007521724824571141?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/41113e752db14ce38eaa27d84e3c14c8~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=Pjg1Iz4E9zTTTQj1g4miT6P7ts0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 16600000,
        "thumbnail": "/social/tiktok/eltonthegoldenretriever-1.jpg"
      },
      {
        "id": "6919541672737213697",
        "title": "Elton took it to the next level... #fyp #foryourpage #dogsoftiktok #golden",
        "embedUrl": "https://www.tiktok.com/player/v1/6919541672737213697?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/31133f0b608445fb8ae88b1d61c1bfec_1611081346~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=5UoxUFVDY1SjV6KZPSw8Dk3OMg8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 13000000,
        "thumbnail": "/social/tiktok/eltonthegoldenretriever-2.jpg"
      },
      {
        "id": "7316209071105772832",
        "title": "Elton smelt an imposter and took no prisoners…#fatherchristmas #santaclaus #christmaseve #dogdad",
        "embedUrl": "https://www.tiktok.com/player/v1/7316209071105772832?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast2a-p-0037-euttp/3b11b0bad6e2457eb57209b4288905eb_1703437675~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=%2BAvD%2BokshKenl4sCeCjPyFmj7KE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 370300,
        "thumbnail": "/social/tiktok/eltonthegoldenretriever-3.jpg"
      }
    ]
  },
  "TikTok:@olliepopmaltipoo": {
    "icon": "/social/tiktok/olliepopmaltipoo.jpg",
    "media": [
      {
        "id": "7172736197347872043",
        "title": "Weekend coffee dates are tradition now ❤️",
        "embedUrl": "https://www.tiktok.com/player/v1/7172736197347872043?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/ocEE2LMeHCsfHwGLIelQCkBAIDOUrbZFCAWArs~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=7oVcYEQR8rUBHBt9EzzdZZDOTNE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 19300000,
        "thumbnail": "/social/tiktok/olliepopmaltipoo-1.jpg"
      },
      {
        "id": "7424659419650084127",
        "title": "He takes such good care of them 🥺",
        "embedUrl": "https://www.tiktok.com/player/v1/7424659419650084127?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-i-photomode-us/be89e5f185fe4c81bb84031765e2a809~tplv-photomode-image.jpeg?dr=14555&x-expires=1789023600&x-signature=%2BdOuX0wAbQntFwGsPCHsJ%2BYm6vM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=my2&ftpl=1",
        "viewCount": 13000000,
        "thumbnail": "/social/tiktok/olliepopmaltipoo-2.jpg"
      },
      {
        "id": "7672893295781055757",
        "title": "Always happy to be included ❤️",
        "embedUrl": "https://www.tiktok.com/player/v1/7672893295781055757?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oYe3dOA98AQx06zUKMjUNeCOLQHkXIpVWy3Qte~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=vnG9FNLcuG7X48jGPf1bxiHsY5g%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1300000,
        "thumbnail": "/social/tiktok/olliepopmaltipoo-3.jpg"
      }
    ]
  },
  "TikTok:@lycheeisachihuahua": {
    "icon": "/social/tiktok/lycheeisachihuahua.jpg",
    "media": [
      {
        "id": "7666485511434898708",
        "title": "😋😋😋 #chihuahua #fyp",
        "embedUrl": "https://www.tiktok.com/player/v1/7666485511434898708?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oE9JcD8QWAyfU7h4zACSjNAjfgBpWaIfMorapJ~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=mkTyrYrRZkDht44NwYuNIxJcgQ4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 517,
        "thumbnail": "/social/tiktok/lycheeisachihuahua-1.jpg"
      },
      {
        "id": "7640530161657548053",
        "title": "#chihuahua #吉娃娃",
        "embedUrl": "https://www.tiktok.com/player/v1/7640530161657548053?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-i-photomode-sg/486a085d92af4cddb8f61095e70c05b2~tplv-photomode-image.jpeg?dr=14555&x-expires=1789023600&x-signature=oVb%2FTMtS4xAzLzJoh9BQNgqsPpQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=my2&ftpl=1",
        "viewCount": 417,
        "thumbnail": "/social/tiktok/lycheeisachihuahua-2.jpg"
      },
      {
        "id": "7593792211423169813",
        "title": "🍴The sea The sea | Dog friendly  #chihuahua #London #theseathesea",
        "embedUrl": "https://www.tiktok.com/player/v1/7593792211423169813?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/owBQIpWFDQr7OF0DAbFCUaRPJBfppSBIEfgqEY~tplv-tiktokx-dmt-logom:tos-alisg-i-0068/os47E3CpBgAIhBRnAETdfA7AiYrDYFfHpUNkTE.image?dr=14573&x-expires=1789023600&x-signature=90iROvcLazzAU3yLstH8jrUuKCQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 380,
        "thumbnail": "/social/tiktok/lycheeisachihuahua-3.jpg"
      }
    ]
  },
  "TikTok:@itskevintheberner": {
    "icon": "/social/tiktok/itskevintheberner.jpg",
    "media": [
      {
        "id": "7164407330681965870",
        "title": "Random Things My Dog Doesn’t Like: Part 10  #ChevyEVSongContest #dogsoftiktok #bernesemountaindog #kevintheberner #cutedog",
        "embedUrl": "https://www.tiktok.com/player/v1/7164407330681965870?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/b2894288cd19450588a70179f137db17_1668093582~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=ujrnCp7HMrGcujEEworrvbYNgaU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 4600000,
        "thumbnail": "/social/tiktok/itskevintheberner-1.jpg"
      },
      {
        "id": "7540008803383725342",
        "title": "Too hot for walkies? #BlueBuffaloPartner  Keep your pup happy indoors AND help shelter dogs. 🐾💙 Here’s how:   1️⃣ BUY any bag of @Blue Buffalo Protection Formula (July 15–Aug 31)  2️⃣ EARN $3 cash back with Ibotta  3️⃣ BLUE donates $1 per offer redemption to help the pets at Best Friends Animal Society (up to $200K!) #BlueBuffalo",
        "embedUrl": "https://www.tiktok.com/player/v1/7540008803383725342?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/oUGkvFBRVDoFo7E4fARWAbhxQfWHLsEEq4Qr3L~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=T0T3%2BrC8S6jeYXRzevP3o%2FiVPp0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 307300,
        "thumbnail": "/social/tiktok/itskevintheberner-2.jpg"
      },
      {
        "id": "7516582649654250783",
        "title": "Being Moms pawsonal trainer can be RUFF!",
        "embedUrl": "https://www.tiktok.com/player/v1/7516582649654250783?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast8-p-0068-tx2/oo9GLJazQJ5AyFfBQAAeIeovUDQfhgAqDQyWAS~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=Ywz3ZEyf63hbUgRDsnPY5c9PYes%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 3987,
        "thumbnail": "/social/tiktok/itskevintheberner-3.jpg"
      }
    ]
  },
  "TikTok:@jademinipinscher": {
    "icon": "/social/tiktok/jademinipinscher.jpg",
    "media": [
      {
        "id": "7676964223418649864",
        "title": "Ja denuncia logo né titias? 😂😅 . . . . . . . #pinscher #minipinscher #pinscherzero #pinscherbrasil #pinscherminiatura",
        "embedUrl": "https://www.tiktok.com/player/v1/7676964223418649864?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oMQOcjCVxFKDxLfTg4eGlAEIo4DeA5yZOQpSIB~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=AW%2BLLkuk2P%2FzTLJBSwwLsGIqo5I%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 45500,
        "thumbnail": "/social/tiktok/jademinipinscher-1.jpg"
      },
      {
        "id": "7668057854519151879",
        "title": "Titias, será que posso mimir uns diazinhos na casinha de vocês? 🥹🥰🐾 . . . . . . #pinscher #minipinscher #pinscherzero #pinscherbrasil #pinscherminiatura",
        "embedUrl": "https://www.tiktok.com/player/v1/7668057854519151879?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oAIqILBbRaVaAUDq3FBUfKNoug7EjE1gcemhBL~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=P4ID%2FPHemmH%2F3682FsrOQLcHNvQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 3192,
        "thumbnail": "/social/tiktok/jademinipinscher-2.jpg"
      },
      {
        "id": "7677335828405734674",
        "title": "Gosto de saber o que tem de bom pra mim 😂🤭. . . . . . . #pinscher #minipinscher #pinscherzero #pinscherbrasil #pinscherminiatura",
        "embedUrl": "https://www.tiktok.com/player/v1/7677335828405734674?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o0AABFRLBq1IfAcw6uBbPIcJqRYIiAiwSrICqa~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=KUjNb8T%2FmtD7%2F%2FDBYfdqpHs6n7s%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 2433,
        "thumbnail": "/social/tiktok/jademinipinscher-3.jpg"
      }
    ]
  },
  "TikTok:@ryderthedal": {
    "icon": "/social/tiktok/ryderthedal.jpg",
    "media": [
      {
        "id": "7204892930425785646",
        "title": "Calling the po-po for REAL 👮‍♀️ #dalmatian #dalmata #puppytok #dalmatianpuppy",
        "embedUrl": "https://www.tiktok.com/player/v1/7204892930425785646?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/110774b7e91242cfb091b265d685c836_1677519867~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=E%2FMY5TSHPniCN7AaiSrB4wyOiXc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 3500000,
        "thumbnail": "/social/tiktok/ryderthedal-1.jpg"
      },
      {
        "id": "7681416538603130126",
        "title": "Looking for the viral @Multipet International, Inc. Lambchop Blinx box for my LambChop obsessed dog 🐑 Which one do you think we’ll get?!  #dogs #lambchop #blindbox #dogs",
        "embedUrl": "https://www.tiktok.com/player/v1/7681416538603130126?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/owASfI7eVHKL3zVcAGC6KDVMLD9IkIej7IFNZ9~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=yxqfqjq4TdaekCLjXTFxmZHUukk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1400000,
        "thumbnail": "/social/tiktok/ryderthedal-2.jpg"
      },
      {
        "id": "7448472230234721579",
        "title": "He’s so judgey 😀 #dog #dogs #dogtok",
        "embedUrl": "https://www.tiktok.com/player/v1/7448472230234721579?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/os3QIkwlVGAgSsAoAJLnHjOACIeAiESvQ9edeI~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=UC%2F004UW4mtSITLrbphDzIyh9gs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 285400,
        "thumbnail": "/social/tiktok/ryderthedal-3.jpg"
      }
    ]
  },
  "TikTok:@penguinthechihuahua": {
    "icon": "/social/tiktok/penguinthechihuahua.jpg",
    "media": [
      {
        "id": "6748161067467296006",
        "title": "Are you going trick or treating this year?🐶            #cute#fyp#foryou#spookyseason",
        "embedUrl": "https://www.tiktok.com/player/v1/6748161067467296006?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/7abd1b1f691b49d1a71f75955632fbf6~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=HXKuGjH9mLjxdSucg2JRFrMoyk8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1400000,
        "thumbnail": "/social/tiktok/penguinthechihuahua-1.jpg"
      },
      {
        "id": "6760828488841776390",
        "title": "Rate my dance moves on a scale of 1-10 😎🐶  #cute#foryou#fyp",
        "embedUrl": "https://www.tiktok.com/player/v1/6760828488841776390?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/81c5760b889b468f913bab2c30dd3bfd_1574128057~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=yVNP0a0yK759LBEyMwcsfxhmmUA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 467000,
        "thumbnail": "/social/tiktok/penguinthechihuahua-2.jpg"
      },
      {
        "id": "6798599161664130310",
        "title": "How are my rapping skills?😎🐶🌈 #cute#fyp#foryou",
        "embedUrl": "https://www.tiktok.com/player/v1/6798599161664130310?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/43b499116c9540dd8c9b1051bff97d95_1582927405~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=mWPj2LGFj8Cbcd2NCk0PIPiFvIk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 117800,
        "thumbnail": "/social/tiktok/penguinthechihuahua-3.jpg"
      }
    ]
  },
  "TikTok:@mooseandpoppy": {
    "icon": "/social/tiktok/mooseandpoppy.jpg",
    "media": [
      {
        "id": "7468043720957447467",
        "title": "Toddler 🤝 Lab #toddler #labrador #zoomies #dog",
        "embedUrl": "https://www.tiktok.com/player/v1/7468043720957447467?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/os5kES3wrBAl0wAdAei6DRnACEbgNCPoIHfaji~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=wlkXdjQ6v5yMVp%2BqH7G0Q06I6eA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 8200000,
        "thumbnail": "/social/tiktok/mooseandpoppy-1.jpg"
      },
      {
        "id": "7603398064585329933",
        "title": "One year later and their bond is only growing stronger 🫶🏻 #dog #funnydog #babylaugh #labrador #fyp",
        "embedUrl": "https://www.tiktok.com/player/v1/7603398064585329933?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/osfRIEJecuJZOdzEo4BFIAMsgCFlDpALhHDScE~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=e26BZPeIXvfNk99OUGvdz2ULq%2BM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 6000000,
        "thumbnail": "/social/tiktok/mooseandpoppy-2.jpg"
      },
      {
        "id": "7672221316275113230",
        "title": "Five years of Moose and Poppy🤎🤎 #dog #labrador #chocolatelab #doglover #familydog",
        "embedUrl": "https://www.tiktok.com/player/v1/7672221316275113230?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-useast5-p-0068-tx/oUIApiBCDccfJ2PBM1XXAjp5lcICIyNIBJNAiw~tplv-tiktokx-origin.image?dr=14575&x-expires=1789023600&x-signature=fIvMNIr18%2BwaIZfXxI%2FXyR%2F0L3w%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 4012,
        "thumbnail": "/social/tiktok/mooseandpoppy-3.jpg"
      }
    ]
  },
  "TikTok:@ourgoldenbros": {
    "icon": "/social/tiktok/ourgoldenbros.jpg",
    "media": []
  },
  "TikTok:@goodythegolden": {
    "icon": "/favicon.svg",
    "media": []
  },
  "TikTok:@soyuncosito": {
    "icon": "/social/tiktok/soyuncosito.jpg",
    "media": [
      {
        "id": "7295487059031051525",
        "title": "¿Ganaré? 🐶🎃 #halloween #petsoftiktok #yorkie #doglover #perro",
        "embedUrl": "https://www.tiktok.com/player/v1/7295487059031051525?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/0f69ab6fe4e1433b88dc968b36d311c9_1698612954~tplv-tiktokx-dmt-logom:tos-useast2a-v-0068/ocL21A6UfAeMFDvAIZiYDGGIkf7egYxAR2sAQG.image?dr=14573&x-expires=1789023600&x-signature=HbR3X5pIn13ZpaWFE1F7wruCj5c%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 5000000,
        "thumbnail": "/social/tiktok/soyuncosito-1.jpg"
      },
      {
        "id": "7320023384673242374",
        "title": "Señal de perrito jubilado 🐶 #perro #perrostiktokers #yorkshire #yorkie #doglover #yorkiesoftiktok",
        "embedUrl": "https://www.tiktok.com/player/v1/7320023384673242374?autoplay=0&loop=0",
        "thumbnailUrl": "https://p19-common-sign.tiktokcdn.com/tos-maliva-p-0068/69615611c96e4277ba0a0270170465d9_1704325768~tplv-tiktokx-dmt-logom:tos-useast2a-v-0068/oc3LArKEfGIzKAQLAUAQj5IFwfE1fzISCDwEgt.image?dr=14573&x-expires=1789023600&x-signature=44UR%2FyrNxGfqLZYRnUqjfo2TcS0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1700000,
        "thumbnail": "/social/tiktok/soyuncosito-2.jpg"
      },
      {
        "id": "7425784285505850629",
        "title": "¿Cuál debería ser mi próximo destino? ✈️🐶 #perrito #perritostiktokers #perritoviajero #viajeconmascota #cachorro #viajeconperro",
        "embedUrl": "https://www.tiktok.com/player/v1/7425784285505850629?autoplay=0&loop=0",
        "thumbnailUrl": "https://p16-common-sign.tiktokcdn.com/tos-maliva-p-0068/o8i85AREEBAf3IANAnAQulbIJCi9QrDBaHyfw6~tplv-tiktokx-dmt-logom:tos-useast2a-v-0068/okSGeAfAIAtAQvLgOypAQX1eb7ajE9IGbICtmz.image?dr=14573&x-expires=1789023600&x-signature=9eQXjdu3VZAjh46Dh8mTSLLmqBs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
        "viewCount": 1300000,
        "thumbnail": "/social/tiktok/soyuncosito-3.jpg"
      }
    ]
  }
};
