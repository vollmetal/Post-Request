const stockUL = document.getElementById("stockUL");

let request = new XMLHttpRequest();
request.open("GET", "https://endurable-bead-polo.glitch.me/stocks");
request.send();

function makePostRequest() {}

request.addEventListener("load", function () {
  let [stocks] = JSON.parse(this.response);

  let stockItems = `<ul>
  <li>${stocks.title}</li>
  <li>${stocks.symbol}</li>
  <li>${stocks.price}</li>
  <li>${stocks.quantity}</li>
  </ul>`
  stockUL.innerHTML = stockItems
});

