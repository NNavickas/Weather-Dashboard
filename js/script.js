// declare jQuery variables
var searchEl = $("#search-form");
var inputEl = $("#search-input");
var buttonEl = $("#search-button");
var historyEl = $("#history");
var clearEl = $("#clear-button");

// API endpoint for geocoding
const geocodeApiEndpoint = "https://api.openweathermap.org/geo/1.0/direct?";

// API endpoint for 5-day forecast
const forecastApiEndpoint = "https://api.openweathermap.org/data/2.5/forecast?";

// API key
const apiKey = "7cecd6cf1a25249cb6676d7e0009bd81";

// Units (imperial or metric)
const units = "metric";

$("#search-button").on("click", function (event) {
  event.preventDefault();
  // Get the city value from the input box
  const city = $("#search-input").val();

  // Build the API query URL for geocoding
  const geocodeQueryURL =
    geocodeApiEndpoint + "q=" + city + "&limit=1&appid=" + apiKey;

  // Make the AJAX request for geocoding
  $.ajax({
    url: geocodeQueryURL,
    type: "GET",
    success: function (geocodeData) {
      // Get the latitude and longitude from the geocodeData
      const lat = geocodeData[0].lat;
      const lon = geocodeData[0].lon;

      console.log(geocodeQueryURL);

      // Build the API query URL for 5-day forecast
      const forecastQueryURL =
        forecastApiEndpoint +
        "lat=" + lat +
        "&lon=" + lon +
        "&units=" + units +
        "&appid=" +apiKey;

      // Make the AJAX request for 5-day forecast
      $.ajax({
        url: forecastQueryURL,
        type: "GET",
        success: function (forecastData) {
          console.log(forecastData);
          console.log(forecastQueryURL);
        },
        error: function (error) {
          console.error("Error getting 5-day forecast: ", error);
        },
      });
    },
    error: function (error) {
      console.error("Error getting geocode data: ", error);
    },
  });
});

// function to render the searched city current weather
function displayCurrentCity() {

$.ajax({
  url: forecastQueryURL,
  method: "GET"
}).then(function(forecastData) {
  // Get the city name from the API response
  var city = forecastData.list.city.name;
  
  // Get the current date
  var currentDate = new Date();
  
  // Get the temperature from the API response
  var temperature = forecastData.list[0].main.temp;
  
  // Get the wind speed from the API response
  var windSpeed = forecastData.list[0].wind.speed;
  
  // Get the humidity from the API response
  var humidity = forecastData.list[0].main.humidity;
  
  // Update the HTML with the extracted data
  $("#current").text(city + " - " + currentDate.toLocaleDateString());
  $("#tempDay2").text("Temp: " + temperature + "°C");
  $("#windDay2").text("Wind Speed: " + windSpeed + "m/s");
  $("#humidityDay2").text("Humidity: " + humidity + "%");
  displayCurrentCity();
});
console.log(windSpeed);
}



//   const apiKey = "&limit=1&appid=7cecd6cf1a25249cb6676d7e0009bd81";

// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=` + inputEl + `&limit=1&appid=7cecd6cf1a25249cb6676d7e0009bd81`)
//   .then(response => response.json())
//   .then(data => {
//     const lat = data.coord.lat;
//     const lon = data.coord.lon;
//     buildFinalQueryURL(lat, lon);
//   });
// }

//build Final Query URL using input from form
// function buildFinalQueryURL(event) {
//   event.preventDefault();
//   // FinalQueryURL is the url we'll use to query the API
//   const lat = data.coord.lat;
//   const lon = data.coord.lon;
//   var finalQueryURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7cecd6cf1a25249cb6676d7e0009bd81";
//   console.log(finalQueryURL);
//  }
// function buildFinalQueryURL(lat, lon) {
//   var finalQueryURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7cecd6cf1a25249cb6676d7e0009bd81";
//   console.log(finalQueryURL);
// }

// FUNCTION
// // Update the page with the data
// function getCurrentLocation(position) {

//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   console.log(latitude);
//   console.log(longitude);

//   $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=7cecd6cf1a25249cb6676d7e0009bd81&units=metric", function (data) {
//       console.log(data);
//       console.log(weather.main.temp);
//   })

// };

// Update page function

// // clear function
// function clear() {
//   $("#history").empty();
// }

// CLICK EVENTS
// submit form
// $("#search-button").on("click", function(event) {
//   event.preventDefault();
//   clear;
//   var queryURL = buildQueryURL();
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//   //.then(updatePage);
// });

// // clear history
// $("#clear-button").on("click", clear);

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
// //       });
// //   });

// // create the history list
// // push onto an array?
// function printHistory(previous) {
//   var listEl = $("<li>");
//   var listDetail = previous
//   listEl.addClass("list-group-item").text(listDetail);
//   listEl.appendTo(historyEl);

//   nextFunction()
// }

// function nextFunction() {

// }
