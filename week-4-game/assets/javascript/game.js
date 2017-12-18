var randomNumberToMatch = Math.floor(Math.random() * 102) + 19;
var randomRubyValue = Math.floor(Math.random() * 12) + 1;
var randomEmeraldValue = Math.floor(Math.random() * 12) + 1;
var randomDiamondValue = Math.floor(Math.random() * 12) + 1;
var randomSapphireValue = Math.floor(Math.random() * 12) + 1;
var currentScoreCounter = 0;
var winCounter = 0;
var loseCounter = 0;

function generateRandomNumberToMatch () {
    $("#score-to-match").text(randomNumberToMatch);
    return;
}

function resetGame () {
    randomNumberToMatch = Math.floor(Math.random() * 102) + 19;
    randomRubyValue = Math.floor(Math.random() * 12) + 1;
    randomEmeraldValue = Math.floor(Math.random() * 12) + 1;
    randomDiamondValue = Math.floor(Math.random() * 12) + 1;
    randomSapphireValue = Math.floor(Math.random() * 12) + 1;
    $("#current-score").text("");
    currentScoreCounter = 0;
    generateRandomNumberToMatch();
}

function scoreCounter(x) {
    currentScoreCounter = currentScoreCounter + x;
    $("#current-score").text(currentScoreCounter);
    if (currentScoreCounter === randomNumberToMatch) {
        alert("You won!");
        winCounter ++;
        $("#win-counter").text("Wins: " + winCounter);
        resetGame();
    } else if (currentScoreCounter > randomNumberToMatch) {
        alert("You lost!");
        loseCounter ++;
        $("#lose-counter").text("Loses: " + loseCounter);
        resetGame();
    }
}

$("#ruby-image").on("click", function() {
    scoreCounter(randomRubyValue);
    return;
});

$("#emerald-image").on("click", function() {
    scoreCounter(randomEmeraldValue);
    return;
});

$("#diamond-image").on("click", function() {
    scoreCounter(randomDiamondValue);
    return;
});

$("#sapphire-image").on("click", function() {
    scoreCounter(randomSapphireValue);
    return;
});


generateRandomNumberToMatch();

