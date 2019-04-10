//back end
var scoreBoard = new Scoreboard();
function Scoreboard() {
  this.player1 = new Player("Player 1"),
  this.player2 = new Player("Player 2"),
  this.bank = 0,
}

Scoreboard.prototype.swapActive = function() {
  if (scoreBoard.player1.active === true) {
    scoreBoard.player1.active = false;
    scoreBoard.player2.active = true;
  }else {
    scoreBoard.player1.active = true;
    scoreBoard.player2.active = false;
  }
}

Scoreboard.prototype.getActive = function () {
  if (scoreBoard.player1.active === true) {
    return scoreBoard.player1
  } else {
    return scoreBoard.player2
  }
}



function Player(player) {
  this.player = player,
  this.active = false,
  this.score = 0
}

function diceRoll() {
  var roll = Math.floor((Math.random() * 6) + 1);
  return roll;
}


//user interface
function attachListeners() {

}





$(document).ready(function() {
  attachListeners();
});
