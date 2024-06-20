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
 
