//Global Variables:
var fighterClassicOptions = ['rock', 'paper', 'scissors']
var fighterDifficultOptions = ['rock', 'paper', 'scissors', 'the architect', 'sentinel']
var changeGame
var game = createGame()


//QUERY SELECTORS:///
///game types:///
var classicContainer = document.querySelector('.classic-container');
var difficultContainer = document.querySelector('.difficult-container');

///choose your game and fighter text:///
var pageLoadMessage = document.querySelector(".page-load-message"); //choose your reality 
var pickYourGame = document.querySelector(".pick-your-game");//choose your fighter

///icon containers:///
var classicChoiceOptionsIcons = document.querySelector(".classic-choice-options-icons");
var difficultChoiceOptions = document.querySelector(".difficult-choice-options");

///icons:///
var fighterIcons = document.querySelectorAll('.fighter-icons'); //all icons
var choiceSection = document.getElementById('choice-section'); //icon container

//counter//
var humanScore = document.querySelector(".human-win-score"); //counter
var aiScore = document.querySelector(".ai-win-score"); //counter


///change game button:///
var changeTheGameButton = document.querySelector(".change-the-game-button")


var resultsIcons = document.querySelector(".results-icons"); //results icons container

//Event Listeners:
classicContainer.addEventListener('click', displayClassicGame)
difficultContainer.addEventListener('click', displayDifficultGame)
changeTheGameButton.addEventListener('click', changeGameHandler)



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

  function createGame(gameType) {
    var game = {
      player: createPlayer('human', 'assets/neo.png'),
      ai: createPlayer('ai', 'assets/agent-smith.png'),
      gameType: gameType,
      fighters: [] 
    }    
    currentGame = game
    return currentGame
  }

  function getRandomIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function checkWin(playerChoice, aiChoice) {
    if (playerChoice === aiChoice) {
      return 'draw';
    } else if (
      (playerChoice === 'rock' && aiChoice === 'scissors') ||
      (playerChoice === 'paper' && aiChoice === 'rock') ||
      (playerChoice === 'scissors' && aiChoice === 'paper') ||
      (playerChoice === 'the architect' && aiChoice === 'sentinel') ||
      (playerChoice === 'sentinel' && aiChoice === 'the architect')
    ) {
      return 'player';
    } else {
      return 'ai';
    }
  }



///display which game with icons:///
function hide(element) {
  element.setAttribute("hidden", "")
}

function show(element) {
  element.removeAttribute("hidden")
}

function displayClassicGame() {
  show(pickYourGame)
  hide(pageLoadMessage)
  hide(classicContainer)
  hide(difficultContainer)
  show(classicChoiceOptionsIcons)
}
function displayDifficultGame() {
  show(pickYourGame)
  hide(pageLoadMessage)
  hide(classicContainer)
  hide(difficultContainer)
  hide(classicChoiceOptionsIcons) 
  show(difficultChoiceOptions) 
}

function changeGameHandler(event) {
  hide(difficultChoiceOptions)
  hide(classicChoiceOptionsIcons)
  show(classicContainer)
  show(difficultContainer)
  show(pickYourGame)
  hide(changeTheGameButton)
}

