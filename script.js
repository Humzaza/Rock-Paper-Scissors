let playerInput;// prompt("Please enter: rock, paper or scissors");
let computerOutput = computerPlay();
let currentPlayerscore = 0;
let currentComputerScore = 0;
let selection = document.querySelectorAll('.but');
const output = document.querySelector('.ans');
const score = document.querySelector('.score');

selection.forEach ((button) => {
    button.addEventListener('click', (event) => {
        computerOutput = computerPlay();
        playerInput = event.target.id;
        output.textContent = playRound(playerInput, computerOutput);
        score.textContent = "Score: " + currentPlayerscore + " Computer Score: " + currentComputerScore; 
    }); 
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
    // while (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
    //     if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    //         break;
    //     }
    //     //playerSelection = prompt("Please enter: rock, paper or scissors");
    // }
    playerSelection = playerSelection.toLowerCase();
    //console.log(playerSelection + " " + computerSelection);
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
function game () {
    //for (let i = 0; i < 5; i++) {
        //playerInput = prompt("Please enter: rock, paper or scissors");
        //console.log(playRound(playerInput, computerOutput));
        computerOutput = computerPlay();
    //}
    //console.log(currentPlayerscore+" "+currentComputerScore);
    
    if(currentPlayerscore > currentComputerScore) {
        return 'You Win!';
    }
    else if (currentPlayerscore == currentComputerScore) {
        return 'Its a Tie';
    }
    else{
        return 'Computer Won!';
    }
}

function scoreTracker (playerScore, computerScore) {
    currentPlayerscore = playerScore + currentPlayerscore;
    currentComputerScore = computerScore + currentComputerScore;
}

//console.log(game());
