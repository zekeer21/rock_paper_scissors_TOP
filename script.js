
function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

let comp_score = 0;
let player_score = 0;

function playRound(playerSelection, computerSelection){

    if ((playerSelection === "rock" &&  computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock")){
        player_score += 1;
        console.log(`Player wins! ${playerSelection} beats ${computerSelection}`);
    }
    else if((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")){
        comp_score += 1;
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
    }

    if (playerSelection === computerSelection){
        console.log(`It's a Tie: Player: ${playerSelection} vs computer: ${computerSelection}`);
    }
    
}

function playGame(){
    let player;
    for (let i =0; i < 5; i++){
        let computer = getComputerChoice();
        player = prompt("Enter a choice");
        playRound(player, computer);
        if (player === ''){
            console.log("No choice entered");
            break;
        }
    }

    if (player_score > comp_score){
        console.log(`Player WINS!! Score:${player_score}`);
    }
    else if (comp_score > player_score){
        console.log(`Computer WINS!! Score:${comp_score}`);
    }
    else if (comp_score === player_score && comp_score !=0 && player_score !=0){
        console.log("It's a Tie");
    }
    else{
        console.log("no score");
    }
}

console.log(playGame());
