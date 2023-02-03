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
  getCoords(city);
});

function getCoords(city) {
  // Build the API query URL for geocoding
  const geocodeQueryURL =
    geocodeApiEndpoint + "q=" + city + "&limit=1&appid=" + apiKey;

  // Make the AJAX request for geocoding
  $.ajax({
    url: geocodeQueryURL,
    type: "GET",
    success: function (geocodeData) {
      // Get the latitude and longitude from the geocodeData
      // const lat = geocodeData[0].lat;
      // const lon = geocodeData[0].lon;
      getWeather(geocodeData[0]);

      console.log(
        "---------------\ngeocodeQueryURL: " +
          geocodeQueryURL +
          "\n---------------"
      );
    },
  });
}

// Build the API query URL for 5-day forecast

function getWeather(location) {
  var { lat, lon } = location; // deconstructing object data
  var city = location.name;
  console.log(location.name);
  console.log(city);
  console.log(lat, lon);

  const forecastQueryURL =
    forecastApiEndpoint +
    "lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=" +
    units +
    "&appid=" +
    apiKey;

  // Make the AJAX request for 5-day forecast
  $.ajax({
    url: forecastQueryURL,
    type: "GET",
    success: function (data) {
      console.log(data);
      console.log(
        "---------------\nforecastQueryURL: " + forecastQueryURL + "\n---------------"
      );
      shareInfo(city, data)
    },
    error: function (error) {
      console.error("Error getting 5-day forecast: ", error);
    },

    error: function (error) {
      console.error("Error getting geocode data: ", error);
    },
  });
}

function shareInfo(city, data) {
  currentWeather(city, data.list[0]) // create BS card dynamically and textContent the values onto the cards
  forecastWeather(data.list) // just H2, loop through forecast.length
}
// /**
// * @param {object} forecastData - object containing JSON output
// */

// function renderForecast() {
// //declare how mnay days forecast needed
// const forecastLength = 5;
//  // Loop through and build elements for the defined number of days
//  for (var i = 0; i < forecastLength; i++) {
//   // Get specific forecast info for current index
//   var temp = forecastData.list[i].main.temp;
//   var wind = forecastData.list[i].wind.speed;
//   var icon = forecastData.list[i].weather.icon;
//   var humidity = forecastData.list[i].main.humidity;

// Increase the forecastDay (track day # - starting at 1)
//   var forecastDay = i + 1;

//      // Create the  list group to contain the forecast and add the content for each day
//      var $forecastDetail = $("<ul>");
//      $forecastDetail.addClass("list-group");

//      // Add the newly created element to the DOM
//     $("#history").append($forecastDetail);

//     // appending the variables to the forecastDetail
//     var $forecastDetails = $("<div class='card', id='day1', style='width: 10rem;>'");

//     $forecastDetails.append("<h5>Temp: " + temp + "</h5>")
//     $forecastDetails.append("<h5>Humidity: " + humidity + "%</h5>")
//     $forecastDetails.append("<h5>Wind Speed: " + wind + "m/s</h5>")
//     $forecastDetails.append("<h5>" + icon + "</h5>")

//  }
// }

// function splitData(city, list) {

// }

// fetch("https://api.openweathermap.org/data/2.5/forecast?q='+city.value+'lat='+lat+'&lon='+lon+'&units='+units+'&appid=7cecd6cf1a25249cb6676d7e0009bd81")
// .then(response => response.json())
// .then(data => {
//   for (i=0; i<5; i++){
//     document.getElementById("TempDay" + (i+1) + "temp").innerHTML =
//     "Temp:" + Number(data.list[i].main.temp + "°C");

//   }
// })

// // function to render the searched city current weather
// function displayCurrentCity() {

// $.ajax({
//   url: forecastQueryURL,
//   method: "GET"
// }).then(function(forecastData) {
//   // Get the city name from the API response
//   var city = data.city.name;

//   // Get the current date
//   var currentDate = new Date();

//   // Get the temperature from the API response
//   var temperature = data.list[0].main.temp;

//   // Get the wind speed from the API response
//   var windSpeed = data.list[0].wind.speed;

//   // Get the humidity from the API response
//   var humidity = data.list[0].main.humidity;

//   // Update the HTML with the extracted data
//   $("#current").text(city + " - " + currentDate.toLocaleDateString());
//   $("#tempDay").text("Temp: " + temperature + "°C");
//   $("#windDay").text("Wind Speed: " + windSpeed + "m/s");
//   $("#humidityDay").text("Humidity: " + humidity + "%");
// });

// console.log(forecastData.list[0].wind.speed);
// displayCurrentCity();
// }

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
// document.querySelector("#clear-button").addEventListener("click", function () {
//   localStorage.clear();
//   document.querySelector("#history ul").innerHTML = "";
// });

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

// function nextFunction(){}
