let computerChoiceStr;
let playerChoice = prompt("What is your Choice?")
getComputerChoice();
getPlayerChoice();

function getComputerChoice(){
    let computerChoiceNum = Math.random() * 3;

    computerChoiceNum = Math.floor(computerChoiceNum);

    if(computerChoiceNum == 0){
        computerChoiceStr = "rock";
    }
    else if(computerChoiceNum == 1){
        computerChoiceStr = "paper";
    }
    else if(computerChoiceNum == 2){
        computerChoiceStr = "scissors";
    }
}

function getPlayerChoice(){

    playerChoice.toLowerCase();

    if(playerChoice !== null){
        Winner();
    }
}

function Winner(){
    if(playerChoice == "rock" && computerChoiceStr == "scissors"){
        console.log("You Win! Rock beats Paper.");
    }

    if(playerChoice == "paper" && computerChoiceStr == "rock"){
        console.log("You Win! Paper beats Rock.");
    }

    if(playerChoice == "scissors" && computerChoiceStr == "paper"){
        console.log("You Win! Scissors beats Paper.");
    }

    if(playerChoice == computerChoiceStr){
        console.log("Nobody Wins... You Tied");
    }

    if(playerChoice == "scissors" && computerChoiceStr == "rock"){
        console.log("You Lose... Rock beats Paper.");
    }

    if(playerChoice == "rock" && computerChoiceStr == "paper"){
        console.log("You Lose... Paper beats Rock.");
    }

    if(playerChoice == "paper" && computerChoiceStr == "scissors"){
        console.log("You Lose... Scissors beats Paper.");
    }
}