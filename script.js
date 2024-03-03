const getComputerChoice = () => {
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
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissors"){
        return playerSelection;
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return computerSelection;
    }
    else if(playerSelection === "rock" && computerSelection === "rock"){
        return false;
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return false;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return playerSelection;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return computerSelection;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return computerSelection;
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        return false;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return playerSelection;
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));