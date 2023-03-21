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
    return "TIE";
  } else {
    gameResult = (playerSelection.toLowerCase() === getWinningMove(computerSelection)) ? "WIN" : "LOSE";
  }
  return gameResult;
};


function gameOfRPS() {
  let playersMove, computersMove, roundResult
  let playersScore = 0
  let computersScore = 0

  for (i = 0; i < 5; i++) {
    playersMove = prompt("Enter your Rock, Paper or Scissors move:");
    computersMove = getComputerChoice();
    roundResult = playRound(playersMove, computersMove);

    if (roundResult === "WIN") playersScore++;
    if (roundResult === "LOSE") computersScore++;
    console.log(roundResult);
  };

  console.log(`Player ${playersScore}:${computersScore} Computer`);
  if (playersScore > computersScore) console.log("PLAYER wins!");
  if (playersScore === computersScore) console.log("It's a TIE!");
  if (playersScore < computersScore) console.log("COMPUTER wins!");
}

gameOfRPS()