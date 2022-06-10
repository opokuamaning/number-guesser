let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function getAbsoluteDistance(){
  
}
function generateTarget() {
  return (randomTarget = Math.floor(Math.random() * 9));
}
function compareGuesses(humanGuess, computerGuess, secretTargetNumber) {
  let newHumanGuess = Math.abs(humanGuess - secretTargetNumber);
  let newComputerGuess = Math.abs(computerGuess - secretTargetNumber);
  if(newHumanGuess === newComputerGuess){
    return true;
  }else if(newHumanGuess < newComputerGuess){
    return true;
  }else if(newComputerGuess < newHumanGuess){
    return false;
  }
}
function updateScore(guessWinner) {
  if (guessWinner === "human") {
    humanScore += 1
  } else if (guessWinner === "computer") {
     computerScore += 1
  }
}
function advanceRound() {
  currentRoundNumber += 1;
}
