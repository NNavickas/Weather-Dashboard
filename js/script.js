// // declare jQuery variables
// var searchEl = $("#search-form");
// var inputEl = $("#search-input");
// var buttonEl = $("#search-button");
// var historyEl = $("#history");
// var clearEl = $("#clear-button");

// // API endpoint for geocoding
// const geocodeApiEndpoint = "https://api.openweathermap.org/geo/1.0/direct?";

// // API endpoint for 5-day forecast
// const forecastApiEndpoint = "https://api.openweathermap.org/data/2.5/forecast?";

// // API key
// const apiKey = "7cecd6cf1a25249cb6676d7e0009bd81";

// // Units (imperial or metric)
// const units = "metric";

// $("#search-button").on("click", function (event) {
//   event.preventDefault();
//   // Get the city value from the input box
//   const city = $("#search-input").val();
//   getCoords(city);
// });

// function getCoords(city) {
//   // Build the API query URL for geocoding
//   const geocodeQueryURL =
//     geocodeApiEndpoint + "q=" + city + "&limit=1&appid=" + apiKey;

//   // Make the AJAX request for geocoding
//   $.ajax({
//     url: geocodeQueryURL,
//     type: "GET",
//     success: function (geocodeData) {
//       // Get the latitude and longitude from the geocodeData
//       // const lat = geocodeData[0].lat;
//       // const lon = geocodeData[0].lon;
//       getWeather(geocodeData[0]);

//       console.log(
//         "---------------\ngeocodeQueryURL: " +
//           geocodeQueryURL +
//           "\n---------------"
//       );
//     },
//   });
// }

// // Build the API query URL for 5-day forecast

// function getWeather(location) {
//   var { lat, lon } = location; // deconstructing object data
//   var city = location.name;
//   console.log(location.name);
//   console.log(city);
//   console.log(lat, lon);

//   const forecastQueryURL =
//     forecastApiEndpoint +
//     "lat=" +
//     lat +
//     "&lon=" +
//     lon +
//     "&units=" +
//     units +
//     "&appid=" +
//     apiKey;

//   // Make the AJAX request for 5-day forecast
//   $.ajax({
//     url: forecastQueryURL,
//     type: "GET",
//     success: function (data) {
//       console.log(data);
//       console.log(
//         "---------------\nforecastQueryURL: " + forecastQueryURL + "\n---------------"
//       );
//      // shareInfo(city, data)
//     },
//     error: function (error) {
//       console.error("Error getting 5-day forecast: ", error);
//     },

//     error: function (error) {
//       console.error("Error getting geocode data: ", error);
//     },
//   });
//   getForecast(data);
// }

// // function for displaying weather data
// function getForecast(city, data) {
//   var forecast = 
// }


// // function shareInfo(city, data) {
// //   currentWeather(city, data.list[0]) // create BS card dynamically and textContent the values onto the cards
// //   forecastWeather(data.list) // just H2, loop through forecast.length
// // }
// // /**
// // * @param {object} forecastData - object containing JSON output
// // */

// // function renderForecast() {
// // //declare how mnay days forecast needed
// // const forecastLength = 5;
// //  // Loop through and build elements for the defined number of days
// //  for (var i = 0; i < forecastLength; i++) {
// //   // Get specific forecast info for current index
// //   var temp = forecastData.list[i].main.temp;
// //   var wind = forecastData.list[i].wind.speed;
// //   var icon = forecastData.list[i].weather.icon;
// //   var humidity = forecastData.list[i].main.humidity;

// // Increase the forecastDay (track day # - starting at 1)
// //   var forecastDay = i + 1;

// //      // Create the  list group to contain the forecast and add the content for each day
// //      var $forecastDetail = $("<ul>");
// //      $forecastDetail.addClass("list-group");

// //      // Add the newly created element to the DOM
// //     $("#history").append($forecastDetail);

// //     // appending the variables to the forecastDetail
// //     var $forecastDetails = $("<div class='card', id='day1', style='width: 10rem;>'");

// //     $forecastDetails.append("<h5>Temp: " + temp + "</h5>")
// //     $forecastDetails.append("<h5>Humidity: " + humidity + "%</h5>")
// //     $forecastDetails.append("<h5>Wind Speed: " + wind + "m/s</h5>")
// //     $forecastDetails.append("<h5>" + icon + "</h5>")

// //  }
// // }

// // function splitData(city, list) {

// // }

// // fetch("https://api.openweathermap.org/data/2.5/forecast?q='+city.value+'lat='+lat+'&lon='+lon+'&units='+units+'&appid=7cecd6cf1a25249cb6676d7e0009bd81")
// // .then(response => response.json())
// // .then(data => {
// //   for (i=0; i<5; i++){
// //     document.getElementById("TempDay" + (i+1) + "temp").innerHTML =
// //     "Temp:" + Number(data.list[i].main.temp + "°C");

// //   }
// // })

// // // function to render the searched city current weather
// // function displayCurrentCity() {

// // $.ajax({
// //   url: forecastQueryURL,
// //   method: "GET"
// // }).then(function(forecastData) {
// //   // Get the city name from the API response
// //   var city = data.city.name;

// //   // Get the current date
// //   var currentDate = new Date();

// //   // Get the temperature from the API response
// //   var temperature = data.list[0].main.temp;

// //   // Get the wind speed from the API response
// //   var windSpeed = data.list[0].wind.speed;

// //   // Get the humidity from the API response
// //   var humidity = data.list[0].main.humidity;

// //   // Update the HTML with the extracted data
// //   $("#current").text(city + " - " + currentDate.toLocaleDateString());
// //   $("#tempDay").text("Temp: " + temperature + "°C");
// //   $("#windDay").text("Wind Speed: " + windSpeed + "m/s");
// //   $("#humidityDay").text("Humidity: " + humidity + "%");
// // });

// // console.log(forecastData.list[0].wind.speed);
// // displayCurrentCity();
// // }

// //   const apiKey = "&limit=1&appid=7cecd6cf1a25249cb6676d7e0009bd81";

// // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=` + inputEl + `&limit=1&appid=7cecd6cf1a25249cb6676d7e0009bd81`)
// //   .then(response => response.json())
// //   .then(data => {
// //     const lat = data.coord.lat;
// //     const lon = data.coord.lon;
// //     buildFinalQueryURL(lat, lon);
// //   });
// // }

// //build Final Query URL using input from form
// // function buildFinalQueryURL(event) {
// //   event.preventDefault();
// //   // FinalQueryURL is the url we'll use to query the API
// //   const lat = data.coord.lat;
// //   const lon = data.coord.lon;
// //   var finalQueryURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7cecd6cf1a25249cb6676d7e0009bd81";
// //   console.log(finalQueryURL);
// //  }
// // function buildFinalQueryURL(lat, lon) {
// //   var finalQueryURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=7cecd6cf1a25249cb6676d7e0009bd81";
// //   console.log(finalQueryURL);
// // }

// // FUNCTION
// // // Update the page with the data
// // function getCurrentLocation(position) {

// //   const latitude = position.coords.latitude;
// //   const longitude = position.coords.longitude;

// //   console.log(latitude);
// //   console.log(longitude);

// //   $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=7cecd6cf1a25249cb6676d7e0009bd81&units=metric", function (data) {
// //       console.log(data);
// //       console.log(weather.main.temp);
// //   })

// // };

// // Update page function

// // // clear function
// // function clear() {
// //   $("#history").empty();
// // }

// // CLICK EVENTS
// // submit form
// // $("#search-button").on("click", function(event) {
// //   event.preventDefault();
// //   clear;
// //   var queryURL = buildQueryURL();
// //   $.ajax({
// //     url: queryURL,
// //     method: "GET"
// //   })
// //   //.then(updatePage);
// // });

// // // clear history
// // document.querySelector("#clear-button").addEventListener("click", function () {
// //   localStorage.clear();
// //   document.querySelector("#history ul").innerHTML = "";
// // });

// // declare variable to handle form submit
// // include a prevent default
// // var handleFormSubmit = function (event) {
// //   event.preventDefault();

// // event listener for the search button click

// // API request to use the city entered before 'click' as the search term
// // };

// // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API_KEY}`)
// //   .then(response => response.json())
// //   .then(data => {
// //     const lat = data.coord.lat;
// //     const lon = data.coord.lon;
// //     fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={API_KEY}`)
// //       .then(response => response.json())
// //       .then(forecastData => {
// //         // do something with the forecast data
// // //       });
// // //   });

// // // create the history list
// // // push onto an array?
// // function printHistory(previous) {
// //   var listEl = $("<li>");
// //   var listDetail = previous
// //   listEl.addClass("list-group-item").text(listDetail);
// //   listEl.appendTo(historyEl);

// //   nextFunction()
// // }

// // function nextFunction(){}


// declare jQuery variables
var searchEl = $("#search-form");
var inputEl = $("#search-input");
var buttonEl = $("#search-button");
var historyEl = $("#history");
var clearEl = $("#clear-button");

// API endpoint for geocoding
const geocodeApiEndpoint = "https://api.openweathermap.org/geo/1.0/direct?";

// API endpoint for current weather
const currentApiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";

// API endpoint for 5-day forecast
const forecastApiEndpoint = "https://api.openweathermap.org/data/2.5/forecast?";

// API key
const apiKey = "7cecd6cf1a25249cb6676d7e0009bd81";

// Units (imperial or metric)
const units = "metric";

// Array to store search history
var searchHistory = [];

// Function to update the search history
function updateSearchHistory(city) {
  // Check if the city is already in the search history
  if (!searchHistory.includes(city)) {
    // Add the city to the search history array
    searchHistory.push(city);

    // Create a new button element for the city and add it to the search history
    var button = $("<button>").text(city);
    historyEl.prepend(button);

    // Attach a click event handler to the new button
    button.on("click", function () {
      getWeather(city);
    });

    // Save the search history to local storage
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }
}

function getWeather(city) {
  // Construct the API endpoints for geocoding, current weather, and 5-day forecast
  var geocodeUrl =
    geocodeApiEndpoint + "q=" + city + "&limit=1&appid=" + apiKey;
  var currentWeatherUrl =
    currentApiEndpoint + "q=" + city + "&units=" + units + "&appid=" + apiKey;
  var forecastUrl =
    forecastApiEndpoint + "q=" + city + "&units=" + units + "&appid=" + apiKey;

  // Make an AJAX call to the geocoding API to get the latitude and longitude of the city
  $.ajax({
    url: geocodeUrl,
    method: "GET",
  }).then(function (data) {
    // Extract the latitude and longitude from the geocoding API response
    var lat = data[0].lat;
    var lon = data[0].lon;

    // Make AJAX calls to the current weather and 5-day forecast APIs using the latitude and longitude
    $.when(
      $.ajax({
        url: currentWeatherUrl + "&lat=" + lat + "&lon=" + lon,
        method: "GET",
      }),
      $.ajax({
        url: forecastUrl + "&lat=" + lat + "&lon=" + lon,
        method: "GET",
      })
    ).then(function (currentWeatherData, forecastData) {
      // Display the current weather conditions and 5-day forecast
      displayCurrentWeather(currentWeatherData[0]);
      displayForecast(forecastData[0]);
      console.log(currentWeatherData);
      console.log(forecastData);
      // Update the search history
      updateSearchHistory(city);
    });
  });
  console.log(getWeather);
}

// Function to display the current weather conditions
function displayCurrentWeather(data) {
  // Extract the relevant data from the API response
  var city = data.name;
  var date = moment.unix(data.dt).format("dddd, MMMM Do");
  var icon = $("<img>").attr(
    "src",
    "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
  );
  var temp = $("<p>").text("Temperature: " + data.main.temp + " °C");
  var humidity = $("<p>").text("Humidity: " + data.main.humidity + "%");
  var windSpeed = $("<p>").text("Wind Speed: " + data.wind.speed + " m/s");

  // Clear the current weather div and add the new content
  $("#current-weather").empty();
  $("#current-weather")
    .append($("<h2>").text(city + " (" + date + ")"))
    .append(icon)
    .append(temp)
    .append(humidity)
    .append(windSpeed);
}

// Function to display the 5-day forecast
function displayForecast(data) {
  // Clear the forecast div and add a heading
  $("#forecast").empty().append($("<h2>").text("5-Day Forecast:"));

  // Loop through the forecast data and display each day's weather
  for (var i = 0; i < data.list.length; i++) {
    // Only display the weather for 12:00 PM each day
    if (data.list[i].dt_txt.indexOf("12:00:00") !== -1) {
      // Extract the relevant data from the API response
      var date = moment.unix(data.list[i].dt).format("ddd, MMMM Do");
      var icon = $("<img>").attr(
        "src",
        "https://openweathermap.org/img/w/" +
          data.list[i].weather[0].icon +
          ".png"
      );
      var temp = $("<p>").text("Temp: " + data.list[i].main.temp + " °C");
      var humidity = $("<p>").text(
        "Humidity: " + data.list[i].main.humidity + "%"
      );

      // Create a div for each day's weather and append it to the forecast div
      var card = $("<div>").addClass("card bg-primary text-white");
      var cardBody = $("<div>").addClass("card-body p-2");
      cardBody.append(date, icon, temp, humidity); // append card body to the card
      card.append(cardBody); // append card body to the card
      $("#forecast").append(card);
    }
  }
}








// // Function to display the 5-day forecast
// function displayForecast(data) {
//   // Clear the forecast div and add a heading
//   $("#forecast").empty().append($("<h2>").text("5-Day Forecast:"));

//   // Loop through the forecast data and display each day's weather
//   for (var i = 0; i < data.list.length; i++) {
//     // Only display the weather for 12:00 PM each day
//     if (data.list[i].dt_txt.indexOf("12:00:00") !== -1) {
//       // Extract the relevant data from the API response
//       var date = moment.unix(data.list[i].dt).format("ddd, MMMM Do");
//       var icon = $("<img>").attr(
//         "src",
//         "https://openweathermap.org/img/w/" +
//           data.list[i].weather[0].icon +
//           ".png"
//       );
//       var temp = $("<p>").text("Temp: "
