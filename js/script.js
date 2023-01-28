// declare jQuery variable for search form
var searchEl = $("#search-form");

// declare jQuery variable for search input
var inputEl = $("#search-input");

// declare jQuery variable for search button
var buttonEl = $("#search-button");

// declare jQuery variable for list group
var historyEl = $("#history");

// create the history list
// var printSkills = function (name, date) {
function printSkills(name, date) {
  var listEl = $("<li>");
  var listDetail = name.concat(" on ", date);
  listEl.addClass("list-group-item").text(listDetail);
  listEl.appendTo(historyEl);

  nextFunction()
}

function nextFunction() {
    
}
// declare variable to handle form submit
// include a prevent default
var handleFormSubmit = function (event) {
  event.preventDefault();

  // event listener for the search button click

  // API request to use the city entered before click as the search term
};
