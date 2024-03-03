function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors"
            break;
        case 2:
            return "paper"
            break;
         
        };
}


function playRound(playerSelection, computerSelection) {
    console.log("Player selection: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player won";
    } else {
        return "Computer won";
    }
}
    
const playerSelection = prompt("Vvedite svoi otvet ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));