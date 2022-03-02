'use strict';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

////SET PLAYER NAMES

const player1Btn = document.querySelector('.app__body-dice1');
const player2Btn = document.querySelector('.app__body-dice2');

let player1Name = '';
let player2Name = '';

player1Btn.addEventListener('click', () => {
  player1Name = prompt('Player 1 name is:');
  document.querySelector('.app__body-dice1 > button').innerText = player1Name;
});

player2Btn.addEventListener('click', () => {
  player2Name = prompt('Player 1 name is:');
  document.querySelector('.app__body-dice2 > button').innerText = player2Name;
});

////START PLAYING
const startBtn = document.querySelector('.app__body-start');

const dice1Img = document.querySelector('.img1');
const dice2Img = document.querySelector('.img2');

const title = document.querySelector('h1');

startBtn.addEventListener('click', () => {
  let dice1 = rand(1, 6);
  let dice2 = rand(1, 6);

  switch (dice1) {
    case 1:
      dice1Img.setAttribute('src', './img/dices/dice1.png');
      break;
    case 2:
      dice1Img.setAttribute('src', './img/dices/dice2.png');
      break;
    case 3:
      dice1Img.setAttribute('src', './img/dices/dice3.png');
      break;
    case 4:
      dice1Img.setAttribute('src', './img/dices/dice4.png');
      break;
    case 5:
      dice1Img.setAttribute('src', './img/dices/dice5.png');
      break;
    case 6:
      dice1Img.setAttribute('src', './img/dices/dice6.png');
      break;
  }

  switch (dice2) {
    case 1:
      dice2Img.setAttribute('src', './img/dices/dice1.png');
      break;
    case 2:
      dice2Img.setAttribute('src', './img/dices/dice2.png');
      break;
    case 3:
      dice2Img.setAttribute('src', './img/dices/dice3.png');
      break;
    case 4:
      dice2Img.setAttribute('src', './img/dices/dice4.png');
      break;
    case 5:
      dice2Img.setAttribute('src', './img/dices/dice5.png');
      break;
    case 6:
      dice2Img.setAttribute('src', './img/dices/dice6.png');
      break;
  }

  if (dice1 > dice2) {
    title.innerText = `${
      document.querySelector('.app__body-dice1 > button').innerText
    } WON!`;
  } else if (dice1 < dice2) {
    title.innerText = `${
      document.querySelector('.app__body-dice2 > button').innerText
    } WON!`;
  } else {
    title.innerText = `DRAW!`;
  }
});
