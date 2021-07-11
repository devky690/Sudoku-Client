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
be fairly simple (Done)
*/

const Board = () => {
  useEffect(() => {
    //need to mess around with this to figure out the validation for sudoku
    //then after that, comes the random generator for the sudoku
    const cell = document.querySelectorAll(".cell-input");
    console.clear();

    checkSquares(cell, 0, false, false, false);

    const rowStarts = [0, 3, 6, 27, 30, 33, 54, 57, 60];
    let problemRowIndex = 0;
    rowStarts.forEach(start => {
      fillInValues(cell, start, 0, 0, problemRowIndex);
      problemRowIndex++;
    });
    rowStarts.forEach(start => {
      const seen = new Set();
      checkRows(cell, start, 0, seen);
    });

    const colStarts = [0, 1, 2, 9, 10, 11, 18, 19, 20];
    colStarts.forEach(start => {
      const seen = new Set();
      checkColumns(cell, start, 0, seen);
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

function checkSquares(
  cell,
  index,
  checkedNum,
  checkedEmptySpace,
  hasSameElement
) {
  if (index >= 80) return;

  const seen = new Set();
  let position = cell[index];
  seen.add(position.value);
  console.log(position);
  //add first element (its directly above) to seen here
  for (let count = 2; count <= 9; count++) {
    position = position.nextElementSibling;
    if (seen.has(position.value) && position.value !== "" && !hasSameElement) {
      console.log("You have a duplicate element within a row");
      hasSameElement = true;
    }
    if (parseInt(position) === NaN && !checkedNum) {
      console.log("You have an element that isnt a number!");
      checkedNum = true;
    }
    if (position.value === "" && !checkedEmptySpace) {
      console.log("You have an empty space!");
      checkedEmptySpace = true;
    }
    seen.add(position.value);
    console.log(position);
    index++;
  }
  checkSquares(cell, index + 1, checkedNum, checkedEmptySpace, hasSameElement);
}

/*
  Goes across one column
*/
let colSameElementStatus = false;
function checkColumns(cell, index, count, seen) {
  if (count == 9) return;

  let position = cell[index];
  seen.add(position.value);
  console.log(position);
  for (let i = 3; i <= 6; i += 3) {
    if (position && position.nextElementSibling)
      position =
        position.nextElementSibling.nextElementSibling.nextElementSibling;
    if (
      seen.has(position.value) &&
      !colSameElementStatus &&
      position.value !== ""
    ) {
      console.log("You have a duplicate element within a column");
      colSameElementStatus = true;
    }
    console.log(position);
    index += 3;
  }
  count += 3;

  checkColumns(cell, index + 21, count, seen);
}

/*
  Goes across one row
*/
let rowSameElementStatus = false;
function checkRows(cell, index, count, seen) {
  if (count == 9) return;

  let position = cell[index];
  seen.add(position.value);
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    if (position) position = position.nextElementSibling;
    if (
      seen.has(position.value) &&
      position.value !== "" &&
      !rowSameElementStatus
    ) {
      console.log("You have a duplicate element within a row");
      rowSameElementStatus = true;
    }
    console.log(position);
    index++;
  }
  count += 3;

  checkRows(cell, index + 7, count, seen);
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
