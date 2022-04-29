let playerInput;// prompt("Please enter: rock, paper or scissors");
let computerOutput = computerPlay();
let currentPlayerscore = 0;
let currentComputerScore = 0;
let selection = document.querySelectorAll('.but');
const output = document.querySelector('.ans');
const score = document.querySelector('.score');
const resetbtn = document.querySelector('.restart');

selection.forEach ((button) => {
    button.addEventListener('click', (event) => {
        computerOutput = computerPlay();
        playerInput = event.target.id;
        output.style.border = '0.7px solid red';
        output.textContent = playRound(playerInput, computerOutput);
        score.textContent = "Your Score: " + currentPlayerscore + " Computer Score: " + currentComputerScore; 
        if (currentComputerScore >= 5 || currentPlayerscore >= 5) {
            output.textContent = winnerOutput();
            for (let i = 0; selection.length; i++) {
                selection[i].disabled = true;
                selection[i].style.backgroundColor = 'red';
            }   
        }
    }); 
});

resetbtn.addEventListener('click', () => {
    currentPlayerscore = 0;
    currentComputerScore = 0;
    score.textContent = "Your Score: " + currentPlayerscore + " Computer Score: " + currentComputerScore; 
    output.textContent = '';
    output.style.removeProperty('border');
    for (let i = 0; selection.length; i++) {
        selection[i].disabled = false;
        selection[i].style.removeProperty('background-color');
    }
});

function computerPlay() {
    let currentPlay = Math.floor(Math.random() * 3);
    if(currentPlay == 0) {
        return "rock";
    }
    else if (currentPlay == 1) { 
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection) {
        scoreTracker(0, 0);
        return `Tie`;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        scoreTracker(1, 0);
        return `You Win! ${playerSelection} beats ${computerOutput}`;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        scoreTracker(0, 1);
        return `You Lose! ${computerOutput} beats ${playerSelection}`;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        scoreTracker(1, 0);
        return `You Win! ${playerSelection} beats ${computerOutput}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        scoreTracker(0, 1);
        return `You Lose! ${computerOutput} beats ${playerSelection}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        scoreTracker(1, 0);
        return `You Win! ${playerSelection} beats ${computerOutput}`;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        scoreTracker(0, 1);
        return `You Lose! ${computerOutput} beats ${playerSelection}`;
    }
}
function winnerOutput () {
    
    if(currentPlayerscore > currentComputerScore) {
        return 'Lets goooo, You Win!';
    }
    else if (currentPlayerscore == currentComputerScore) {
        return 'Oh Well, Its a Tie';
    }
    else{
        return 'Oh dam it, Computer Won!';
    }
}

function scoreTracker (playerScore, computerScore) {
    currentPlayerscore = playerScore + currentPlayerscore;
    currentComputerScore = computerScore + currentComputerScore;
}


