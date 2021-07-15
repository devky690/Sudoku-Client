import React, { useEffect, useState } from "react";
import easyProbOne from "../gamesets/EasySudoku.js";
import Square from "./square.js";
import "../styles/board.css";

/*
TODO:
1. Create a Modal Component as replacement for alert since alert wont go away easily

2. Along with the modal create a boolean state called showModel since we need
to create state to have conditional rendering

3. Finish up check functions by adding the logic for duplicates w/hashset which should
be fairly simple (Done)

4. Save to Game Local Storage(DONE)
*/
const Board = () => {
  const [gameArray, setGameArray] = useState([]);
  useEffect(() => {
    //need to mess around with this to figure out the validation for sudoku
    //then after that, comes the random generator for the sudoku
    const cell = document.querySelectorAll(".cell-input");

    checkSquares(cell, 0, false, false, false);

    const rowStarts = [0, 3, 6, 27, 30, 33, 54, 57, 60];
    let problemRowIndex = 0;
    rowStarts.forEach(start => {
      fillInValues(cell, start, 0, 0, problemRowIndex);
      problemRowIndex++;
    });
    const gameArr = JSON.parse(localStorage.getItem("gameArray"));
    console.log(gameArr);
    //convert from json string to workable object/array(in this case)
    if (gameArr != null && gameArr.length > 0) setGameArray(gameArr);

    rowStarts.forEach(start => {
      const seen = new Set();
      checkRows(cell, start, 0, seen);
    });

    const colStarts = [0, 1, 2, 9, 10, 11, 18, 19, 20];
    colStarts.forEach(start => {
      const seen = new Set();
      checkColumns(cell, start, 0, seen);
    });
    
  }, []);

  useEffect(() => {
    const cell = document.querySelectorAll(".cell-input");

    //need to fill in dom w/ our changes because this will cover
    //the case where we are retrieving from localstorage...cuz remember
    //state updates asynchronously between renders

    //this is length > 0 so we dont call this function on initial render
    if (gameArray.length > 0) {
      fillInExistingValues(cell, 0);
      //we actually have something to save
      localStorage.setItem("gameArray", JSON.stringify(gameArray));
    }
    console.log(gameArray);
  }, [gameArray]);

  function checkSquares(
    cell,
    index,
    checkedNum,
    checkedEmptySpace,
    hasSameElement
  ) {
    if (index === 81) return;

    const seen = new Set();
    let position = cell[index];
    seen.add(position.value);

    //add first element (its directly above) to seen here
    for (let count = 2; count <= 9; count++) {
      position = position.nextElementSibling;
      if (
        seen.has(position.value) &&
        position.value !== "" &&
        !hasSameElement
      ) {
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
  
      index++;
    }
    checkSquares(
      cell,
      index + 1,
      checkedNum,
      checkedEmptySpace,
      hasSameElement
    );
  }

  /*
    Goes across one column
  */
  let colSameElementStatus = false;
  function checkColumns(cell, index, count, seen) {
    if (count == 9) return;

    let position = cell[index];
    seen.add(position.value);

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
  
      index++;
    }
    count += 3;

    checkRows(cell, index + 7, count, seen);
  }

  /*
    Only fills in one row
  */
  function fillInValues(
    cell,
    index,
    count,
    problemColumnIndex,
    problemRowIndex
  ) {
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
  
      index++;
    }

    count += 3;

    fillInValues(cell, index + 7, count, problemColumnIndex, problemRowIndex);
  }

  function fillInExistingValues(cell, index) {
    if (index === 81) return;

    let position = cell[index];
    position.value = gameArray[index];


    //add first element (its directly above) to seen here
    for (let count = 2; count <= 9; count++) {
      position = position.nextElementSibling;
  
      index++;
      position.value = gameArray[index];
    }
    fillInExistingValues(cell, index + 1);
  }

  return (
    <form className="board-grid">
      <Square setGameArray={setGameArray}></Square>
      <Square setGameArray={setGameArray}></Square>
      <Square setGameArray={setGameArray}></Square>
      <Square setGameArray={setGameArray}></Square>
      <Square setGameArray={setGameArray}></Square>
      <Square setGameArray={setGameArray}></Square>
      <Square setGameArray={setGameArray}></Square>
      <Square setGameArray={setGameArray}></Square>
      <Square setGameArray={setGameArray}></Square>
    </form>
  );
};

export default Board;
