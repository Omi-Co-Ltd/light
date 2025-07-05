const links = [
  { name: "Google", url: "https://www.google.com" },
  { name: "YouTube", url: "https://www.youtube.com" },
  { name: "Wikipedia", url: "https://www.wikipedia.org" },
  { name: "GitHub", url: "https://github.com" }
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