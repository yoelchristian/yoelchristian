var createImage = document.createElement("img");
var guessesRemainingCounter = 10;
var correctLetterCounter = 0;
var winCounter = 0;
var a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0 , a6 = 0, a7 = 0;

// Function for the first image
function slackGameImage() {
    // Selects the div with id "guess-the-image"
    var guessImage = document.getElementById("guess-the-image");
    // Create an attribute for the image element
    createImage.setAttribute("src","assets/images/slack-logo.svg");
    createImage.setAttribute("width", "300px");
    // Adds the image into the div
    guessImage.appendChild(createImage);
    // Initializes the Instructions panel without affecting the winCounter
    resetGame();
    document.getElementById("number-of-guesses").textContent = 10;
    document.getElementById("letter1").textContent = "__ ";
    document.getElementById("letter2").textContent = "__ ";
    document.getElementById("letter3").textContent = "__ ";
    document.getElementById("letter4").textContent = "__ ";
    document.getElementById("letter5").textContent = "__ ";
    // Captures the keyboard input
    document.onkeyup = function (event) {
        var userGuess = event.key;
        // Conditions if the correct letter is pressed
        if (event.key === "s") {
            // Replaces the blank letter with the corresponding correct letter
            document.getElementById("letter1").textContent = "S ";
            // Associates a variable to hold a counter in case the same key is pressed multiple times
            a1 = 1;
            // Calculates the correct number of letter without duplicates and in any order
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        } 
        else if (event.key === "l") {
            document.getElementById("letter2").textContent = "L ";
            a2 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        }
        else if (event.key === "a") {
            document.getElementById("letter3").textContent = "A ";
            a3 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        }
        else if (event.key === "c") {
            document.getElementById("letter4").textContent = "C ";
            a4 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        }
        else if (event.key === "k") {
            document.getElementById("letter5").textContent = "K ";
            a5 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        }
        // Else, if the wrong letter is guessed
        else {
            // Creates a span to display the wrong letters guessed
            var createSpan = document.createElement("span");
            var lettersAlreadyGuessed = document.createTextNode(userGuess+ " ");
            createSpan.appendChild(lettersAlreadyGuessed);
            document.getElementById("letters-already-guessed").appendChild(createSpan);
            // Calculates the number of guesses remaining and displays it
            guessesRemainingCounter = guessesRemainingCounter - 1;
            document.getElementById("number-of-guesses").textContent = guessesRemainingCounter;
            // If all guesses are used, alert lost and initialize the same stage
            if (guessesRemainingCounter === 0) {
                alert("You Lost!");
                slackGameImage();
            } 
            else {
            }
        }
        // If the correct counter reaches the length of the word, alert win and increase the win counter and display it
        if (correctLetterCounter >= 5) {
            alert("You Won!");
            winCounter = winCounter + 1;
            document.getElementById("number-of-wins").textContent = winCounter;
            // Proceed to the next stage
            twitterGameImage();
        }
    }
}

function twitterGameImage() {
    var guessImage = document.getElementById("guess-the-image");

    createImage.setAttribute("src","assets/images/twitter-logo.jpg");
    createImage.setAttribute("width", "300px");
    guessImage.appendChild(createImage);

    resetGame();
    document.getElementById("number-of-guesses").textContent = 10;
    document.getElementById("letter1").textContent = "__ ";
    document.getElementById("letter2").textContent = "__ ";
    document.getElementById("letter3").textContent = "__ ";
    document.getElementById("letter4").textContent = "__ ";
    document.getElementById("letter5").textContent = "__ ";
    document.getElementById("letter6").textContent = "__ ";
    document.getElementById("letter7").textContent = "__ ";

    document.onkeyup = function (event) {
        var userGuess = event.key;
        
        if (event.key === "t") {
            document.getElementById("letter1").textContent = "T ";
            document.getElementById("letter4").textContent = "T ";
            document.getElementById("letter5").textContent = "T ";
            a1 = 3;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        } 
        else if (event.key === "w") {
            document.getElementById("letter2").textContent = "W ";
            a2 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        }
        else if (event.key === "i") {
            document.getElementById("letter3").textContent = "I ";
            a3 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        }
        else if (event.key === "e") {
            document.getElementById("letter6").textContent = "E ";
            a4 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        }
        else if (event.key === "r") {
            document.getElementById("letter7").textContent = "R ";
            a5 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5;
        }
        else {
            var createSpan = document.createElement("span");
            var lettersAlreadyGuessed = document.createTextNode(userGuess+ " ");
            createSpan.appendChild(lettersAlreadyGuessed);
            document.getElementById("letters-already-guessed").appendChild(createSpan);

            guessesRemainingCounter = guessesRemainingCounter - 1;
            document.getElementById("number-of-guesses").textContent = guessesRemainingCounter;

            if (guessesRemainingCounter === 0) {
                alert("You Lost!");
                twitterGameImage();
            } 
            else {
            }
        }

        if (correctLetterCounter >= 7) {
            alert("You Won!");
            winCounter = winCounter + 1;
            document.getElementById("number-of-wins").textContent = winCounter;
            githubGameImage();
        }
    }
}

function githubGameImage() {
    var guessImage = document.getElementById("guess-the-image");

    createImage.setAttribute("src","assets/images/github-logo.png");
    createImage.setAttribute("width", "300px");

    resetGame();
    document.getElementById("number-of-guesses").textContent = 10;
    document.getElementById("letter1").textContent = "__ ";
    document.getElementById("letter2").textContent = "__ ";
    document.getElementById("letter3").textContent = "__ ";
    document.getElementById("letter4").textContent = "__ ";
    document.getElementById("letter5").textContent = "__ ";
    document.getElementById("letter6").textContent = "__ ";

    document.onkeyup = function (event) {
        var userGuess = event.key;
        
        if (event.key === "g") {
            document.getElementById("letter1").textContent = "G ";
            a1 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5 + a6;
        } 
        else if (event.key === "i") {
            document.getElementById("letter2").textContent = "I ";
            a2 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5 + a6;
        }
        else if (event.key === "t") {
            document.getElementById("letter3").textContent = "T ";
            a3 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5 + a6;
        }
        else if (event.key === "h") {
            document.getElementById("letter4").textContent = "H ";
            a4 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5 + a6;
        }
        else if (event.key === "u") {
            document.getElementById("letter5").textContent = "U ";
            a5 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5 + a6;
        }
        else if (event.key === "b") {
            document.getElementById("letter6").textContent = "B ";
            a6 = 1;
            correctLetterCounter = a1 + a2 + a3 + a4 + a5 + a6;
        }
        else {
            var createSpan = document.createElement("span");
            var lettersAlreadyGuessed = document.createTextNode(userGuess+ " ");
            createSpan.appendChild(lettersAlreadyGuessed);
            document.getElementById("letters-already-guessed").appendChild(createSpan);

            guessesRemainingCounter = guessesRemainingCounter - 1;
            document.getElementById("number-of-guesses").textContent = guessesRemainingCounter;

            if (guessesRemainingCounter === 0) {
                alert("You Lost!");
                githubGameImage();
            } 
            else {
            }
        }

        if (correctLetterCounter >= 6) {
            alert(" Congratualtions! You Won!");
            winCounter = winCounter + 1;
            document.getElementById("number-of-wins").textContent = winCounter;
            slackGameImage();
        }
    }
}

function resetGame() {
    guessesRemainingCounter = 10;
    correctLetterCounter = 0;
    a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0 , a6 = 0, a7 = 0;
    document.getElementById("number-of-guesses").innerHTML = "";
    document.getElementById("letters-already-guessed").innerHTML = "";
    document.getElementById("letter1").textContent = "";
    document.getElementById("letter2").textContent = "";
    document.getElementById("letter3").textContent = "";
    document.getElementById("letter4").textContent = "";
    document.getElementById("letter5").textContent = "";
    document.getElementById("letter6").textContent = "";
    document.getElementById("letter7").textContent = "";
}

function startGame() {
    winCounter = 0;
    document.getElementById("number-of-wins").textContent = "0";
    slackGameImage();
}


    
