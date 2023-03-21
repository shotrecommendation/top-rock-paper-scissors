function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  const rpsNumber = Math.floor(Math.random() * 3);
  return rpsChoices[rpsNumber];
};

function getWinningMove(selectedMove) {
  switch (selectedMove.toLowerCase()) {
    case "rock":
      return "paper";
    case "paper":
      return "scissors";
    case "scissors":
      return "rock"
    default:
      return `There is no such move in "Rock Paper Scissors" as \"${selectedMove}\"!`;
  }
};

function playRound(playerSelection, computerSelection) {
  let gameResult
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a TIE!";
  } else {
    gameResult = (playerSelection.toLowerCase() === getWinningMove(computerSelection)) ? "WIN" : "LOSE";
  }
  return `You ${gameResult}! ${playerSelection} beats ${computerSelection}!`;
}
