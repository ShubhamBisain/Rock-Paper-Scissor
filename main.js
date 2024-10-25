let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
/*
if (!score ) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0

  };
}
  */

function playGame(playerMove){
  let result = '';
  const computerMove= pickComputerMove();
  console.log(computerMove);

  if (playerMove === 'Scissor'){
    if (computerMove === 'Rock') {
    result = 'You Lose';
  }
  else if (computerMove === 'Paper') {
    result= 'You Win';
  }
  else if (computerMove === 'Scissor') {
    result = 'Tie';
  }
  }

  else if ( playerMove === 'Rock') {
    if (computerMove === 'Rock') {
    result = 'Tie';
  }
  else if (computerMove === 'Paper') {
    result= 'You Lose';
  }
  else if (computerMove === 'Scissor') {
    result = 'You Win';
  }
  }

  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
    result = 'U Win';
  }
  else if (computerMove === 'Paper') {
    result= 'You Tie';
  }
  else if (computerMove === 'Scissor') {
    result = 'You Lose';
  }
  }
  
  if (result === 'You Win' || result === 'U Win') {
    score.wins += 1;
  }
  else if (result === 'You Lose') {
    score.losses += 1;
  }
  else if (result === 'Tie' || result === 'You Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML= result;
  document.querySelector('.js-moves').innerHTML= `You <img src="images/${playerMove}-emoji.png"
  class= "move-icon">
  <img src="images/${computerMove}-emoji.png"
  class= "move-icon">Computer`;


      }

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  let computerMove = '';
  const randomNumber= Math.random();

  if (randomNumber >=0 && randomNumber <= 1/3) {
  computerMove = 'Rock';
  }
  else if (randomNumber >= 1/3 && randomNumber <= 2/3){
  computerMove = 'Paper';
  }
  else if(randomNumber > 2/3 && randomNumber <= 1){
  computerMove = 'Scissor';
  }

  return computerMove;
}