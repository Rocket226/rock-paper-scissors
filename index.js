function getComputerChoice() {
    return ["rock","paper","scissors"][Math.floor(3 * Math.random())];
}

function getHumanChoice() {
    return prompt("input rock, paper, or scissors").toLowerCase();
}

function addResult(result) {
    let element = document.createElement('p');
    element.textContent = result;
    resultDiv.appendChild(element);
}

function displayScore() {
    if (computerScore == humanScore) {
        addResult(`Draw! You ${humanScore} - ${computerScore} Computer`)
    } else if (computerScore > humanScore) {
        addResult(`You Lose! Computer ${computerScore} - ${humanScore} You`)
    } else {
        addResult(`You Win! You ${humanScore} - ${computerScore} Computer`)
    }

    let resetButton = document.createElement('button');
    resetButton.textContent = "Play again."
    resetButton.addEventListener("click", () => resetGame())

    resultDiv.appendChild(resetButton)
}

function playRound(humanChoice, computerChoice) {
    addResult(`Computer: ${computerChoice}, You: ${humanChoice}`);

    const winTable = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    }

    if (humanChoice == computerChoice) {
        addResult(`Draw!`);
    } else if (winTable[humanChoice] == computerChoice) {
        addResult(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        addResult(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    roundsPlayed++;

    if (roundsPlayed >= 5) {
        displayScore()
    }
}

function resetGame() {
    resultDiv.innerHTML = '';
    roundsPlayed = 0;
    humanScore = 0;
    computerScore = 0;
}


let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

let resultDiv = document.querySelector(".results");
let buttons = document.querySelectorAll(".input-button");

buttons.forEach(element => {
    element.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        humanChoice = element.id;
        playRound(humanChoice, computerChoice);
    });
});

