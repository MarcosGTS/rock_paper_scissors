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

//players scores
let playerScore = 0;
let computerScore = 0;

function game() {

    let winner = "";
    let keepRunning = true;
    
    while (keepRunning) {
    
        const playerSelection = prompt("Chose you play(rock, paper, scissors):");
        const computerSelection = computerPlay();
    
        //display results
        console.log(playRound(playerSelection, computerSelection))
        
    
        //checking victory
        if (computerScore >= 5) {
            winner = "computer";
            keepRunning = false;
        }
    
        if (playerScore >= 5) {
            winner = "player";
            keepRunning = false;
        }
    }
    //display winner
    console.log(`The winner is ${winner}`);
}

game();