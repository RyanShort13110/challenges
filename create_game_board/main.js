/*
Write a program that creates a string that represents an 8×8
grid, using newline characters to separate lines. At each
position of the grid there is either a space or a "#" character.
The characters should form a chessboard pattern.


Example...

  # # # #
# # # #
  # # # #
# # # #
  # # # #
# # # #
  # # # #
# # # #
*/


// solution

function makeBoard(){
  let board = ''
  let size = 8

  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
      if((i + j) % 2 == 0){
        board += ' '
      }else{
        board += '#'
      }
    }
    board += '\n'
  }
  return board
}

makeBoard()