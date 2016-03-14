////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

//HW 3

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move;
    return move || getInput();
    
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

var playerMove = getPlayerMove();
getPlayerMove;
var computerMove = getComputerMove();

//HW 4

function getWinner(playerMove, computerMove) {
    var winner;
    
    if (playerMove === computerMove) {winner = 'tie';}
    else if (playerMove === "paper" && computerMove === "rock") {winner ='player';}
    else if (playerMove === "paper" && computerMove === "scissors") {winner ='computer';}
    else if (playerMove === "rock" && computerMove === "paper") {winner= 'computer';}
    else if (playerMove === "rock" && computerMove === "scissors") {winner ='player';}
    else if (playerMove === "scissors" && computerMove === "paper") {winner = 'player';}
    else if (playerMove === "scissors" && computerMove === "rock") {winner = 'computer';}
    else {return 'Not a valid response';}
    
    return winner
}

getWinner(playerMove,computerMove);

//HW 5

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner(playerMove,computerMove);
 // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        if (winner === 'player'){
            playerWins++;
            console.log('You won! You chose ' + playerMove + ' and the computer chose ' + computerMove);
            console.log('The score is currently ' + playerWins + ' wins for you ' + 'and ' + computerWins + ' wins for the computer.' + '\n')}
        else if (winner === 'computer'){
            computerWins++;
            console.log('You lost! You chose ' + playerMove + ' and the computer chose ' +computerMove);
            console.log('The score is currently ' + playerWins + ' wins for you ' + 'and ' + computerWins + ' wins for the computer.' + '\n');}
        else if (winner === 'tie'){
            console.log('Tied! You both played ' + playerMove);}
        else if (playerWins === 5){
            console.log('You win! Game over!');}
        else if (computerWins === 5){
            console.log('Computer wins! Game over!');}
    
        
        
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    return [playerWins, computerWins];
}}
playToFive();