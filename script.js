let answer = ""
let score = 0;
let compScore = 0;
const results = document.querySelector('.results');

const choice = document.querySelector('.choices')



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
  
  let compWord = ""

  if (computerSelection == 1) {
    compWord = "Rock";
  } else if (computerSelection == 2) {
    compWord = "Paper";
  } else {
    compWord = "Scissors"
  }


  if (playerSelection == "Rock" && computerSelection == 3) {
    document.querySelector('.choices').textContent = `${playerSelection} vs. ${compWord}! You win!`;
    return  answer = "You win!";
  } else if (playerSelection == "Rock" && computerSelection == 2) {
    document.querySelector('.choices').textContent = `${playerSelection} vs. ${compWord}! You lose! Paper beats Rock!`;
    return answer = "You lose! Paper beats rock!";
  } else if (playerSelection == "Paper" && computerSelection == 1) {
    document.querySelector('.choices').textContent = `${playerSelection} vs. ${compWord}! You win!`;
    return answer = "You win!";
  } else if (playerSelection == "Paper" && computerSelection == 3) {
    document.querySelector('.choices').textContent = `${playerSelection} vs. ${compWord}! You lose! Scissors beats Paper!`;
    return answer = "You lose! Scissors beats paper!";
  } else if (playerSelection == "Scissors" && computerSelection == 2) {
    document.querySelector('.choices').textContent = `${playerSelection} vs. ${compWord}! You win!`;
    return answer = "You win!";
  } else if (playerSelection == "Scissors" && computerSelection == 1) {
    document.querySelector('.choices').textContent = `${playerSelection} vs. ${compWord}! You lose! Rock beats Scissors!`;
    return answer = "You lose! Rock beats scissors!";
  } else {
    document.querySelector('.choices').textContent = `${playerSelection} vs. ${compWord}! It's a tie!`;
    return answer = "It's a tie!"
  }

  
    
}



function checkScore () {
  if (score == 5) {
  console.log("Congratulations on winning the match!");
  finalResult.textContent = "Congratulations on winning the match!";
  score = 0;
  compScore = 0;
};

  if (compScore == 5) {
  console.log("You lose! better luck next time!")
  finalResult.textContent = "You lose! Better luck next time!";
  score = 0;
  compScore = 0;
};
}

function game() {
    

   
        playGame();
        if (answer == "You win!") {
          score = score + 1;
          document.querySelector('.playerscore').textContent = `Your score: ${score}`
        } else if (answer == "It's a tie!") {
            score = score + 0;
            document.querySelector('.playerscore').textContent = `Your score: ${score}`;
            document.querySelector('.computerscore').textContent = `Computer score: ${compScore}`;
        }
        
        else {
            compScore = compScore + 1;
            document.querySelector('.computerscore').textContent = `Computer score: ${compScore}`;
        }
        console.log(answer);
        checkScore();
    
}

const pscore = document.createElement('div');
pscore.classList.add('playerscore');
pscore.textContent = `Your score: ${score}`;
//document.querySelector('.playerscore').innerText = pscore.textContent;
results.appendChild(pscore);

const cscore = document.createElement('div');
cscore.classList.add('computerscore');
cscore.textContent = `Computer score: ${compScore}`;
results.appendChild(cscore);

const finalResult = document.createElement('div');
finalResult.classList.add('final-score');
results.appendChild(finalResult);

 

