

let buttons = document.querySelectorAll('.selection .choice'),
    playerScore = 0,
    computerScore = 0
    reset = document.querySelector('button.reset')
    player = document.querySelector('.player-score')
    computer = document.querySelector('.computer-score')
    div = document.querySelector('.big .info')
console.log(buttons)

function getComputerChoice () {
    let rps = ['rock', 'paper', 'scissors']

    return rps[Math.floor(Math.random()*3)]
}


function playGame (playerChoice) {
    let computerChoice = getComputerChoice(),
        combination = playerChoice + computerChoice,
        winningCombinations = ['paperrock', 'rockscissors', 'scissorspaper']
        
        
        info = 'The computer chose ' + computerChoice + '! '

    if (winningCombinations.indexOf(combination) !== -1) {
        info += 'You win!'
        playerScore++
        updateScore()
    }
    else if (playerChoice === computerChoice) {
        info += 'Tie!'
    }
    else {
        info += 'You lose!'
        computerScore++
        updateScore()
    }
    div.textContent = info;
    return;
}

function updateScore () {
    computer.firstChild.textContent = String(computerScore)
    player.firstChild.textContent = String(playerScore)
}


buttons.forEach(
    button => button.addEventListener (
        'click', (e) => {
            playGame(button.firstChild.textContent.toLowerCase())
            
        }
    )
)

reset.addEventListener (
    'click', () => {
        playerScore = 0
        computerScore = 0
        updateScore()
        div.firstChild.textContent = ' '
    }
)