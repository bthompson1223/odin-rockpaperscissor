let answer = ""

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

  
    
}



function game() {
    var score = 0;
    var compScore = 0;
    for (let i = 0; i < 5; i++) {
        playGame();
        if (answer == "You win!") {
          score = score + 1;
        } else if (answer == "It's a tie!") {
            score = score + 0;
        }
        
        else {
            compScore = compScore + 1;
        }
        console.log(`This is your current score: ${score}`);
        console.log(answer);
    }
    
    if (score > compScore) {
        console.log("Congratulations! You win the match!")
    } else {
        console.log("You lose! Better luck next time!")
    }
}
