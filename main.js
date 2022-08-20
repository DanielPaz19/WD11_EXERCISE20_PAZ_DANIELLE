"use strict";

const game = {
  choices: ["rock", "paper", "scissors"],
};
const btnChoice = document.querySelectorAll(".btn__choice");
const outputP1 = document.querySelector(".output-player1");
const outputP2 = document.querySelector(".output-player2");
const outputResult = document.querySelector(".output-result");

btnChoice.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const target = e.target;

    let player1;
    let player2;

    if (target.className.includes("btn__rock")) {
      outputP1.innerHTML = "👊";
      player1 = game.choices[0];
    }
    if (target.className.includes("btn__paper")) {
      outputP1.innerHTML = "✋";
      player1 = game.choices[1];
    }
    if (target.className.includes("btn__scissors")) {
      outputP1.innerHTML = "✌️";
      player1 = game.choices[2];
    }

    const randNumber = Math.floor(Math.random() * 3);

    if (randNumber == 0) {
      outputP2.innerHTML = "👊";
      player2 = game.choices[0];
    }
    if (randNumber == 1) {
      outputP2.innerHTML = "✋";
      player2 = game.choices[1];
    }
    if (randNumber == 2) {
      outputP2.innerHTML = "✌️";
      player2 = game.choices[2];
    }

    // Check winner

    if (player1 == "rock" && player2 == "paper") {
      outputResult.innerHTML = "<span class='text-danger'>YOU LOSE! 😂</span>";
    } else if (player1 == "rock" && player2 == "scissors") {
      outputResult.innerHTML =
        "<span class='text-success'>YOU WIN! 🎉🎊</span>";
    } else {
      console.log("Draw");
    }
    if (player1 == "paper" && player2 == "scissors") {
      //Player 2 wins
      outputResult.innerHTML = "<span class='text-danger'>YOU LOSE! 😂</span>";
    } else if (player1 == "paper" && player2 == "rock") {
      //Player 1 wins
      outputResult.innerHTML =
        "<span class='text-success'>YOU WIN! 🎉🎊</span>";
    } else {
      //Draw
      outputResult.innerHTML = "<span class='text-warning'>DRAW! 😒👍</span>";
    }

    if (player1 == "scissors" && player2 == "rock") {
      //Player 2 wins
      outputResult.innerHTML = "<span class='text-danger'>YOU LOSE! 😂</span>";
    } else if (player1 == "scissors" && player2 == "paper") {
      //Player 1 wins
      outputResult.innerHTML =
        "<span class='text-success'>YOU WIN! 🎉🎊</span>";
    } else {
      //Draw
    }
  });
});
