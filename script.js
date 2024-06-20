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

    //initiate the game. player option and computer option needs to be invoked now, otherwise, the value will differ at every point it's invoked

function playGame(){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    
    let result = checkTheChoices(playerChoice, computerChoice);
    console.log(result);
    }
    
    playGame();
    