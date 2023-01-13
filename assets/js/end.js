// Call global variables
var userScore = 0;

// Get DOM elements
var gameOverEl = document.getElementsByClassName('gameOver');
var userScoreEl = document.getElementsByClassName('yourScore');
var highScoresEl = document.getElementsByClassName('highScore');

console.log(gameOverEl);
console.log(userScoreEl);
console.log(highScoresEl);

// Function to display how well the user did on the screen
function displaySkills() {
    // first display if the user passed the 75% threshold to "win"

    // next display a different phrase based on their total score

}

// Function to display their score to the page
function displayUserScore() {

}

// Function to display the high score history to the page
function displayHighScores() {

}

// Function to get data from local storage
function getUserScores() {

}

// function to initialize the page
function initPage() {
    getUserScores();
    displaySkills();
    displayUserScore();
    displayHighScores();
}

initPage();