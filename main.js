//Global Variables://
var fighterClassicOptions = ["rock", "paper", "scissors"];
var fighterDifficultOptions = ["rock", "paper", "scissors", "the architect", "sentinel"];
var game = createGame(); //sets up initial state of the game

//QUERY SELECTORS://
//Player and AI:
var humanSide = document.getElementById("humanSide");
var humanScore = document.getElementById("humanScore");
var aiSide = document.getElementById("aiSide");
var aiScore = document.getElementById("aiScore");
//Display Messages:
var pageLoadMessage = document.getElementById("pageLoadMessage");
var pickYourGame = document.querySelector(".pick-your-game");
//Game Board:
var classicGame = document.getElementById("classic");
var difficultGame = document.getElementById("difficult");
var choiceOptions = document.getElementById("choiceOptions");
var fighterIcons = document.querySelectorAll(".fighter-icons");
//Buttons:
var changeTheGameButton = document.getElementById("changeGameButton");

//Event Listeners://
classicGame.addEventListener("click", showClassicGame);
difficultGame.addEventListener("click", showDifficultGame);
choiceOptions.addEventListener("click", chooseFighter);
changeTheGameButton.addEventListener("click", changeTheGame);

//Functions://
function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createPlayer(name, token) {
  var player = {
    name: name,
    token: token,
    wins: 0,
    fighter: 0,
  };
  return player;
}

function createGame(gameType) {
  var game = {
    player: createPlayer("human", "👨🏻‍💻"),
    ai: createPlayer("ai", "🕴️"),
    type: gameType,
    fighters: [],
  };
  currentGame = game;
  return currentGame;
}

function takeTurn(playerChoice) {
  fighter = playerChoice;
  return fighter;
}

function aiFighterChoice() {
  var aiTurn = getRandomIndex(game.fighters);
  game.ai.fighter = takeTurn(aiTurn);
  return fighter;
}

function chooseGameType(event) {
  game.gameType = event.target.closest("#classic") ? "classic" : "difficult";
  game.fighters = game.gameType === "classic" ? fighterClassicOptions : fighterDifficultOptions;
}

//checks player and ai choices
function checkWinner(playerChoice, aiChoice) {
  if (playerChoice === aiChoice) {
    scoreCounter("draw");
  } else if (
    (playerChoice === "rock" && aiChoice === "scissors") ||
    (playerChoice === "paper" && aiChoice === "rock") ||
    (playerChoice === "scissors" && aiChoice === "paper") ||
    (playerChoice === "the architect" && aiChoice === "sentinel") ||
    (playerChoice === "sentinel" && aiChoice === "the architect")
  ) {
    scoreCounter("human");
  } else {
    scoreCounter("ai");
  }
}

//updates score based on who won
function scoreCounter(winner) {
  if (winner === "draw") {
    pickYourGame.innerText = "A draw between fate and free will";
  } else if (winner === "ai") {
    game.ai.wins += 1;
    aiScore.innerText = `Wins: ${game.ai.wins}`;
    pickYourGame.innerText = "Never Send A Human To Do A Machines Job";
  } else {
    game.player.wins += 1;
    humanScore.innerText = `Wins: ${game.player.wins}`;
    pickYourGame.innerText = "Good thing I know kung fu";
  }
}

function showClassicGame() {
  chooseGameType(event);
  hide(classicGame);
  hide(difficultGame);
  hide(pageLoadMessage);
  show(changeTheGameButton);
  show(pickYourGame);
  classicFighterIcons();
  show(choiceOptions);
}

function showDifficultGame() {
  chooseGameType(event);
  hide(classicGame);
  hide(difficultGame);
  hide(pageLoadMessage);
  show(changeTheGameButton);
  show(pickYourGame);
  difficultFighterIcons();
  show(choiceOptions);
}

function changeTheGame() {
  show(classicGame);
  show(difficultGame);
  show(pageLoadMessage);
  hide(pickYourGame);
  hide(changeTheGameButton);
  hide(choiceOptions);
  reset();
  pickYourGame.innerText = `👊Choose Your Fighter🔫`;
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function chooseFighter(event) {
  if (event.target.className === "fighter-icons") {
    var fighter = event.target.closest("img").id;
  }
  game.player.fighter = takeTurn(fighter);
  aiFighterChoice();
  displayFighters(game.player, game.ai);
  checkWinner(game.player.fighter, game.ai.fighter);
  show(pickYourGame);
  setTimeout(changeTheGame, 2000);
}

function reset() {
  game.player.fighter = 0;
  game.ai.fighter = 0;
  game.type = "";
}

function displayFighters(playerChoice, aiChoice) {
  var playerFighter = document.getElementById(playerChoice.fighter);
  var aiFighter = document.getElementById(aiChoice.fighter);
  choiceOptions.innerHTML = `
  <img id="${playerChoice.fighter}" src="${playerFighter.src}" alt="${playerFighter.alt}">
  <img id="${aiChoice.fighter}" src="${aiFighter.src}" alt="${aiFighter.alt}">
  `;
};

function generateFighterIcons(fighterOptions) {
  var iconsHTML = '';

  for (var i = 0; i < fighterOptions.length; i++) {
    var fighter = fighterOptions[i];
    iconsHTML += '<img class="fighter-icons" src="assets/' + fighter + '.png" id="' + fighter + '" alt="' + fighter + '">';
  }

  return iconsHTML;
}

function classicFighterIcons() {
  choiceOptions.innerHTML = generateFighterIcons(["rock", "paper", "scissors"]);
}

function difficultFighterIcons() {
  choiceOptions.innerHTML = generateFighterIcons(["rock", "paper", "scissors", "architect-icon", "sentinel"]);
}