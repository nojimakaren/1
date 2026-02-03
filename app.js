// -------------------------------
// 高知県観光スポット地図（Leaflet.js）
// -------------------------------

// 1. 地図初期表示（高知県全体）
const map = L.map("map").setView([33.4, 133.4], 8);

// 2. 地図タイル（OpenStreetMap）
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// 3. カラーマーカー作成関数
const createIcon = (color) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });
};

// 4. ジャンル別アイコン
const icons = {
  nature: createIcon("green"),   // 自然
  history: createIcon("red"),    // 歴史・文化
  sea: createIcon("blue")        // 海
};

// 5. 観光スポットデータ
const spots = [
  // 香北町
  {
    name: "やなせたかし記念館",
    area: "香北町",
    genre: "歴史・文化",
    icon: icons.history,
    lat: 33.5645,
    lng: 133.5621,
    station: "高知駅から車で約40分",
    airport: "高知龍馬空港から車で約30分",
    budget: "入館料 約800円",
    homepage: "https://anpanman-museum.net/",
    youtube: "https://www.youtube.com/results?search_query=やなせたかし記念館"
  },
  {
    name: "物部川",
    area: "香北町",
    genre: "自然",
    icon: icons.nature,
    lat: 33.5530,
    lng: 133.5850,
    station: "高知駅から車で約40分",
    airport: "高知龍馬空港から車で約30分",
    budget: "散策無料",
    homepage: "https://www.city.kami.lg.jp/",
    youtube: "https://www.youtube.com/results?search_query=物部川"
  },
  {
    name: "野市動物公園",
    area: "香北町",
    genre: "自然",
    icon: icons.nature,
    lat: 33.5815,
    lng: 133.5610,
    station: "高知駅から車で約40分",
    airport: "高知龍馬空港から車で約25分",
    budget: "入園無料",
    homepage: "https://www.city.kami.lg.jp/soshiki/shizen/256.html",
    youtube: "https://www.youtube.com/results?search_query=野市動物公園"
  },
  // 高知市
  {
    name: "高知城",
    area: "高知市",
    genre: "歴史・文化",
    icon: icons.history,
    lat: 33.5597,
    lng: 133.5311,
    station: "高知駅から徒歩約20分／路面電車約15分",
    airport: "高知龍馬空港からバスで約30分",
    budget: "入場料 約500円",
    homepage: "https://kochipark.jp/kochijyo/",
    youtube: "https://www.youtube.com/results?search_query=高知城"
  },
  {
    name: "桂浜",
    area: "高知市",
    genre: "海",
    icon: icons.sea,
    lat: 33.4969,
    lng: 133.5736,
    station: "高知駅からバスで約30分",
    airport: "高知龍馬空港から車で約30分",
    budget: "散策無料（周辺施設 500〜1,500円）",
    homepage: "https://katsurahama-park.com/",
    youtube: "https://www.youtube.com/results?search_query=桂浜+高知"
  },
  {
    name: "帯屋町商店街",
    area: "高知市",
    genre: "歴史・文化",
    icon: icons.history,
    lat: 33.5592,
    lng: 133.5335,
    station: "高知駅から徒歩約10分",
    airport: "高知龍馬空港から車で約25分",
    budget: "散策無料（買い物や食事は別）",
    homepage: "https://obiyamachi.com/",
    youtube: "https://www.youtube.com/results?search_query=帯屋町商店街"
  },
  // 室戸町
  {
    name: "室戸岬",
    area: "室戸町",
    genre: "海",
    icon: icons.sea,
    lat: 33.2625,
    lng: 134.0950,
    station: "高知駅から車で約2時間",
    airport: "高知龍馬空港から車で約2時間",
    budget: "見学無料（移動費別）",
    homepage: "https://www.muroto-kankou.com/",
    youtube: "https://www.youtube.com/results?search_query=室戸岬"
  },
  {
    name: "室戸世界ジオパーク",
    area: "室戸町",
    genre: "自然",
    icon: icons.nature,
    lat: 33.2733,
    lng: 134.1052,
    station: "高知駅から車で約2時間",
    airport: "高知龍馬空港から車で約2時間",
    budget: "入館料 約300円",
    homepage: "https://muroto-geo.jp/",
    youtube: "https://www.youtube.com/results?search_query=室戸ジオパーク"
  },
  // 四万十町
  {
    name: "四万十川",
    area: "四万十町",
    genre: "自然",
    icon: icons.nature,
    lat: 32.9918,
    lng: 132.9333,
    station: "高知駅から車で約2時間",
    airport: "高知龍馬空港から車で約2時間30分",
    budget: "散策無料／体験 3,000〜7,000円",
    homepage: "https://www.shimanto-kankou.com/",
    youtube: "https://www.youtube.com/results?search_query=四万十川"
  },
  {
    name: "佐田沈下橋",
    area: "四万十町",
    genre: "自然",
    icon: icons.nature,
    lat: 33.0265,
    lng: 132.8951,
    station: "高知駅から車で約2時間",
    airport: "高知龍馬空港から車で約2時間30分",
    budget: "見学無料",
    homepage: "https://www.shimanto-kankou.com/",
    youtube: "https://www.youtube.com/results?search_query=佐田沈下橋"
  },
  // 仁淀町
  {
    name: "仁淀川（仁淀ブルー）",
    area: "仁淀町",
    genre: "自然",
    icon: icons.nature,
    lat: 33.6700,
    lng: 133.4620,
    station: "高知駅から車で約1時間30分",
    airport: "高知龍馬空港から車で約1時間30分",
    budget: "散策無料／体験 3,000〜6,000円",
    homepage: "https://niyodoblue.jp/",
    youtube: "https://www.youtube.com/results?search_query=仁淀ブルー"
  },
  {
    name: "中津渓谷",
    area: "仁淀町",
    genre: "自然",
    icon: icons.nature,
    lat: 33.6811,
    lng: 133.4458,
    station: "高知駅から車で約1時間30分",
    airport: "高知龍馬空港から車で約1時間30分",
    budget: "入場無料",
    homepage: "https://www.town.niyodogawa.lg.jp/",
    youtube: "https://www.youtube.com/results?search_query=中津渓谷"
  }
];

// 6. マーカー作成（詳細情報ポップアップ）
spots.forEach(spot => {
  L.marker([spot.lat, spot.lng], { icon: spot.icon })
    .addTo(map)
    .bindPopup(`
      <strong>${spot.name}</strong><br>
      【${spot.area}／${spot.genre}】<br><br>

      🚉 <strong>高知駅から</strong><br>
      ${spot.station}<br><br>

      ✈️ <strong>高知龍馬空港から</strong><br>
      ${spot.airport}<br><br>

      💰 <strong>予算の目安</strong><br>
      ${spot.budget}<br><br>

      🌐 <a href="${spot.homepage}" target="_blank">公式ホームページ</a><br>
      ▶ <a href="${spot.youtube}" target="_blank">YouTube動画を見る</a>
    `);
});

// 7. 凡例（ジャンルの色分け説明）
const legend = L.control({ position: "bottomright" });
legend.onAdd = () => {
  const div = L.DomUtil.create("div", "legend");
  div.innerHTML = `
    <strong>ジャンル</strong><br>
    🔴 歴史・文化<br>
    🟢 自然<br>
    🔵 海
  `;
  return div;
};
legend.addTo(map);
