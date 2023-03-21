function getComputerChoice() {
  // Declare an array containing the possible choices for rock-paper-scissors game
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  // Generate a random integer between 0 and 2 (inclusive)
  const rpsNumber = Math.floor(Math.random() * 3);
  // Return a random choice from the array based on the generated random integer
  return rpsChoices[rpsNumber];
};

function getWinningMove(selectedMove) {
  // Determine the winning move based on the selected move
  switch (selectedMove.toLowerCase()) {
    case "rock":
      return "paper";
    case "paper":
      return "scissors";
    case "scissors":
      return "rock";
    // If the selected move is not one of the valid moves, return an error message
    default:
      return `There is no such move in "Rock Paper Scissors" as \"${selectedMove}\"!`;
  }
};

function playRound(playerSelection, computerSelection) {
  let gameResult
  // If the player's selection is the same as the computer's selection, the game is a tie
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "TIE";
  } else {
    // Otherwise, determine whether the player won or lost based on the winning move for the computer's selection
    gameResult = (playerSelection.toLowerCase() === getWinningMove(computerSelection)) ? "WIN" : "LOSE";
  }
  return gameResult;
};


function gameOfRPS() {
  let playersMove, computersMove, roundResult
  let playersScore = 0
  let computersScore = 0

  // Play 5 rounds of Rock, Paper, Scissors
  for (i = 0; i < 5; i++) {
    // Prompt the player to enter their move and get a random move for the computer
    playersMove = prompt("Enter your Rock, Paper or Scissors move:");
    computersMove = getComputerChoice();
    // Determine the result of the round from the player's perspective
    roundResult = playRound(playersMove, computersMove);

    // Update the player's score or computer's score based on the result of the round
    if (roundResult === "WIN") playersScore++;
    if (roundResult === "LOSE") computersScore++;

    // Log the result of the round to the console
    console.log(roundResult);
  };

  // Log the final scores to the console and determine the winner of the game
  console.log(`Player ${playersScore}:${computersScore} Computer`);
  if (playersScore > computersScore) console.log("PLAYER wins!");
  if (playersScore === computersScore) console.log("It's a TIE!");
  if (playersScore < computersScore) console.log("COMPUTER wins!");
}

gameOfRPS()