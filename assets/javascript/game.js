/* set all variables and needed functions to single game variable */
var arrletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedArr = [];

var randomLetter = arrletters[Math.floor(Math.random() * arrletters.length)];

var gameEvent = {
    updateGuessesLeft : function() {
        document.querySelector("#guessesleft").innerHTML = "Guesses Left: " + guessesLeft;
    },
    updateguessedArr : function() {
        document.querySelector("#myGuesses").innerHTML = "Your guesses so far: " + guessedArr.join(', ');
    },
    updateComputerChoice : function() {
        randomLetter = arrletters[Math.floor(Math.random() * arrletters.length)];
    },
    reset : function () {
        guessesLeft = 9;
        guessedArr = [];
        gameEvent.updateGuessesLeft();
        gameEvent.updateguessedArr();
        gameEvent.updateComputerChoice();
    },
}

    document.addEventListener('keyup', function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesLeft--;
    guessedArr.push(userGuess);

    gameEvent.updateGuessesLeft();
    gameEvent.updateguessedArr();

    if ((guessesLeft > 0) && (userGuess == randomLetter)) {
            wins++;
            document.querySelector("#win").innerHTML = "Wins: " + wins;
            gameEvent.reset();
    }
    else if (guessesLeft == 0) {
        losses++;
        document.querySelector("#loss").innerHTML = "Losses: " + losses;
        gameEvent.reset();
    }
});


