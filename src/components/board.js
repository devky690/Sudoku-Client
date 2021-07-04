import React, { useEffect, useState } from "react";
import Square from "./Square.js";
import "../styles/board.css";

const Board = () => {
  useEffect(() => {
    //need to mess around with this to figure out the validation for sudoku
    //then after that, comes the random generator for the sudoku
    const cell = document.querySelectorAll(".cell-input");
    console.log(cell);
    console.clear();
    //checkRows(cell);
    //checkColumns(cell);
    //checkSquares(cell, 0);

    //checks first rows
    checkRowsInSquareRows(cell, 0, 0);
    //checks second rows
    checkRowsInSquareRows(cell, 3, 0);
    //checks third rows
    checkRowsInSquareRows(cell, 6, 0);
    console.log(cell);
  }, []);

  return (
    <form className="board-grid">
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </form>
  );
};

function checkSquares(cell, index) {
  if (index >= 80) return;
  const seen = new Set();

  let position = cell[index];
  console.log(position);
  //add first element (its directly above) to seen here
  for (let count = 2; count <= 9; count++) {
    position = position.nextElementSibling;
    if (seen.has(position.value)) {
      alert("You have an element the same within a square! Change it!");
      return;
    }
    console.log(position);
    index++;
  }
  checkSquares(cell, index + 1, 0);
}

function checkColumns(cell) {
  checkFirstColumn(cell);
  checkSecondColumn(cell);
  checkThirdColumn(cell);
  checkFourthColumn(cell);
  checkFifthColumn(cell);
  checkSixthColumn(cell);
  checkSeventhColumn(cell);
  checkEightColumn(cell);
  checkNinthColumn(cell);
}

function checkRowsInSquareRows(cell, index, count) {
  if (count >= 27) return;

  //this will mean we have gone across a set of 3 squares
  //(there are 9 squares we go through in this function)
  if (count % 9 == 0) {
    //check if we have seen duplicates
    //then clear the set
  }

  let position = cell[index];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    if (position) position = position.nextElementSibling;
    console.log(position);
    index++;
  }
  count += 3;

  checkRowsInSquareRows(cell, index + 7, count);
}

// checkFirstRow(cell);
// checkSecondRow(cell);
// checkThirdRow(cell);
// checkFourthRow(cell);
// checkFifthRow(cell);
// checkSixthRow(cell);
// checkSeventhRow(cell);
// checkEigthRow(cell);
// checkNinthRow(cell);
// }
function checkFirstColumn(cell) {
  //first column check
  let position = cell[0];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[27];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[54];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}
function checkSecondColumn(cell) {
  //first column check
  let position = cell[1];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[28];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[55];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}
function checkThirdColumn(cell) {
  //first column check
  let position = cell[2];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[29];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[56];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}
function checkFourthColumn(cell) {
  //first column check
  let position = cell[9];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[36];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[63];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}
function checkFifthColumn(cell) {
  //first column check
  let position = cell[10];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[37];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[64];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}
function checkSixthColumn(cell) {
  //first column check
  let position = cell[11];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[38];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[65];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}
function checkSeventhColumn(cell) {
  //first column check
  let position = cell[18];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[45];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[72];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}
function checkEightColumn(cell) {
  //first column check
  let position = cell[19];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[46];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[73];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}
function checkNinthColumn(cell) {
  //first column check
  let position = cell[20];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[47];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }

  position = cell[74];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    position =
      position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
  }
}

export default Board;
