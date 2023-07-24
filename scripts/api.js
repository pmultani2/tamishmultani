async function getData() {
  const response = await fetch('http://localhost:5500/search');
  const data = await response.json();
  console.log(data);
}

getData();
