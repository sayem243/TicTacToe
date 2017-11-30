//JS code goes here

var turn = true;

//declared all false to avoid undefined value conflicts
var clicked = [
false, false, false,
false, false, false,
false, false, false
];

//the win array
var endGame = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,4,8],
	[2,4,6],
	[1,4,7],
	[0,3,6],
	[2,5,8]
];

var gameOver = false;

function play(event){
	var element = event.target;

	if ( clicked[element.id] === false && gameOver === false ) {

		clicked[element.id] = turn ? 1 : 0;
		console.log(clicked);
		console.log(event);

		element.innerHTML = turn ? "X" : "O";
		turn = !turn;

		var result = checkEndGame();

		if (result === 1) {
			console.log("Player 1 wins!");
			document.getElementById('status-d').innerHTML = "Player 1 wins!";
			gameOver = true;
		}
		if (result === 0) {
			console.log("Player 2 wins!");
			document.getElementById('status-d').innerHTML = "Player 2 wins!";
			gameOver = true;
		}
		if (result === -1) {
			console.log("Tie");
			document.getElementById('status-d').innerHTML = "It's a Tie!";
			gameOver = true;
		}
		if (result === false) {
			document.getElementById('status-d').innerHTML = "Game in Progress";
			console.log("Game must go on!");
		}
	}
}

// returns false if game didnt end
// returns 1 if player 1 is winner; 0 if player 2 is winner
// returns -1 for draw

function checkEndGame() {
	for (var i = 0; i < endGame.length; i++) {
		if (
			clicked[endGame[i][0]] !== false &&
			clicked[endGame[i][1]] !== false &&
			clicked[endGame[i][2]] !== false
		) {
			if ( clicked[endGame[i][0]] === clicked[endGame[i][1]] && clicked[endGame[i][1]] === clicked[endGame[i][2]] ) {
				if ( clicked[endGame[i][0]] === 1) {
					//player 1 winner
					return 1;
				}
				if ( clicked[endGame[i][0]] === 0) {
					//player 2 winner
					return 0;
				}
			}
		}
	}

	//check tie
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
		}
	}
	turn = true;
	gameOver = false;
	document.getElementById("status-d").innerHTML = "New Game";
}