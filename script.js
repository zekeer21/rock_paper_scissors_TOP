const choices = ["rock","paper","scissors"];
const player_choice = prompt("Enter you choice: ");
const playerSelection = player_choice.toLowerCase();

function getComputerChoice(){
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    // toLowerCase(playerSelection);
    if (playerSelection === computerSelection){
        console.log(`It's a Tie: Player: ${playerSelection} vs computer: ${computerSelection}`);
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock")){
        console.log(`Player wins! ${playerSelection} beats ${computerSelection}`);
    }
    else if((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")){
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
    }
}

console.log(playRound(playerSelection, getComputerChoice()));