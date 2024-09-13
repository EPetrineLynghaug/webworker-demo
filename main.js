if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(function (registration) {
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    })
    .catch(function (error) {
      console.log("ServiceWorker registration failed: ", error);
    });
}

// Create a new Web Worker instance
const worker = new Worker("worker.js");
// Specify the API URL for fetching the amiibo data
const apiUrl = "https://www.amiiboapi.com/api/amiibo/";
// Send the API URL to the worker
worker.postMessage(apiUrl);

let amiiboData = [];

worker.onmessage = function (event) {
  const data = event.data;

  if (data.error) {
    console.error("error fething data:", data.error);
    return;
  }
  amiiboData = data;
  displayData(data);
};

function displayData(data) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `
          Name: ${item.name},
          Game Series: ${item.gameSeries},
          Amiibo Series: ${item.amiiboSeries},
          `;
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    div.appendChild(img);
    output.appendChild(div);
  });
}

document.getElementById("search").addEventListener("input", function (event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredData = amiiboData.filter(
    (amiibo) =>
      amiibo.name.toLowerCase().includes(searchTerm) ||
      amiibo.gameSeries.toLowerCase().includes(searchTerm) ||
      amiibo.amiiboSeries.toLowerCase().includes(searchTerm)
  );
  displayData(filteredData);
});
