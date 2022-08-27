"use strict";

const game = {
  choices: ["rock", "paper", "scissors"],
  score: { player1: 0, player2: 0 },
  history: [],
  round: 0,
  winningScore: 10,
};

const btnChoice = document.querySelectorAll(".btn__choice");
const outputP1 = document.querySelector(".output-player1");
const outputP2 = document.querySelector(".output-player2");
const outputResult = document.querySelector(".output-result");
const roundCounter = document.querySelector(".round-counter");

const showChampion = (player) => {
  const gameContainer = document.querySelector(".game-container");

  gameContainer.innerHTML = `<div class="position-absolute top-50 start-50 translate-middle w-100" ><h1>
  ${
    player == 0
      ? '<span class="text-success">You are the CHAMPION! 🎊🏆🎇</span>'
      : '<span class="text-danger">You LOSE to a COMPUTER! 😒😜</span>'
  }
  </h1>
  <a class="btn btn-primary btn-lg mt-5" href="index.html">Play Again!</a>
  </div>
  `;
};

const checkWinner = () => {
  // Check if player gets winning score

  const { player1, player2 } = game.score;

  const winFilter = [player1, player2].filter(
    (score) => score >= game.winningScore
  );

  if (!winFilter.length) return;

  const winner = [player1, player2].findIndex(
    (score) => score >= game.winningScore
  );

  showChampion(winner);
};

const showScore = () => {
  const scorePlayer1 = document.querySelector("#scorePlayer1");
  const scorePlayer2 = document.querySelector("#scorePlayer2");

  scorePlayer1.innerHTML = game.score.player1;
  scorePlayer2.innerHTML = game.score.player2;
};

const showHistory = () => {
  const historyTable = document.querySelector(".history-table");

  const changeToIcon = (value) => {
    switch (value) {
      case "rock":
        return "👊";
      case "paper":
        return "✋";
      case "scissors":
        return "✌️";
    }
  };
  const history = game.history
    .map(
      (history, index) => `<tr><td>${index + 1}</td>
                          <td>${changeToIcon(history.player1)}</td>
                          <td>${changeToIcon(history.player2)}</td>
                          <td>${
                            !history.winner ? `-` : `P${history.winner}`
                          }</td></tr>`
    )
    .reverse()
    .join("");

  historyTable.querySelector("tbody").innerHTML = history;
};

const winner = (player = null) => {
  if (!player) {
    outputResult.innerHTML = "<span class='text-warning'>DRAW! 😒👍</span>";
    return 0;
  }

  if (player == 1) {
    outputResult.innerHTML = "<span class='text-success'>YOU WIN! 🎉🎊</span>";

    game.score.player1++;
  }

  if (player == 2) {
    outputResult.innerHTML = "<span class='text-danger'>YOU LOSE! 😂</span>";

    game.score.player2++;
  }

  return player;
};

btnChoice.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    game.round++;
    roundCounter.innerHTML = game.round;

    const target = e.target;

    let player1;
    let player2;
    let win;

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

    if (player1 == "rock") {
      if (player2 == "paper") {
        win = winner(2);
      } else if (player2 == "scissors") {
        win = winner(1);
      } else {
        win = winner();
      }
    }

    if (player1 == "paper") {
      if (player2 == "scissors") {
        win = winner(2);
      } else if (player2 == "rock") {
        win = winner(1);
      } else {
        //Draw
        win = winner();
      }
    }

    if (player1 == "scissors") {
      if (player2 == "rock") {
        win = winner(2);
      } else if (player2 == "paper") {
        win = winner(1);
      } else {
        win = winner();
      }
    }

    game.history.push({ player1, player2, winner: win });
    showHistory();
    showScore();
    checkWinner();
  });
});
