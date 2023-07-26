const resultsGrid = document.getElementById("results-grid");
const searchInput = document.getElementById("search-input");
let url = "https://realtor-idx-test.onrender.com/search";

getData(url);

searchInput.onsearch = function() {
  console.log(searchInput.value.length);
  if (searchInput.value.length > 0) {
    getData(url + "?q=" + searchInput.value);
  } else {
    getData(url);
  }
};

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    createResults(data.data.properties);
  } catch(err) {
    console.log(err);
    resultsGrid.parentElement.innerHTML = "<h1 class='bold' style='font-size:64px; text-align: center;'>404</h1>";
  }
}

function createResults(data) {
  for (let i = 0; i < data.length; i ++) {
    const result = document.createElement("a");
    result.className = "result";
    result.href = "property.html?q=" + data[i].slug;

    const image = document.createElement("img");
    image.className = "property-img";
    image.src = data[i].media[0].largeUrl;
    result.appendChild(image);

    const address = document.createElement("p");
    address.className = "property-address";
    address.innerText = data[i].name;
    result.appendChild(address);

    const bedBath = document.createElement("p")
    bedBath.className = "property-bed-bath";
    if (data[i].bedroomCount !== null) {
      bedBath.innerText = data[i].bedroomCount + " BD";
    }  
    if (data[i].bathCount !== null) {
      bedBath.innerText += " | " + data[i].bathCount + " BA";
    }
    result.appendChild(bedBath);

    const price = document.createElement("p");
    price.className = "property-price";
    price.innerText = "$" + data[i].salesPrice.toLocaleString();
    result.appendChild(price);

    resultsGrid.appendChild(result);
  }
}