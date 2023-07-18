const searchBar = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn-a")

searchBar.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.href = "search.html?q=" + searchBar.value;
    searchBtn.click();
  }
});