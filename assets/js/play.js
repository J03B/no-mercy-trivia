var correctAnswer = [];
var incorrectAnswers = [];
var questionBox = $("#questionBox");
var playerScore = ("0");
var button1 = $("#button1");
var button2 = $("#button2");
var button3 = $("#button3");
var button4 = $("#button4");
localStorage.setItem('score',playerScore);

$("button").click(function(){
    questionBox.text(this.id+" was clicked");
   });
button1.click(function(){
    button1.text("I was clicked");
});
button2.click(function(){
    button2.text("I was clicked");
});
button3.click(function(){
    button3.text("I was clicked");
});
button4.click(function(){
    button4.text("I was clicked");
});

Math.floor(math.random*4);

function question(){
    questionBox.txt()
    if (correctAnswer){
        playerScore+5;
        $("button").click(nextQuestion)
    }else{
        $("button").click(nextQuestion);
    }
}

function nextQuestion(){
    question()
}

