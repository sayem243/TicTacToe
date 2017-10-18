//JS code goes here
var clicked = [
false, false, false,
false, false, false,
false, false, false
];
var markLevel = [
  0,0,0,0,0,0,0,0,0
]

var endGame = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
	[2,4,6],
	[0,4,8]
];


var turn = true;

var gameOver = false;

var player1w=0;
var player2w=0;

function play(event){
	var element = event.target;

	if ( clicked[element.id] === false && gameOver === false ) {

    element.innerHTML = turn ? "X" : "O";
    markLevel[element.id] = turn? 1 : 2;
    clicked[element.id] = true;
		turn = !turn;
		//console.log(event);

		console.log(clicked);
    console.log(markLevel);

		var result = checkEndGame();

		if (result === 1) {
      player1w++;
			console.log("Player 1 wins!");
      document.getElementById('pi').innerHTML = player1w;
      document.getElementById('pOne').innerHTML = player1w;
			document.getElementById('gamestatus').innerHTML = "Player 1 win";
			gameOver = true;

		}
		if (result === 2) {
      player2w++;
			console.log("Player 2 wins!");
      document.getElementById('pii').innerHTML = player2w;
      document.getElementById('ptwo').innerHTML = player2w;
			document.getElementById('gamestatus').innerHTML = "Player 2 wins";
			gameOver = true;

		}
		if (result === 0) {
			console.log("Tie");
			document.getElementById('gamestatus').innerHTML = "Game Tie!";
			gameOver = true;

		}
		if (result === false) {
			document.getElementById('gamestatus').innerHTML = "Game in Progress";
			console.log("Continue game");
		}
	}
}

function checkEndGame() {
	for (var i = 0; i < endGame.length; i++) {
		if (
			clicked[endGame[i][0]] !== false &&	clicked[endGame[i][1]] !== false &&	clicked[endGame[i][2]] !== false
		) {
			if ( markLevel[endGame[i][0]] === markLevel[endGame[i][1]] && markLevel[endGame[i][1]] === markLevel[endGame[i][2]] ) {
				if ( markLevel[endGame[i][0]] === 1) {

					return 1;
				}
				if ( markLevel[endGame[i][0]] === 2) {

					return 2;
				}
			}
		}
	}


  var tie = true;
	for (var i = 0; i < clicked.length; i++) {
		if (clicked[i] === false) {
      tie = false;
      break;
		}
	}

	if (tie === true) {
		return -1;
	}
	return false;
}

function restart (event){
	for(var i = 0; i < clicked.length; i++){
		if( clicked[i] !== false ) {
			document.getElementById(i).innerHTML = '';
			clicked[i] = false;
      markLevel[i] = 0;
		}
	}
	turn = true;
	gameOver = false;
  player1w = 0;
  player2w = 0;

  document.getElementById('pi').innerHTML = player1w;
  document.getElementById('pOne').innerHTML = player1w;
  document.getElementById('pii').innerHTML = player2w;
  document.getElementById('ptwo').innerHTML = player2w;
	document.getElementById("gamestatus").innerHTML = "New Game";
}

function newGame (event){
	for(var i = 0; i < clicked.length; i++){
		document.getElementById(i).innerHTML = '';
		clicked[i] = false;
    markLevel[i] = 0;
	}
	turn = true;
	gameOver = false;
	document.getElementById("gamestatus").innerHTML = "New Game";
}
