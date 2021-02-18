let ajaxBtn = document.getElementById("ajaxBtn");
let fetchBtn = document.getElementById("fetchBtn");

ajaxBtn.addEventListener(`click`, function () {
  console.log("Getting data from Star Wars Planets API, please wait...");
  $.ajax({
    url: `https://swapi.dev/api/planets/`,
    method: `GET`,
    success: function (response) {
      console.log(response);
      let results = response.results;
      for (const result of results) {
        console.log(result.name);
      }
      generateTable(results);
    },
    error: function (error) {
      if (error.status === 404) {
        console.log(`Error 404!! Not found`);
      } else {
        console.log(`Something went wrong`);
      }
    },
  });
});

fetchBtn.addEventListener(`click`, function () {
  console.log("Getting data from Star Wars Planets API, please wait...");

  fetch(`https://swapi.dev/api/planets/`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      let results = response.results;
      for (const result of results) {
        console.log(result.name);
      }
      generateTable(results)
    })
    .catch((error) => {
      if (error.status === 404) {
        console.log(`Error 404!! Not found`);
      } else {
        console.log(`Something went wrong`);
      }
    });
});

function generateTable(results) {
  for (i = 0; i < results.length; i++) {
    let name = results[i].name;
    let table = $("tbody");
    table.append(`<tr>
  <td>${name}</td>
  </tr>`);
  }
}
