const search = document.getElementById("searchBox");
const searchForm = document.getElementById("search-form");
const searchResult = document.getElementById("result");
const showMore = document.getElementById("show-more");
const apiKey = "zM63o-J-rQ2y8spyIrlYLigS48QGpZmLwAOqXGxZdkM";

let searchTerm = "";
let currentPage = 1;

async function searchImage() {
  searchTerm = search.value;
  const url = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${searchTerm}&client_id=${apiKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  searchResult.innerHTML = "";

  results.forEach(result => {
    const img = document.createElement("img");
    img.src = result.urls.small;
    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";
    imgLink.appendChild(img);
    searchResult.appendChild(imgLink);
  });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentPage = 1;
  searchImage();
});
showMore.addEventListener("click", () => {
  currentPage++;
  searchImage();
});

