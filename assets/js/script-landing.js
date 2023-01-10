// Define global variables
var openTdbRootURL = 'https://opentdb.com/api.php';
var theTriviaRootURL = 'https://the-trivia-api.com/api';
var scoreHistory = [];
var categoryList = [];

// Ease of Access for DOM elements - references
var categorySection = document.querySelector('#');
var categoryInput = document.querySelector('#');
var difficultySection = document.querySelector('#');
var difficultyInput = document.querySelector('#');
var numQsSection = document.querySelector('#');
var numQsInput = document.querySelector('#');
var startGameButton = document.querySelector('#');

// Function to alphabatize the categories between the two APIs
function alphabatizeCategories() {

}

// Function to add a game category from the APIs
function addCategoryOption(category) {

}

function initCategories() {
    // call APIs to get each possible category
    fetch(`${theTriviaRootURL}/questions`);
    fetch('https://opentdb.com/api_category.php');

    // Store each category in categoryList

        // Each item in the list should be an object in the following format
        //  var triviaCat = {
        //      catName: ____
        //      APIused: "theTrivia" or "openTdb"
        //      id: (Note this is the underscore separated term for theTriviaAPI)
        //  }

    // Call alphabatizeCategories() to order the list by catName

    // Loop through addCategoryOption to add each option to the form
}

// Function to disable the difficulty setting based on the API chosen
function toggleDifficulty (event) {
    // use the value in categoryInput to determine which API is being 
    // referenced to toggle difficulty on or off
}

// Function to save form responses to local storage as game settings
function saveSettings() {

}

// Function to handle the form start based on the selected criteria
function startGame(event) {
    event.preventDefault();
    saveSettings();
    // open up play.html
}

initCategories();
categorySection.addEventListener('submit',toggleDifficulty);
startGameButton.addEventListener('click',startGame);