let userPoints = 0;
let computerPoints = 0;

let instructions = document.querySelector("#instructions");
let userPointsContainer = document.querySelector("#user-points");
let computerPointsContainer = document.querySelector("#computer-points");
let message = document.querySelector("#message");
let winsPoitsContainer = document.querySelector("#winsPoint");
let chooseElement = document.querySelector("#chooseElement");
let userElectionContainer = document.querySelector("#userElection");
let computerElectionContainer = document.querySelector("#computerElection");

let elementsButtons = document.querySelectorAll(".element");
elementsButtons.forEach(button => {
    button.addEventListener("click", startTurn);
});

function startTurn(e) {
    let computerElection = Math.floor(Math.random() * 3);
    let userElection = e.currentTarget.id;

    // rock => 0
    // paper => 1
    // scissors => 2

    if(computerElection === 0) {
        computerElection = "rock🪨";
    } else if(computerElection === 1) {
        computerElection = "paper📋";
    } else if(computerElection === 2) {
        computerElection = "scissors✂️";
    }

    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    // equals is tie

    if(
        (userElection === "rock🪨" && computerElection === "scissors✂️") ||
        (userElection === "scissors✂️" && computerElection === "paper📋") ||
        (userElection === "paper📋" && computerElection === "rock🪨")
    ) {
        userWins();
    } else if(
        (computerElection === "rock🪨" && userElection === "scissors✂️") ||
        (computerElection === "scissors✂️" && userElection === "paper📋") ||
        (computerElection === "paper📋" && userElection === "rock🪨")
    ){
        computerWins();
    } else {
        tie();
    }

    message.classList.remove("disabled");
    userElectionContainer.innerText = userElection;
    computerElectionContainer.innerText = computerElection;

    if(userPoints === 5 || computerPoints === 5) {
        if(userPoints === 5) {
            instructions.innerText = "🔥 You won the game! 🔥"
        }
        if(computerPoints === 5) {
            instructions.innerText = "😭 Computer won the game! 😭"
        }

        chooseElement.classList.add("disabled");
        restart.classList.remove("disabled");
        restart.addEventListener("click", restartGame);
    }
}

function userWins() {
    userPoints++;
    userPointsContainer.innerText = userPoints;
    winsPoitsContainer.innerText = "You won 1 point! 🔥"
}

function computerWins() {
    computerPoints++;
    computerPointsContainer.innerText =computerPoints;
    winsPoitsContainer.innerText = "Computer wins 1 point! 😭"
}

function tie() {
    winsPoitsContainer.innerText = "Tie! 😱"
}

function restartGame() {
    restart.classList.add("disabled");
    chooseElement.classList.remove("disabled");
    message.classList.add("disabled");

    userPoints = 0;
    computerPoints = 0;
    
    userPointsContainer.innerText = userPoints;
    computerPointsContainer.innerText = computerPoints;

    instructions.innerText = "The first to get 5 points is the winner!"
}