var time = 15;
var intervalID;
var questionCounter = 0;
var wins = 0;
var losses = 0;

// Stores the different questions and answers in these two arrays
var questions = [
                    "What chemical element gives the blood of a lobster a bluish tint?", 
                    "What is the name for the offspring of a male donkey and a female horse?",
                    "Which snake, who's untreated bite is almost 100 percent fatal, is the world's fastest snake on land?",
                    "What kind of animal is a Komodo dragon?", 
                    "How many legs does a lobster have?"
                ];
var answerChoices = [
                        ["Cobalt", "Copper", "Zinc", "Mercury"], 
                        ["Calf", "Foal", "Mule", "Mare"], 
                        ["King Cobra", "DiamondBack Rattlesnake", "Anaconda", "Black Mamba"], 
                        ["A Snake", "A Lizard", "A Dragon", "A Bird"],
                        ["Six Legs", "Eight Legs", "Ten Legs", "Twelve Legs"]
                    ];

// timer function
function timer() {
    clearInterval(intervalID);
    intervalID = setInterval(countDown, 1000);
}
// this function stops the time display and resets the page to the next question
function wrongAnswerCountdown() {
    clearInterval(intervalID);
    setTimeout(function(){
        resetPage();
    }, 5 * 1000);
    losses ++;
}
// this function stops the time display, congratulates the player, and resets the page to the next question
function correctAnswerCountdown() {
    $("#choices").html("Congratulations! Your answer is correct!")
    wins++;
    clearInterval(intervalID);
    setTimeout(function(){
        resetPage();
    }, 3 * 1000);
}
// the countdown function displays the time remaining and when the time reaches 0, correct answers will be shown
function countDown() {
    time--;
    $("#time-remaining").html("<div>" + "Time Remaining: " + time + " seconds" + "</div>");
    
    if(time === 0 && questionCounter === 1) {
        $("#choices").html("Time is up! The correct answer is Copper!");
        wrongAnswerCountdown()
    }
    else if(time === 0 && questionCounter === 2) {
        $("#choices").html("Time is up! The correct answer is Mule!");
        wrongAnswerCountdown()
    }
    else if(time === 0 && questionCounter === 3) {
        $("#choices").html("Time is up! The correct answer is Black Mamba!");
        wrongAnswerCountdown()
    }
    else if(time === 0 && questionCounter === 4) {
        $("#choices").html("Time is up! The correct answer is a Lizard!");
        wrongAnswerCountdown()
    }
    else if(time === 0 && questionCounter === 5) {
        $("#choices").html("Time is up! The correct answer is Ten Legs!");
        wrongAnswerCountdown()
    }
}
// this function displays the question, and the possible answers in the form of a button
function showTrivia() {
    $("#question").html("<div>" + questions[questionCounter] + "</div>");
    $("#time-remaining").html("Time Remaining: 15 seconds");
    for (var i = 0; i < 4; i++) {
        var answerButton = $("<button>");
        answerButton.attr("data-choices", answerChoices[questionCounter][i]);
        answerButton.text(answerChoices[questionCounter][i]);
        answerButton.addClass("answer-choices");
        $("#choices").append(answerButton);
    }
    questionCounter ++;
    timer();
}
// this function resets the variables and when the question counter is higher than 5, displays a button to restart the game
function resetPage() {
    if (questionCounter < 5) {
        time = 15;
        $("#choices").html("");
        $(".answer-choices").remove();
        showTrivia();
    }
    else {
        $("#question").html("Correct Guesses: " + wins);
        $("#choices").html("Wrong Guesses: " + losses);
        $("#time-remaining").html("Do you want to restart the game?");
        
        var restartButton = $("<button>");
        restartButton.addClass("restart-game");
        restartButton.text("Restart");
        $("#time-remaining").append(restartButton);
        
        $(".restart-game").on("click", function() {
            $(".restart-game").remove();
            $("#choices").html("");
            $("#question").html("");
            questionCounter = 0;
            wins = 0;
            losses = 0;
            time = 15;
            showTrivia();
        });
    }
}
// starts the game when the button is clicked
$(".start-game").on("click", function() {
    $(".start-game").remove();
    showTrivia();
});
// when a button created is selected, responds accordingly
$(document).on("click", ".answer-choices", function() {
    var choiceSelected = $(this).attr("data-choices");
    if (choiceSelected === "Copper" || choiceSelected === "Mule" || choiceSelected === "Black Mamba" || 
        choiceSelected === "A Lizard" || choiceSelected === "Ten Legs") {
            correctAnswerCountdown();
    }
    else {
        if(questionCounter === 1) {
            $("#choices").html("Wrong! The correct answer is Copper!");
            wrongAnswerCountdown()
        }
        else if(questionCounter === 2) {
            $("#choices").html("Wrong! The correct answer is Mule!");
            wrongAnswerCountdown()
        }
        else if(questionCounter === 3) {
            $("#choices").html("Wrong! The correct answer is Black Mamba!");
            wrongAnswerCountdown()
        }
        else if(questionCounter === 4) {
            $("#choices").html("Wrong! The correct answer is a Lizard!");
            wrongAnswerCountdown()
        }
        else if(questionCounter === 5) {
            $("#choices").html("Wrong! The correct answer is Ten Legs!");
            wrongAnswerCountdown()
        }
    }
});

