let userScore = 0;
let compScore = 0;

//generating computer choice
const genCompChoice = () => {
  let arr = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return arr[index];
};

//generating user choice
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log(userChoice, "was clicked");
    playGame(userChoice);
  });
});

//developing game
const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  console.log("Computer =", compChoice);
  console.log("You =", userChoice);
  if (userChoice === compChoice) {
    console.log("game draw");
    draw();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      if (compChoice == "paper") {
        // console.log("paper beats rock");
        userWin = false;
      } else {
        // console.log("rock beats scissors");
        //rock beats scissors
        userWin = true;
      }
    } else if (userChoice == "paper") {
      if (compChoice == "rock") {
        //paper beats rock
        userWin = true;
      } else {
        //scissors beats paper
        userWin = false;
      }
    } else {
      //userChoice == "scissors"
      if (compChoice == "rock") {
        //rock beats scissors
        userWin = false;
      } else {
        //scissors beats paper
        userWin = true;
      }
    }
    let winner;
    if (userWin == true) {
      winner = "you";
    } else {
      winner = "computer";
    }
    console.log("Winner =", winner);
    show(userWin, compChoice, userChoice);
  }
};
//draw function
function draw() {
  let msg = document.querySelector(".comment");
  msg.innerText = "game draw";
  msg.style.color = "blue";
}
//display function

function show(userWin, compChoice, userChoice) {
  if (userWin == true) {
    let msg = document.querySelector(".comment");
    msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
    msg.style.color = "green";
    userScore++;
    let us = document.querySelector("#my-score");
    us.innerText = userScore;
  } else {
    let msg = document.querySelector(".comment");
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.color = "red";
    compScore++;
    let cs = document.querySelector("#comp-score");
    cs.innerText = compScore;
  }
}
