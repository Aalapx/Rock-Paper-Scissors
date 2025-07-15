let userScore = 0;
let compScore = 0;
let userChoice;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // Generates a random index between 0 and 2
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "It's a Draw!, try again!";
    msg.style.backgroundColor = "#081b31";
    console.log("It's a Draw!");

}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.color = "white";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.color = "White";
        msg.style.backgroundColor = "red";

    }


}

const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer Choice: ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true; 
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})