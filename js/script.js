
let list = ['rock', 'paper', 'scissors'];

let playerScore = 0,
    computerScore = 0;

function getComputerChoice () {
    return list[Math.floor(Math.random()*3)];
}


function playRound (playerSelection, computerSelection) {
    playerSelection = String(playerSelection);
    computerSelection = String(computerSelection);
    let choices = playerSelection.toLowerCase() + computerSelection.toLowerCase();
    let anwser;
    if (playerSelection === computerSelection) {
        anwser = "Tie! You both chose " + computerSelection;
    }
    else if (choices === 'paperrock' || 
        choices === 'rockscissors' || 
        choices === 'scissorspaper') 
    {
        anwser = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
    }
    else {
        anwser = "You lose! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
    }

    return anwser;
}

for (let i = 0; i < 5; i ++) {

    console.log(playRound(String(prompt("Enter Your Choice: Rock, Paper or Scissors")), getComputerChoice()));
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    
    
}

