// function myFunction() {
//     document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

var s1 = document.getElementById('sq1')
var s2 = document.getElementById('sq2')
var s3 = document.getElementById('sq3')
var s4 = document.getElementById('sq4')
var s5 = document.getElementById('sq5')
var s6 = document.getElementById('sq6')
var s7 = document.getElementById('sq7')
var s8 = document.getElementById('sq8')
var s9 = document.getElementById('sq9')

var squares = [s1,s2,s3,s4,s5,s6,s7,s8,s9]

var playerXCount = 0;
var playerOCount = 0;
var tieCount = 0;
var numMoves = 0;


var winningCombos = [
	[1,2,3],
	[1,4,7],
	[1,5,9],
	[2,5,8],
	[3,5,7],
	[3,6,9],
	[4,5,6],
	[6,5,4],
	[7,8,9]
];


var myFunction = function(square) {
	squares.forEach(function(x) {
		x.innerHTML = "x"
	})
}

var resetBoard = function() {
	squares.forEach(function(x) {
		x.innerHTML = ""
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

