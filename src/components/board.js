import React, { useEffect, useState } from "react";
import Square from "./Square.js";
import easyProbOne from "../gamesets/EasySudoku.js";
import "../styles/board.css";

/*
TODO:
1. Create a Modal Component as replacement for alert since alert wont go away easily

2. Along with the modal create a boolean state called showModel since we need
to create state to have conditional rendering

3. Finish up check functions by adding the logic for duplicates w/hashset which should
be fairly simple
*/

const Board = () => {
  useEffect(() => {
    //need to mess around with this to figure out the validation for sudoku
    //then after that, comes the random generator for the sudoku
    const cell = document.querySelectorAll(".cell-input");
    console.clear();

    const rowStarts = [0, 3, 6, 27, 30, 33, 54, 57, 60];
    let problemRowIndex = 0;
    rowStarts.forEach(start => {
      fillInValues(cell, start, 0, 0, problemRowIndex);
      problemRowIndex++;
    });
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
  if (parseInt(position) === NaN) {
    console.log("You have an element that isnt a number!");
  }
  if (position.value === "") {
    console.log("You have an empty space!");
  }
  console.log(position);
  //add first element (its directly above) to seen here
  for (let count = 2; count <= 9; count++) {
    position = position.nextElementSibling;
    if (parseInt(position) === NaN) {
      console.log("You have an element that isnt a number!");
    }
    if (position.value === "") {
      console.log("You have an empty space!");
    }
    if (seen.has(position.value)) {
      console.log("You have an element the same within a square! Change it!");
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
  if (parseInt(position) === NaN) {
    console.log("You have an element that isnt a number!");
  }
  if (position.value === "") {
    console.log("You have an empty space!");
  }
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    if (position && position.nextElementSibling)
      position =
        position.nextElementSibling.nextElementSibling.nextElementSibling;
    if (parseInt(position) === NaN) {
      console.log("You have an element that isnt a number!");
    }
    if (position.value === "") {
      console.log("You have an empty space!");
    }
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
    if (parseInt(position) === NaN) {
      console.log("You have an element that isnt a number!");
    }
    if (position.value === "") {
      console.log("You have an empty space!");
    }
    console.log(position);
    index++;
  }
  count += 3;

  checkRows(cell, index + 7, count);
}

/*
  Only fills in one row
*/
function fillInValues(cell, index, count, problemColumnIndex, problemRowIndex) {
  if (count == 9) return;

  let position = cell[index];
  if (easyProbOne[problemRowIndex][problemColumnIndex] !== "") {
    position.value = easyProbOne[problemRowIndex][problemColumnIndex];
    position.disabled = true;
  } else {
    position.disabled = false;
  }
  problemColumnIndex++;
  for (let i = 1; i <= 2; i++) {
    if (position) position = position.nextElementSibling;

    if (easyProbOne[problemRowIndex][problemColumnIndex] !== "") {
      position.value = easyProbOne[problemRowIndex][problemColumnIndex];
      position.disabled = true;
    } else {
      position.disabled = false;
    }
    problemColumnIndex++;
    console.log(position);
    index++;
  }

  count += 3;

  fillInValues(cell, index + 7, count, problemColumnIndex, problemRowIndex);
}

export default Board;
