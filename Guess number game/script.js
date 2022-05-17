"use strict";
//Declare variables
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const check = document.querySelector(".check");

//const guess = document.querySelector(".guess").value;
//const score = document.querySelector(".score");
//document.querySelector(".highscore").textContent;
let score = 20;
let highscore = 0;

//Create random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const guess = Number(document.querySelector(".guess").value);

//listern to the click event
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //score = document.querySelector(".score").textContent;
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too small";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too big";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    //Calculate score & highscore
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
      document.querySelector(".score").textContent = 20;
    }
  }
});

//Again button to reset
again.addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  //document.querySelector(".highscore").textContent = score;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = " ";
  document.body.style.backgroundColor = "#222";
});
