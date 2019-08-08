//using dom to cash
var userScore = 0;
var computerScore = 0;
var userScoreSpan = document.querySelector("#user-score");
var compScoreSpan = document.querySelector("#computer-score");
var scoreBoardDiv = document.querySelector(".score-board");
var resultP = document.querySelector(".result p");
var rockDiv = document.querySelector("#r");
var paperDiv = document.querySelector("#p");
var scissorsDiv = document.querySelector("#s");
//adding events and functions
function getComputerChoice() {
    var choices = ["r", "p", "s"];
    var randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "rp") return "Paper";
    return "Scissors";
}
function win(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sub();
    var smallCompWord = "comp".fontsize(3).sub();
    var userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats 
                ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
                userChoiceDiv.classList.add("green-glow");
    setTimeout(() => userChoiceDiv.classList.remove("green-glow"), 700);
}
function lose(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sub();
    var smallCompWord = "comp".fontsize(3).sub();
    var userChoiceDiv = document.getElementById(userChoice);
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses
                ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
    userChoiceDiv.classList.add("red-glow");
    setTimeout(() => userChoiceDiv.classList.remove("red-glow"), 700);
}
function draw(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sub();
    var smallCompWord = "comp".fontsize(3).sub();
    var userChoiceDiv = document.getElementById(userChoice);
    resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals
                 ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
    userChoiceDiv.classList.add("grey-glow");
    setTimeout(() => userChoiceDiv.classList.remove("grey-glow"), 700);
}
var game = (userChoice, computerChoice) => {
    var computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs": 
        case "pr": 
        case "sp": 
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        };
};
var main = () => {
    rockDiv.addEventListener("click", function() {
        game("r");
    });
    paperDiv.addEventListener("click", function() {
        game("p");
    });
    scissorsDiv.addEventListener("click", function() {
        game("s");
    });
}

main();