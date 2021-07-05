import React, { useEffect, useState } from "react";
import Square from "./Square.js";
import "../styles/board.css";

const Board = () => {
  useEffect(() => {
    //need to mess around with this to figure out the validation for sudoku
    //then after that, comes the random generator for the sudoku
    const cell = document.querySelectorAll(".cell-input");
    console.clear();

    const rowStarts = [0, 3, 6, 27, 30, 33, 54, 57, 60];

    rowStarts.forEach(start => {
      checkRows(cell, start, 0);
    });

    const colStarts = [0, 1, 2, 9, 10, 11, 18, 19, 20];
    colStarts.forEach(start => {
      checkColumns(cell, start, 0);
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

/*
  Goes across one column
*/
function checkColumns(cell, index, count) {
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

  checkColumns(cell, index + 21, count);
}

/*
  Goes across one row
*/
function checkRows(cell, index, count) {
  if (count == 9) return;

  let position = cell[index];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    if (position) position = position.nextElementSibling;
    console.log(position);
    index++;
  }
  count += 3;

  checkRows(cell, index + 7, count);
}

export default Board;
