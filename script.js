const links = [
  { name: "尾身株式会社 公式ホームページ", url: "https://omi-co-ltd.github.io/on/" },
  { name: "オンラインストア", url: "https://docs.google.com/forms/d/e/1FAIpQLSerigx5sZM1B-VG9dNvKMQ72soiATaavHCtYwkQoQtjblK-jw/viewform?usp=sf_link" },
  { name: "OMIPASS", url: "https://omi-co-ltd.github.io/omipass/" },
  { name: "OmiMovie", url: "https://sites.google.com/view/new-omi-movie-jp/%E3%83%9B%E3%83%BC%E3%83%A0" },
  { name: "OMI CINEMA", url: "https://omicinema-reservation.reserven.jp/" },
  { name: "OMI HOTEL", url: "https://omi-co-ltd.github.io/omihotel/" },
  { name: "NEWS OMI", url: "https://omi-co-ltd.github.io/news/" },
  { name: "尾身天堂", url: "https://omi-co-ltd.github.io/omitendo/" },
  { name: "おみ日記", url: "https://omi-co-ltd.github.io/ominikki/" },
  { name: "お問い合わせフォーム", url: "https://docs.google.com/forms/d/e/1FAIpQLSfbVolFZMITt5DCv72DeYjkBU4YGPfXohDqqs2gKyhaq2SYRQ/viewform?usp=sf_link" }
];

const listElement = document.getElementById("link-list");

links.forEach(link => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.name;
  a.target = "_blank";
  li.appendChild(a);
  listElement.appendChild(li);
});
