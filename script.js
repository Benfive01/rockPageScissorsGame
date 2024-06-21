//get computer choice from rock, paper, scissors

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomGuess = Math.floor(Math.random() * 3);
    const choice = choices[randomGuess];
    return choice;
}




// //get player's input

function getPlayerChoice(){
    const playerChoice = prompt("Select a choice from (Rock, Paper or Scissors)").toLowerCase();
    return playerChoice;

}
 
// //check if player's choice is same with computer as this is a tie. Check with other options too

function checkTheChoices(playerChoice, computerChoice){
   
    if(playerChoice === computerChoice){
    return ("it's a tie");
    }else if((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'rock')){
        
        return ('You WIN');
    }else{
        
    return ('Computer WINS');
    }
    }

    //initiate the game. 
function playGame(){
    
    let playerScore = 0;
    let computerScore = 0;
    let numberOfRound = 3;

    // Using a for loop to run the number of rounds game is played
    for(let count = 0; count < numberOfRound; count++){

    //player option & computer option needs to be invoked now in a loop. If outside loop, it will just be one valve for all number of iterations
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    
    //This includes the score count by increment depending on who wins every round
    let result = checkTheChoices(playerChoice, computerChoice);
   if(result === 'You WIN'){
    playerScore++;

   }else if(result === 'Computer WINS'){
    computerScore++;
   }
    
   //Displaying the outcome of the rounds played in the game
    }
    document.getElementById("tieNotice").innerHTML = `* There was ${numberOfRound - (playerScore + computerScore)} tie`
    document.getElementById("playerScoreNotice").innerHTML = `* Your Score is ${playerScore} point(s)`
    document.getElementById("computerScoreNotice").innerHTML = `* Computer Score is ${computerScore} point(s)`

    
    if(playerScore > computerScore){
        document.getElementById("winnerDeclaration").innerHTML = "***You won with " + playerScore + " out of " + numberOfRound + " rounds***"
    }else{
        document.getElementById("winnerDeclaration").innerHTML = "***Computer won with " + computerScore + " out of " + numberOfRound + " rounds***"
    }

}


    
    