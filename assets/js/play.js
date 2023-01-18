var correctAnswer = 0;
var questionBox = $('#questionBox');
var playerScore = 0;
var button1 = $('#button1');
var button2 = $('#button2');
var button3 = $('#button3');
var button4 = $('#button4');
var landingPageSettings = localStorage.getItem('no-mercy-settings');
var settings = JSON.parse(landingPageSettings);
var playerName = settings.playerName;
var APIused = settings.APIused;
var category = settings.category;
var catID = settings.catID;
var numQ = settings.numQ;
var currentQuestion=0;
var apiResults= null;

var openTdb = 'https://opentdb.com/api.php?amount='+numQ+'&category='+catID+'&difficulty=medium&type=multiple';
var theTrivia = 'https://the-trivia-api.com/api/questions?categories='+category+'&limit='+numQ+'&difficulty=medium'


//localStorage.setItem('score',playerScore);

var category = settings.category;



function game(res){
    questionBox.text(res.question);
   if(APIused=='openTdb'){
    
    button1.text(res.correct_answer);
    button2.text(res.incorrect_answers[0]);
    button3.text(res.incorrect_answers[1]);
    button4.text(res.incorrect_answers[2]);
   }else{
    button1.text(res.correctAnswer);
    button2.text(res.incorrectAnswers[0]);
    button3.text(res.incorrectAnswers[1]);
    button4.text(res.incorrectAnswers[2]);
   }
}


if (APIused=='openTdb'){
    var apiResponse = null;
    fetch(openTdb)
    .then((response) => response.json())
    .then((data) => apiResponse=data) 
    .finally(() => {
     
       apiResults = apiResponse.results;
      

        

        
    });
        
  
}else{
    var apiResponse = null;
    fetch(theTrivia)
    .then((response) => response.json())
    .then((data) => apiResponse=data) 
    .finally(() => {
     console.log(apiResponse);
       apiResults = apiResponse;
    });
}

function nextQuestion(){
        
    currentQuestion+=1;
    if(currentQuestion>=numQ){
        var gameResults={
            userScore:playerScore,
            numCorrect:correctAnswer
        }
        localStorage.setItem('game-results',JSON.stringify(gameResults));
        window.location.href = 'end.html';

    }
    game(apiResults[currentQuestion]);
}   
var delay = ms => new Promise(res => setTimeout(res, ms));
var playGame = async () => {
    await delay(4000);
    console.log('Waited 1.5 seconds to load categories from APIs');
    game(apiResults[currentQuestion]);
}
playGame();


button1.on("click",function() {playerScore+=5});
button1.on("click",function() {correctAnswer+=1});
button1.on("click",nextQuestion);
button2.on("click",nextQuestion);
button3.on("click",nextQuestion);
button4.on("click",nextQuestion);












