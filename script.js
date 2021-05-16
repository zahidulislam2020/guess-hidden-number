let rndNum = document.querySelector("#rndNum");
let displayComment = document.querySelector("#displayComment");
let input = document.querySelector("#input");
let timeCount = document.querySelector(".timeCount");
let evaluateBtn = document.querySelector("#evaluate");
let startGameBtn = document.querySelector("#startGame");
let playAgainBtn = document.querySelector("#playAgain");
let timeUp = document.querySelector(".timeUp");
let timerDisplay = document.querySelector(".CounterDisplay");
let yourNumber = document.querySelector(".yourNumber");
let setTimer = document.querySelector(".setTimer");

let countDownFrom;
let intervalId;

timeCount.innerText = setTimer.value;
countDownFrom = setTimer.value;

setTimer.addEventListener("input", onChangeFunc);
function onChangeFunc(e) {
  if (e.target.value >= 10 && e.target.value <= 60) {
    countDownFrom = e.target.value;
    timeCount.innerText = e.target.value;
  }
}

input.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    inputValue();
  }
});

let min = 1,
  max = 80;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

rndNum.style.background = "black";
input.disabled = true;

function show() {
  rndNum.style.background = "pink";
  showrnd.disabled = true;
  rndNum.innerHTML = randomNumber;
}

displayComment.innerHTML = "Press 'Start Game' Button to Play";

function playAgain(e) {
  input.disabled = false;
  input.value = null;
}

function pageReload() {
  location.reload();
}

function inputValue() {
  let x = Number(input.value);
  yourNumber.innerHTML = `Your Last Guessing Number is ${x}`;
  input.value = "";
  input.focus();

  if (x >= randomNumber - 3 && x <= randomNumber - 1) {
    displayComment.innerHTML = "You almost got the number! Go up.";
  } else if (x <= randomNumber + 3 && x >= randomNumber + 1) {
    displayComment.innerHTML = "You almost got the number! Go down.";
  } else if (x >= randomNumber - 7 && x <= randomNumber - 3) {
    displayComment.innerHTML = "You are very near, you can do it! Go up.";
  } else if (x <= randomNumber + 7 && x >= randomNumber + 3) {
    displayComment.innerHTML = "You are very near, you can do it! Go down.";
  } else if (x >= randomNumber - 10 && x <= randomNumber - 7) {
    displayComment.innerHTML =
      "You are near what you are trying to guess! Go up.";
  } else if (x <= randomNumber + 10 && x >= randomNumber + 7) {
    displayComment.innerHTML =
      "You are near what you are trying to guess! Go down.";
  } else if (x >= randomNumber - 15 && x <= randomNumber - 10) {
    displayComment.innerHTML = "You are far from your goal, try hard! Go up.";
  } else if (x <= randomNumber + 15 && x >= randomNumber + 10) {
    displayComment.innerHTML = "You are far from your goal, try hard! Go down.";
  } else if (x == randomNumber) {
    displayComment.innerHTML = "Congratulation! You won the game!";
    showrnd.removeAttribute("disabled");
    playAgainBtn.removeAttribute("disabled");
    evaluateBtn.disabled = true;
    input.disabled = true;
    timerDisplay.style.color = "green";
    timerDisplay.innerHTML = `<b>YOU FOUND THE NUMBER WITHIN ${
      +setTimer.value - countDownFrom
    } SECONDS!</b>`;
    clearInterval(intervalId);
  } else {
    displayComment.innerHTML = "You are too far to make your goal!";
  }
}

function startGame() {
  intervalId = setInterval(timeFunc, 1000);
  startGameBtn.disabled = true;
  evaluateBtn.removeAttribute("disabled");
  displayComment.innerHTML = "Your Time started!";
  input.disabled = false;
  setTimer.disabled = true;
  input.focus();
}

function timeFunc() {
  if (countDownFrom == 0) {
    clearInterval(intervalId);
    timeUp.style.display = "inline-block";
    showrnd.removeAttribute("disabled");
    playAgainBtn.removeAttribute("disabled");
    evaluateBtn.disabled = true;
    input.disabled = true;
    displayComment.innerHTML = "You are a Looser! Try again!";
    timerDisplay.style.color = "red";
    timerDisplay.innerHTML = "<b>YOUR TIME IS OVER!<br>TAKE ANOTHER CHANCE</b>";
  } else {
    countDownFrom = countDownFrom < 10 ? "0" + countDownFrom : countDownFrom;
    timeCount.textContent = countDownFrom;
    countDownFrom--;
  }
}

//===================================================================================//
