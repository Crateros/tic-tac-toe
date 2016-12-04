//Function to create game board


//Array to store position of Xs and Os

//Logic to assess winner, 3 (vertical, horizontal, diagonal).

//If winner, no more plays, perhaps refresh, or button to restart.

//If Array[n] is X or O and no winner possible, tie.

//Find a winner:
// colum win: 0,3,6 | 1,4,7 | 2,5,8
//row win: 0,1,2 | 3,4,5 | 6,7,8
//diagonal win: 0,4,8 | 6,4, 2

document.addEventListener("DOMContentLoaded", function() {

     //Setup game board object to log game state
     function gameBoard() {
          var gamePieces = document.getElementsByClassName("gamePiece");
          var board = {};
          for (var i = 0; i < gamePieces.length; i++) {
               var position = gamePieces[i].dataset.position;
               var content = gamePieces[i].dataset.content;
               board[position] = content;
          }
          return board;
     }


     // console.log(gameBoard);

     //keep track of whose turn it is
     //if turns = 9, tie game or win
     var turn = 0;

     //Select and assign click listener to board tiles
     var clickTile = document.getElementById("game");
     console.log(clickTile);

     for(var i = 0; i < clickTile.children.length; i++) {
          clickTile.children[i].addEventListener("click", handleClick);
     }
     // console.log(clickTile.children[1].textContent);

     function addMarker(elem) {
               if (turn % 2 === 0) {
                    elem.innerHTML = '<img src="img/xmark.png">';
                    elem.dataset.content = "X";
               }
               else {
                    elem.innerHTML = '<img src="img/omark.png">';

                    elem.dataset.content = "O";
               }
               turn ++;
               console.log(turn);
               console.log(gameBoard());
               elem.removeEventListener('cick', handleClick);
     }

     //Checks for empty cell and game turns < 9, executes add marker to .this on click
     function handleClick() {
          var isEmpty = this.childNodes.length === 0;
          if (turn < 9 && isEmpty) {
          addMarker(this);
          }
          else if (turn === 9) {
          console.log("game over bitch");
          }
     }

});
