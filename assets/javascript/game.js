window.onload = function() {
/* set all variables and needed functions to single game variable */
var arrletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedArr = [];
var repeat;

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
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // Letters to be counted only for 1 press
    var repeat = guessedArr.indexOf(userGuess);
        if (repeat == -1) {
        guessesLeft--;
        guessedArr.push(userGuess);
        }
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
    var audioplay = document.createElement('audio');
    audioplay.setAttribute('src', 'assets/audio/bgaudio.mp3');

    // play button
    var play = document.getElementById('play');
    play.onclick = function() {
        audioplay.play();
        audioplay.loop = true;
    }
    // pause button
    var pause = document.getElementById('pause');
    pause.onclick = function() {
        audioplay.pause();
    }
}

