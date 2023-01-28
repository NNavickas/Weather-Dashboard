// declare jQuery variables
var searchEl = $("#search-form");
var inputEl = $("#search-input");
var buttonEl = $("#search-button");
var historyEl = $("#history");
var clearEl = $("#clear-button");

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{country code}&limit=1&appid=7cecd6cf1a25249cb6676d7e0009bd81

// build Geo Query URL using input from form
function buildGeoQueryURL(event) {
//   // queryURL is the url we'll use to query the API
//   var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + inputEl + "&limit=1&appid=7cecd6cf1a25249cb6676d7e0009bd81";
//   console.log(queryURL);
//   event.preventDefault();
// }

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputEl}&limit=1&appid=7cecd6cf1a25249cb6676d7e0009bd81`)
  .then(response => response.json())
  .then(data => {
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    buildFinalQueryURL(lat, lon);
  });
event.preventDefault();
}

// build Final Query URL using input from form
// function buildFinalQueryURL(event) {
//   // FinalQueryURL is the url we'll use to query the API
//   const lat = data.coord.lat;
//   const lon = data.coord.lon;
//   var finalQueryURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7cecd6cf1a25249cb6676d7e0009bd81";
//   console.log(finalQueryURL);
//   event.preventDefault();
// }
function buildFinalQueryURL(lat, lon) {
  var finalQueryURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7cecd6cf1a25249cb6676d7e0009bd81";
  console.log(finalQueryURL);
}

// Update page function 


// clear function
function clear() {
  $("#history").empty();
}

// CLICK EVENTS
// submit form
$("#search-button").on("click", function(event) {
  event.preventDefault();
  clear;
  var queryURL = buildFinalQueryURL();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

// clear history
$("#clear-button").on("click", clear);


// declare variable to handle form submit
// include a prevent default
// var handleFormSubmit = function (event) {
//   event.preventDefault();


  // event listener for the search button click

  // API request to use the city entered before 'click' as the search term
// };


// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API_KEY}`)
//   .then(response => response.json())
//   .then(data => {
//     const lat = data.coord.lat;
//     const lon = data.coord.lon;
//     fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={API_KEY}`)
//       .then(response => response.json())
//       .then(forecastData => {
//         // do something with the forecast data
//       });
//   });

// create the history list
function printHistory(previous) {
  var listEl = $("<li>");
  var listDetail = previous
  listEl.addClass("list-group-item").text(listDetail);
  listEl.appendTo(historyEl);

  nextFunction()
}

function nextFunction() {
    
}


