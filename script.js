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

function playGame() {
    let scoreUser = 0;
    let scoreComputer = 0;
    for(let i = 1; i < 6; i++ ) {
        const playerSelection = "rock"; // Здесь можно изменить выбор игрока
        const computerSelection = getComputerChoice();
        
        console.log("Round " + i);
        console.log(playRound(playerSelection, computerSelection));
        console.log("User = " + scoreUser);
        console.log("Js = " + scoreComputer)
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
            scoreUser += 1;
            return "Player won";

        } else {
            scoreComputer += 1;
            return "Computer won";
        }
    }
}
console.log(playGame());