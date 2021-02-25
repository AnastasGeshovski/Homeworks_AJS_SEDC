// // ***** Arrow Exercise no1 **** //

// const ArraySum = () => {
//   const numbers = [10, 20, 30, 40];
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
// };

// // ***** Arrow Exercise no2 **** //

// let clickBtn = document.getElementById("clickBtn");
// let tbody = document.getElementById("tbody");

// clickBtn.addEventListener(`click`, function () {
//   console.log("Getting data from Cocktails API, please wait...");

//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       console.log(response);
//       let drinks = response.drinks;
//       for (const drink of drinks) {
//         console.log(drink.strDrink);
//       }
//       generateTable(drinks);
//     })
//     .catch((error) => {
//       if (error.status === 404) {
//         console.log(`Error 404!! Not found`);
//       } else {
//         console.log(`Something went wrong`);
//       }
//     });
// });

// let generateTable = (data) => {
//     tbody.innerHTML = "";
//   for (let i = 0; i < data.length; i++) {
//     let strDrink = data[i].strDrink;
//     table = $("tbody");
//     table.append(`<tr>
//           <td>${strDrink}</td>
//       </tr>`)
//   }
// };

