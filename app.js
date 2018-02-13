// function myFunction() {
//     document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

var s1 = document.getElementById('1')
var s2 = document.getElementById('2')
var s3 = document.getElementById('3')
var s4 = document.getElementById('4')
var s5 = document.getElementById('5')
var s6 = document.getElementById('6')
var s7 = document.getElementById('7')
var s8 = document.getElementById('8')
var s9 = document.getElementById('9')

var squares = [s1,s2,s3,s4,s5,s6,s7,s8,s9]

var Xboard = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

var Yboard = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

var playerXChoices = [];
var playerOChoices = [];
var playerOCount = 0;
var playerXCount = 0;
var numMoves = 0;
var occupied = false;
var count = 0;

var winningCombos = [
	[1,2,3],
	[2,1,3],
	[3,2,1],
	[1,4,7],
	[1,5,9],
	[2,5,8],
	[3,5,7],
	[3,6,9],
	[4,5,6],
	[6,5,4],
	[7,8,9]
];

var checkWinnerX = function(array) {
  var numbersArr = array.map(Number)
  console.log(numbersArr)
  if (numbersArr.length >= 3) {
    winningCombos.forEach(function(x) {
  	  if(JSON.stringify(x) === JSON.stringify(numbersArr)) {
  	  	
  	  	alert('X Wins!')
  	  }
    })
  }
}

var checkWinnerO = function(array) {
  var numbersArr = array.map(Number)
  console.log(numbersArr)
  if (numbersArr.length >= 3) {
    winningCombos.forEach(function(x) {
  	  if(JSON.stringify(x) === JSON.stringify(numbersArr)) {
  	  	alert('O Wins!')
  	  }
    })
  }
}

var selectSquare = function(square) {
	if (playerXCount === 5) {
		alert("Sorry, this game is a TIE....Now hit refresh!")
		setTimeout((function() {
			resetBoard()
		}), 500 )

}
	if (count % 2 === 1) {
		count++
		playerOCount++;
		square.innerHTML = 'O'
    square.value = false;
    square.symbol = 'O'
    playerOChoices.push(square.id)
    checkWinnerO(playerOChoices)
    
	} else {
		count++;
		playerXCount++;
		square.innerHTML = 'X'
    square.value = true;
    square.symbol = 'X';
    playerXChoices.push(square.id)
    checkWinnerX(playerXChoices)
	}
}

var winnerX = function(square) {
	squares.forEach(function(x) {
		x.value = 'X';
		x.innerHTML = "X"
	})
	setTimeout((function(){alert('Player X Wins!')
  }), 200)
}

var resetBoard = function(square) {
	squares.forEach(function(square) {
		square.value = null;
		square.innerHTML = ""
	})
}



// var reset = function(squares) {
// 	squares.forEach(function(square){
// 		square.innerHTML = '';
// 	})
// }

// if user selects a square
// x should be placed on that square
// no player can overwrite another player if that player occupies a square
// once the first player goes 2 aka after 3 rounds we need to check winningcombos to see if there is a winner
  // the earliest a player can win is round 3
// there are many ways to win however, if a player contains any combination of the winningCombos they should win.

// create reset button to reset the table

