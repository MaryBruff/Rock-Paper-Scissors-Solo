// Global Variables:
var fighterClassicOptions = ['rock', 'paper', 'scissors']
var fighterDifficultOptions = ['rock', 'paper', 'scissors', 'the architect', 'sentinel']
var game = createGame() //holds current game

//QUERY SELECTORS:///
var humanSide = document.getElementById('humanSide'); //human side
var humanScore = document.getElementById('humanScore'); //counter human

var changeTheGameButton = document.getElementById('changeGameButton') //change game button

var pageLoadMessage = document.getElementById('pageLoadMessage'); //choose your reality
var pickYourGame = document.querySelector('.pick-your-game'); //choose your fighter
// var bothGames = document.getElementById('bothGames'); //both games

var classicGame = document.getElementById('classic'); //classic game
var difficultGame = document.getElementById('difficult'); //difficult game

var aiSide = document.getElementById('aiSide'); //ai side
var aiScore = document.getElementById('aiScore'); //counter ai
var choiceOptions = document.getElementById('choiceOptions'); //fight section
var fighterIcons = document.querySelectorAll('.fighter-icons'); //fighter icons



//Event Listeners:
classicGame.addEventListener('click', loadClassicGame) 
difficultGame.addEventListener('click', loadDifficultGame)
choiceOptions.addEventListener('click', chooseFighter) //player select fighter
changeTheGameButton.addEventListener('click', changeTheGame) //change game button


//Functions: 
function createPlayer(name, token) {
var player = {
      name: name,
      token: token,
      wins: 0,   
      fighter: 0
    }
    return player
  }
//object for player and ai

  function takeTurn(playerChoice) {
    fighter = playerChoice
    return fighter
  }
  //records players choice 

  function createGame(gameType) {
    var game = {
      player: createPlayer('human', '👨🏻‍💻'),
      ai: createPlayer('ai', '🕶️'),
      type: gameType,
      fighters: [],
    }    
    currentGame = game
    return currentGame
  }
//game with object and ai player

  //game type and fighters 
function chooseGameType(event) {
if(event.target.closest('#classic')) {  
  game.gameType = 'classic'
  game.fighters = fighterClassicOptions
} else {
  game.gameType = 'difficult'
  game.fighters = fighterDifficultOptions
}
}
////choose gameType is working /////

//checks player and ai choices 
function checkWinner(playerChoice, aiChoice) {
  if (playerChoice === aiChoice) {
    scoreCounter('draw')
  } else if (
    (playerChoice === 'rock' && aiChoice === 'scissors') ||
    (playerChoice === 'paper' && aiChoice === 'rock') ||
    (playerChoice === 'scissors' && aiChoice === 'paper') ||
    (playerChoice === 'the architect' && aiChoice === 'sentinel') ||
    (playerChoice === 'sentinel' && aiChoice === 'the architect')
  ) {
   scoreCounter('human')
  } else {
    scoreCounter('ai')
  }
//  game.reset = true
}
//data model is not resetting after each game
//updates score based on who won
function scoreCounter(winner) {
  if (winner === 'draw') {
    pickYourGame.innerText = 'Draw!' //fun matrix reference
  } else if (winner === 'ai') {
    game.ai.wins += 1
    aiScore.innerText = `Wins: ${game.ai.wins}` ///check if this working ??
    pickYourGame.innerText = 'You Lose!' //fun matrix reference
  } else {
    game.player.wins += 1
    humanScore.innerText = `Wins: ${game.player.wins}`
    pickYourGame.innerText = 'You Win!' //fun matrix reference
  }
}




function aiFighterChoice() {
  var aiTurn = getRandomIndex(game.fighters)
  console.log("AI's choice:", aiTurn); 
  game.ai.fighter = takeTurn(aiTurn)
  return fighter
}
//random ai choice


function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function loadClassicGame() {
  chooseGameType(event)
  hide(classicGame)
  hide(difficultGame)
  hide(pageLoadMessage)
  show(changeTheGameButton)//button
  show(pickYourGame)//during
  classicFighterIcons() //loads classic fighter icons
  show(choiceOptions) //should show fighter icons
}

function loadDifficultGame() {
  chooseGameType(event)
  hide(classicGame)
  hide(difficultGame)
  hide(pageLoadMessage)
  show(changeTheGameButton)//button
  show(pickYourGame)//during
  difficultFighterIcons() //loads difficult fighter icons
  show(choiceOptions) //should show fighter icons
  
}


function changeTheGame() {
  show(classicGame)
  show(difficultGame)
  show(pageLoadMessage)
  hide(pickYourGame)
  hide(changeTheGameButton)
  hide(choiceOptions)
  reset()
  pickYourGame.innerText = `🔵💊Choose Your Reality💊🔴`
}




//fighter selection and determine winner
function chooseFighter(event) {
  console.log("GAME", game)
  if (event.target.className === 'fighter-icons') {
    var fighter = event.target.closest('img').id
  }
  game.player.fighter = takeTurn(fighter)
  aiFighterChoice()
  displayFighters(game.player, game.ai)
  checkWinner(game.player.fighter, game.ai.fighter)
  show(pickYourGame)
  setTimeout(changeTheGame, 2000)   
}

function reset() {
  game.player.fighter = 0
  game.ai.fighter = 0
  game.type = ''
  
}


///=> displayFighters displays the chosen fighters on the interface


function displayFighters(playerChoice, aiChoice) {
  var playerFighter = document.getElementById(playerChoice.fighter);
  var aiFighter = document.getElementById(aiChoice.fighter);
  console.log('AIFIGHTER', aiFighter, aiChoice)
  console.log('PLAYER', playerFighter)
  choiceOptions.innerHTML = `
  <img id="${playerChoice.fighter}" src="${playerFighter.src}" alt="${playerFighter.alt}">
  <img id="${aiChoice.fighter}" src="${aiFighter.src}" alt="${aiFighter.alt}">
  `
}




//hide and remove page
function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};


function classicFighterIcons() {
  choiceOptions.innerHTML = 
  `<img class = "fighter-icons" src="assets/rockpng-17567.png" id = "rock" alt = "mossy rock">
<img class = "fighter-icons" src="assets/-paper-png-118751.png" id = "paper" alt = "torn piece of notebook paper">
<img class = "fighter-icons" src="assets/scissors-png-239069.png" id = "scissors" alt = "pair of scissors">`
}


function difficultFighterIcons() {
  choiceOptions.innerHTML = 
  `<img class = "fighter-icons" src="assets/rockpng-17567.png" id = "rock" alt = "mossy rock">
<img class = "fighter-icons" src="assets/-paper-png-118751.png" id = "paper" alt = "torn piece of notebook paper">
<img class = "fighter-icons" src="assets/scissors-png-239069.png" id = "scissors" alt = "pair of scissors">
<img class = "fighter-icons" src="assets/architect-icon.png" id = "the architect" alt = "the architect from the matrix">
<img class = "fighter-icons" src="assets/sentinel.png" id = "sentinel" alt = "sentinel">`
}

