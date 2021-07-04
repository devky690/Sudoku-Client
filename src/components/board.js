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
    checkSquares(cell, 0);
    console.log(cell);
  }, []);
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
    checkSquares(cell, index + 1);
  }

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

function checkRows(cell) {
  checkFirstRow(cell);
  checkSecondRow(cell);
  checkThirdRow(cell);
  checkFourthRow(cell);
  checkFifthRow(cell);
  checkSixthRow(cell);
  checkSeventhRow(cell);
  checkEigthRow(cell);
  checkNinthRow(cell);
}
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

function checkFirstRow(cell) {
  const seen = new Set();
  //beginning row 1 check
  let position = cell[0];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //stick checking row 1
  position = cell[9];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 1
  position = cell[18];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}
function checkSecondRow(cell) {
  const seen = new Set();
  //beginning row 2 check
  let position = cell[3];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //stick checking row 2
  position = cell[12];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 2
  position = cell[21];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}
function checkThirdRow(cell) {
  const seen = new Set();
  //beginning row 3 check
  let position = cell[6];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //stick checking row 3
  position = cell[15];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 3
  position = cell[24];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}
function checkFourthRow(cell) {
  const seen = new Set();
  //beginning row 4 check
  let position = cell[27];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 4
  position = cell[36];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 4
  position = cell[45];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}
function checkFifthRow(cell) {
  const seen = new Set();
  //beginning row 5 check
  let position = cell[30];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 5
  position = cell[39];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 5
  position = cell[48];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}
function checkSixthRow(cell) {
  const seen = new Set();
  //beginning row 6 check
  let position = cell[33];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 6
  position = cell[42];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 6
  position = cell[51];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}
function checkSeventhRow(cell) {
  const seen = new Set();
  //beginning row 7 check
  let position = cell[54];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 7
  position = cell[63];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 7
  position = cell[72];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}
function checkEigthRow(cell) {
  const seen = new Set();
  //beginning row 8 check
  let position = cell[57];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 8
  position = cell[66];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 9
  position = cell[75];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}
function checkNinthRow(cell) {
  const seen = new Set();
  //beginning row 9 check
  let position = cell[60];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 9
  position = cell[69];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 9
  position = cell[78];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}

export default Board;
