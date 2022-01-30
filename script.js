const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
const BESTOF = 3;
const game = {
    pScore: 0,
    cScore: 0,
    bestof: BESTOF,
}

function setGame() {
    //reset scores
    game.cScore = 0;
    game.pScore = 0;

    const buttons = document.querySelectorAll(".move");
    buttons.forEach(btn => btn.addEventListener("click", getPlayerMove))   
}

function getPlayerMove() {
   

    const playerSelection = this.dataset.move;
    const computerSelection = computerPlay();

    const roundMessage = playRound(playerSelection, computerSelection);
    displayResult(roundMessage);

    renderMoves(playerSelection, computerSelection);
    
    let winner = ""
    if (winner = checkWinner()) {
        setGame();
        displayResult(`THE GREAT WINNER IS ${winner}`);
    }  
}

function checkWinner() {
    let {cScore, pScore, bestof} = game;

    if (cScore >= bestof)
        return "BOT";
    
    if (pScore >= bestof)
        return "PLAYER";
    
    return "";
}

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
            game.cScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        default:
            game.pScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
    }
        
}

function displayResult(message) {
    const result = document.querySelector(".result");
    result.textContent = message;
}

function renderMoves(playerMove, computerMove){
    let players = document.querySelectorAll(".move-display");
    let player = players[0];
    let computer = players[1];

    player.innerHTML = `<img src="./imgs/${playerMove}.svg" alt="${playerMove}">`;
    computer.innerHTML = `<img src="./imgs/${computerMove}.svg" alt="${computerMove}">`;

    //scores 
    let playerScore = document.querySelector(".player-score");
    let computerScore = document.querySelector(".bot-score");

    //formating
    playerScore.textContent = `${game.pScore}`.padStart(2, 0);
    computerScore.textContent = `${game.cScore}`.padStart(2, 0);
}

setGame();