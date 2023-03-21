function getComputerChoice() {
  // define choices in a list including "Rock", "Paper" and "Scissors"
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  
  // draw a random number from 0 to 2
  let rpsNumber = Math.floor(Math.random() * 3);

  // return the choice from the list that is on the position pointed by a number drawn
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

console.log(getWinningMove(getComputerChoice()))