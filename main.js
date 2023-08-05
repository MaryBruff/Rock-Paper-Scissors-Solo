//QUERY SELECTORS:

///game types:///
var classicContainer = document.querySelector('.classic-container');
var difficultContainer = document.querySelector('.difficult-container');
///choose your game and fighter text:///
var pageLoadMessage = document.querySelector(".page-load-message");
var pickYourGame = document.querySelector(".pick-your-game");
///icons:///
var classicChoiceOptionsIcons = document.querySelector(".classic-choice-options-icons");
var difficultChoiceOptions = document.querySelector(".difficult-choice-options");
///change game button:///
var changeTheGameButton = document.querySelector(".change-the-game-button");


//Event Listeners:
classicContainer.addEventListener('click', displayClassicGame)
difficultContainer.addEventListener('click', displayDifficultGame)


//Global Variables:

//Functions: 

//creates player object:///
function createPlayer(name, token) {
var player = {
      name: name,
      token: token,
      wins: 0,
    }
    return player
  }

///Brainstorming functions/// 👇 👇👇

//define game type?? 
  function createGame(gameType){
    var game = {
      player: createPlayer('Human', 'assets/neo.png'),
      computer: createPlayer('AI', 'assets/mr.smith.png'),
      type: gameType,
      icons: gameType === 'classic' ? classicOptions : difficultOptions
    }
    return game
  }

//updated winner score??
function winnerScore() {
  if (roundWinner === 'player') {
    game.player.wins++;
  } else if (roundWinner === 'computer') {
    game.computer.wins++;
  }
}
//☝️☝️☝️☝️



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




