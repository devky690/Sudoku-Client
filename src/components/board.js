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

    //checks first rows
    checkRowsInSquareRows(cell, 0, 0);
    //checks second rows
    checkRowsInSquareRows(cell, 3, 0);
    //checks third rows
    checkRowsInSquareRows(cell, 6, 0);

    const colStarts = [0, 1, 2, 9, 10, 11, 18, 19, 20];
    colStarts.forEach(start => {
      checkColumnsInSquareColumns(cell, start, 0);
    });
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

//Goes across one column from 3 set of squares (down ONE square column)
function checkColumnsInSquareColumns(cell, index, count) {
  if (count == 9) return;

  let position = cell[index];
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    if (position && position.nextElementSibling)
      position =
        position.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(position);
    index += 3;
  }
  count += 3;

  checkColumnsInSquareColumns(cell, index + 21, count);
}

/*
  Goes across (pick one when calling
  function) - first/second/third rows from 3 different set of 3 squares
  so this function need only be called 3 times total 
*/
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

export default Board;
