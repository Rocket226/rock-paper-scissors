function getComputerChoice() {
    return ["rock","paper","scissors"][Math.floor(3 * Math.random())];
}

function getHumanChoice() {
    return prompt("input rock, paper, or scissors").toLowerCase();
}

function addResult(result) {
    element = document.createElement('p')
    element.textContent = result
    resultDiv.appendChild(element)
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
        return "draw"
    } else if (winTable[humanChoice] == computerChoice) {
        addResult(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human"
    } else {
        addResult(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer"
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const ComputerChoice = getComputerChoice();

        const winner = playRound(humanChoice, ComputerChoice)

        if (winner == "human") {
            humanScore++
        } else if (winner == "computer") {
            computerScore++
        }
    }

    console.log("----------")
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore == computerScore) {
        console.log("Draw!")
    } else {
        console.log("Computer wins!")
    }

    console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`)
}


resultDiv = document.querySelector(".results")

buttons = document.querySelectorAll(".input-button")

buttons.forEach(element => {
    element.addEventListener("click", () => {
        computerChoice = getComputerChoice()
        humanChoice = element.id
        playRound(humanChoice, computerChoice)
    })
});

