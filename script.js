let answer = ""

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (3 - 1 +1) + min);
}


rock.addEventListener('click', () => {
  playerSelection = "Rock";
});

paper.addEventListener('click', () => {
  playerSelection = "Paper";
});

scissors.addEventListener('click', () => {
  playerSelection = "Scissors";
});

let playerSelection = "";

const buttons = document.querySelectorAll('button');

 buttons.forEach((button) => {
  button.addEventListener('click', game)})

function playGame() {
  const computerSelection = getComputerChoice(1, 3);
  

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');



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

let score = 0;
let compScore = 0;

function checkScore () {
  if (score == 5) {
  console.log("Congratulations on winning the match!");
  score = 0;
  compScore = 0;
};

  if (compScore == 5) {
  console.log("You lose! better luck next time!")
  score = 0;
  compScore = 0;
};
}

function game() {
    

   
        playGame();
        if (answer == "You win!") {
          score = score + 1;
        } else if (answer == "It's a tie!") {
            score = score + 0;
        }
        
        else {
            compScore = compScore + 1;
        }
        console.log(`This is your current score: ${score}
                    \nThis is the computer's score: ${compScore}`);
        console.log(answer);
        checkScore();
    
}



 

