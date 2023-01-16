function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (3 - 1 +1) + min);
}

function lowerCase(str) {
    return str.toLowerCase();
}

function titleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playGame() {
  const computerSelection = getComputerChoice(1, 3);
  let playerSelection = titleCase(lowerCase(prompt()));

  if (playerSelection == "Rock" && computerSelection == 3) {
    return  answer = "You win!";
  } else if (playerSelection == "Rock" && computerSelection == 2) {
    return answer = "You lose! Paper beats rock!";
  } else if (playerSelection == "Paper" && computerSelection == 1) {
    return answer = "You win!";
  } else if (playerSelection == "Paper" && computerSelection == 3) {
    return answer = "You lose! Scissors beats paper!";
  } else if (playerSelection == "Scissors" && computerSelection == 2) {
    return answer = "You win!";
  } else if (playerSelection == "Scissors" && computerSelection == 1) {
    return answer = "You lose! Rock beats scissors!";
  } else {
    return answer = "It's a tie!"
  }

  console.log(answer);
    
}

