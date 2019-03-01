$(document).ready(function () { 
//Create Variables 
var gameQuestions = [
    {
        question: "Juvenile is known for the famous quote Cash Money Records taking over for the '99 and the 2000s", 
        answer: true
    },

    {
        question: "50 cent first albumn Get Rich or Die Tryin was released in 2002", 
        answer: false
    },

    {
        question: "Drake and Josh's little sister's name is Megan in the Nicoloden TV show", 
        answer: true
    },
    
];

var currentQ = 0;
console.log(gameQuestions)
var correct = 0;
var wrong =0;
var timeCountDown = 60;



var ticker = setInterval(function(){
    if(timeCountDown === 0) {
        scoreBoard();
        clearInterval(ticker);
        
    } else {
        timeCountDown--
    }

    $(".timeLeft").text("Time Left: " + timeCountDown)

},1000)

function scoreBoard () {
    $(".questions").empty()
        alert('gameOver')

        var h1 = $("<h1>").text("Correct: " + correct + " Wrong: " + wrong);
        $(".questions").append(h1);
}

function displayQuestion() {
    if (currentQ >= gameQuestions.length) {
        scoreBoard();

    } else {
        $(".questions").empty()
        var container = $("<div>")
        var h1 = $("<h1>").text(gameQuestions[currentQ].question)
        console.log(h1)
        var trueButton = $("<button>").text("true").attr("id", "answerButton")
        var falseButton = $("<button>").text("false").attr("id", "answerButton")
        container.append(h1);
        container.append(trueButton);
        container.append(falseButton);
        $(".questions").append(container);

    }

}


$(document).on("click", "#answerButton", function (){
console.log("clickedd", $(this).text())
console.log("Our answer is ", gameQuestions[currentQ].answer)

if (gameQuestions[currentQ].answer === true && $(this).text() === "true"){
    currentQ++
    correct++
    displayQuestion();
} else if (gameQuestions[currentQ].answer === false && $(this).text() === "false"){
    currentQ++
    correct++
    displayQuestion();
} else {
    currentQ++
    wrong++
    displayQuestion();
}
});

$("#start").on("click", function () {
$("#gameStartPage").remove();
    displayQuestion();
    

});

});