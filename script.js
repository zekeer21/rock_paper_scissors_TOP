
function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

let compScore = 0;
let playerScore = 0;
const outputDiv = document.getElementById('output');

function playRound(playerSelection, computerSelection){
    displayResult(playerSelection, computerSelection)
    checkWinner();
}

function displayResult(playerSelection, computerSelection){
    const paraWin = document.createElement('p');
    if ((playerSelection === "rock" &&  computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock")){
        playerScore += 1;
        paraWin.textContent=`Player wins! ${playerSelection} beats ${computerSelection} Player score:${playerScore}`;
    }
    else if((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")){
        compScore += 1;
        paraWin.textContent=`Computer wins! ${computerSelection} beats ${playerSelection} Computer score:${compScore}`;
    }

    if (playerSelection === computerSelection){
        paraWin.textContent=`It's a Tie: Player: ${playerSelection} vs computer: ${computerSelection} `;
    }
    outputDiv.appendChild(paraWin);
}
const winnerDiv = document.createElement('p');
const roundDiv = document.createElement('p');
const button = document.querySelectorAll('button');

function checkWinner(){
    if (compScore === 5 && playerScore === 5){
        roundDiv.textContent = 'Round Over!!'
        winnerDiv.textContent = `Tie Round!! Player:${compScore} Computer:${playerScore}`;
        outputDiv.textContent = ''
    }
    button.disabled = true
    if (compScore>playerScore && compScore === 5){
        roundDiv.textContent = 'Round Over!!'
        winnerDiv.textContent = `Computer Wins!! Score:${compScore}`;
        outputDiv.textContent = ''
        button.disabled = true
    }else if (playerScore>compScore && playerScore === 5){
        roundDiv.textContent = 'Round Over!!'
        winnerDiv.textContent = `Player Wins!! Score: ${playerScore}`;
        outputDiv.textContent = ''
        button.disabled = true
    }
    button.disabled = true
    
    outputDiv.appendChild(winnerDiv);
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