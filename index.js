let playerChoice;

function playerPaper(){
    playerChoice = "paper";
    console.log(playerChoice)

    document.getElementById("playerChoice").innerHTML = "Your Choice: Paper";
    generateComputerChoice();
}

function playerRock(){
    playerChoice = "rock";
    console.log(playerChoice)

    document.getElementById("playerChoice").innerHTML = "Your Choice: Rock";
    generateComputerChoice();
}

function playerScissors(){
    playerChoice = "scissors";
    console.log(playerChoice)

    document.getElementById("playerChoice").innerHTML = "Your Choice: Scissors";
    generateComputerChoice();
}

function generateComputerChoice(){
    let choiceNum = Math.random() * 3;
    choiceNum = Math.floor(choiceNum);

    if(choiceNum == 0){
        choiceString = "Rock";
    }
    else if(choiceNum == 1){
        choiceString = "Paper";
    }
    else if(choiceNum == 2){
        choiceString = "Scissors";
    }


    document.getElementById("computerChoice").innerHTML = `Computer Choice: ${choiceString}`;
}
