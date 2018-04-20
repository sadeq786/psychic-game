// define all my variables for the html elements

var playerChoiceSpan = document.getElementById("playerChoice");
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var GuessesLeftSpan = document.getElementById("numberOfGuessesLeft");
var MyGuessesSoFarSpan = document.getElementById("myGuesses")
var PossibleComputerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                                 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var wins = 0;
var losses = 0;
var numberOfGuessesLeft = 10;

document.onkeyup = function (event) {
    var playerChoice = event.key;
    var computerChoice = PossibleComputerChoices[Math.floor(Math.random() * PossibleComputerChoices.length)];
    console.log(event.key);
    if (playerChoice === computerChoice) {
        wins++;
        winsSpan.innerText = wins;
        numberOfGuessesLeft = 10;
        MyGuessesSoFarSpan.innerText = " ";
    } else if (numberOfGuessesLeft === 0) {
        losses++;
        numberOfGuessesLeft = 10;
        lossesSpan.innerText = losses;
        GuessesLeftSpan.innerText = numberOfGuessesLeft;
        MyGuessesSoFarSpan.innerText = " ";
    } else {
        numberOfGuessesLeft--;
        GuessesLeftSpan.innerText = numberOfGuessesLeft;
        MyGuessesSoFarSpan.innerText += (playerChoice + ", ");
    }

    
}

    // winsSpan.textContent = wins;
    // GuessesLeftSpan.textContent = numberOfGuessesLeft;
    // lossesSpan.textContent = losses;
    // playerChoiceSpan.textContent = playerChoice;
    // // computerChoiceSpan.textContent = computerChoice;
    // totalGamesSpan.textContent = (wins + losses);
