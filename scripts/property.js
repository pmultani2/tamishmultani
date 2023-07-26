const img = document.getElementById("property-img");
const address = document.getElementById("property-address")
const bedBath = document.getElementById("property-bed-bath");
const price = document.getElementById("property-price");
const description = document.getElementById("property-description");

const params = new URLSearchParams(window.location.search);
const slug = params.get("q"); 

getData(slug);

async function getData(slug) {
  const response = await fetch("https://realtor-idx-test.onrender.com/" + slug);
  const data = await response.json();
  img.src = data.media[0].largeUrl;
  address.innerText = data.fullAddress;
  if (data.bedroomCount !== null) {
    bedBath.innerText += data.bedroomCount + " BD";
  }
  if (data.bathCount !== null && bedBath.innerText.length > 0) {
    bedBath.innerText += " | " + bedBath.innerText + " BA";
  } else if (data.bathCount !== null) {
    bedBath.innerText = bedBath.innerText + " BA";
  }
  price.innerText = "$" + data.salesPrice.toLocaleString();
  description.innerHTML = data.description;
}