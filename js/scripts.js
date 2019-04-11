//back end
var scoreBoard = new Scoreboard();
function Scoreboard() {
  this.player1 = new Player("player1"),
  this.player2 = new Player("player2"),
  this.bank = 0,
  this.over = false,
  this.player1.active = true
}

Scoreboard.prototype.swapActive = function() {
  if (this.player1.active === true) {
    this.player1.active = false;
    this.player2.active = true;
  }else {
    this.player1.active = true;
    this.player2.active = false;
  }
}

Scoreboard.prototype.getActive = function () {
  if (this.player1.active === true) {
    return this.player1
  } else {
    return this.player2
  }
}



function Player(player) {
  this.player = player,
  this.active = false,
  this.score = 0
}

function diceRoll() {
  var roll = Math.floor((Math.random() * 6) + 1);
  console.log(roll);
  return roll;
}


//user interface
function attachListeners() {
  $(".container").on("click", ".roll", function() {
    var roll = diceRoll();
    if (scoreBoard.over === false) {
      var active = scoreBoard.getActive();
      if (roll != 1) {
        scoreBoard.bank = scoreBoard.bank + roll;
        $(".bank").empty();
        $(".bank").append(scoreBoard.bank);

      }
      if (roll === 1) {
        scoreBoard.bank = 0;
        $("." + active.player).empty();
        var formatString = active.player;
        formatString = formatString[0].toUpperCase() + formatString.slice(1,formatString.length-1) + " "+formatString[formatString.length-1];
        $("." + active.player).append(formatString + ": " + active.score);
        $(".bank").empty();
        $(".bank").append(scoreBoard.bank);
        scoreBoard.swapActive();
      }
    }
  });
  $(".container").on("click", ".hold", function() {
    var active = scoreBoard.getActive();
    active.score += scoreBoard.bank;
    scoreBoard.bank = 0;
    if (active.score + scoreBoard.bank >= 100) {
      var formatString = active.player;
      formatString = formatString[0].toUpperCase() + formatString.slice(1,formatString.length-1) + " "+formatString[formatString.length-1];
      $(".result").empty();
      $(".result").append("<h1>" + formatString + " WINS!" + "</h1>")
    }
    $("." + active.player).empty();
    var formatString = active.player;
    formatString = formatString[0].toUpperCase() + formatString.slice(1,formatString.length-1) + " "+formatString[formatString.length-1];
    $("." + active.player).append(formatString + ": " + active.score)
    $(".bank").empty();
    $(".bank").append(scoreBoard.bank);
    scoreBoard.swapActive();

  });
  $(".container").on("click", ".restart", function() {
    $(".bank").empty();
    $(".result").empty();
    $(".player1").empty();
    $(".player2").empty();
    $(".player1").append("Player 1: 0");
    $(".player2").append("Player 2: 0");
    $(".bank").append(" 0");
    scoreBoard = new Scoreboard;
  });


};





$(document).ready(function() {
  attachListeners();
});
