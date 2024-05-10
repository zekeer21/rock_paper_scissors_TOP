
function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

let compScore = 0;
let playerScore = 0;
const outputDiv = document.getElementById('output');
const displayScore = document.querySelector('.displayScore');
const displayPlayerScore = document.querySelector('.scorePlayer')
const displayCompScore = document.querySelector('.scoreComp')

function playRound(playerSelection, computerSelection){
    displayResult(playerSelection, computerSelection)
    checkWinner();
}

function displayResult(playerSelection, computerSelection){
    if ((playerSelection === "rock" &&  computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock")){
        playerScore++;
        outputDiv.textContent=`Player wins! ${playerSelection} beats ${computerSelection}`;
    }
    else if((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")){
        compScore++;
        outputDiv.textContent=`Computer wins! ${computerSelection} beats ${playerSelection}`;
    }

    if (playerSelection === computerSelection){
        outputDiv.textContent=`It's a Tie: Player: ${playerSelection} vs computer: ${computerSelection} `;
    }
    displayCompScore.textContent = `${compScore}`
    displayPlayerScore.textContent = `${playerScore}`
}

const winnerDiv = document.createElement('p');
const roundDiv = document.createElement('p');
const button = document.querySelectorAll('button');

function checkWinner(){
    if (compScore === 5 && playerScore === 5){
        roundDiv.textContent = 'Round Over!!'
        outputDiv.textContent = `Tie Round!! Player:${compScore} Computer:${playerScore}`;
    }
    if (compScore>playerScore && compScore === 5){
        outputDiv.textContent = `Computer Wins!! Score:${compScore}`;
        roundDiv.textContent = 'Round Over!!'
    }else if (playerScore>compScore && playerScore === 5){
        outputDiv.textContent = `Player Wins!! Score: ${playerScore}`;
        roundDiv.textContent = 'Round Over!!'
    }
    outputDiv.appendChild(roundDiv)
}

let body = document.querySelector('body')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.querySelector('.resetButton')

rock.addEventListener('click', (e)=>{
    let computer = getComputerChoice();
    let targetChoice = e.target.id;
    playRound(targetChoice, computer)
})

paper.addEventListener('click', (e)=>{
    let computer = getComputerChoice();
    let targetChoice = e.target.id;
    playRound(targetChoice, computer);
})

scissors.addEventListener('click', (e)=>{
    let computer = getComputerChoice();
    let targetChoice = e.target.id;
    playRound(targetChoice, computer);
})

reset.addEventListener('click', ()=>{
    window.location.reload();
})