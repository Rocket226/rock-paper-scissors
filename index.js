function getComputerChoice() {
    return ["rock","paper","scissors"][Math.floor(3 * Math.random())];
}

function getHumanChoice() {
    return prompt("input rock, paper, or scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer: ${computerChoice}, You: ${humanChoice}`);

    const winTable = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    }

    if (humanChoice == computerChoice) {
        console.log(`Draw!`);
        return "draw"
    } else if (winTable[humanChoice] == computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human"
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
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



playGame()