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