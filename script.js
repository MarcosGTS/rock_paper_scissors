const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];

function generateRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1)); 
}

function computerPlay() {
    const index = generateRandomNumber(2);
    return POSSIBLE_CHOICES[index];
}

function playRound(playerSelection, computerSelection) {
   
    //Handle player input
    playerSelection = playerSelection.toLowerCase();
    if (!POSSIBLE_CHOICES.includes(playerSelection)) 
        return "Invalid Input";

    
    //Handle tie!
    if (playerSelection === computerSelection) return "Tie";

    //Handle win conditions
    switch(true) {
        case playerSelection === "paper" && computerSelection === "scissors":
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "scissors" && computerSelection === "rock":
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        default:
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
    }
        
}

function getPlayerMove() {
    const playerSelection = this.dataset.move;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

//players scores
let playerScore = 0;
let computerScore = 0;

function game() {
    const buttons = document.querySelectorAll(".move");

    buttons.forEach(btn => btn.addEventListener("click", getPlayerMove))   
}

game();