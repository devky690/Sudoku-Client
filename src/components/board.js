import React, { useEffect, useState } from "react";
import easyCollection from "../gamesets/EasySudoku.js";
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
  const [hasNewGame, setHasNewGame] = useState(false);
  //dont want to loose our randomEasyProb between renders so making it be state
  const [randomEasyProb, setRandomEasyProb] = useState(
    easyCollection[Math.floor(Math.random() * easyCollection.length)]
  );
  useEffect(() => {
    //need to mess around with this to figure out the validation for sudoku
    //then after that, comes the random generator for the sudoku
    const cell = document.querySelectorAll(".cell-input");

    const rowStarts = [0, 3, 6, 27, 30, 33, 54, 57, 60];
    let problemRowIndex = 0;

    //so we dont ruin our disabled elements
    if (JSON.parse(localStorage.getItem("gameArray")) == null) {
      rowStarts.forEach(start => {
        fillInValues(cell, start, 0, 0, problemRowIndex);
        problemRowIndex++;
      });
    }

    const gameArr = JSON.parse(localStorage.getItem("gameArray"));
    //convert from json string to workable object/array(in this case)
    if (gameArr != null && gameArr.length > 0) setGameArray(gameArr);
    //[] - renders only once when component loads and thats it
  }, []);

  useEffect(() => {
    const cell = document.querySelectorAll(".cell-input");

    if (hasNewGame) {
      if (localStorage.getItem("gameArray")) {
        localStorage.removeItem("gameArray");
      }
      const rowStarts = [0, 3, 6, 27, 30, 33, 54, 57, 60];
      let problemRowIndex = 0;

      rowStarts.forEach(start => {
        fillInValues(cell, start, 0, 0, problemRowIndex);
        problemRowIndex++;
      });
    }

    //need to fill in dom w/ our changes because this will cover
    //the case where we are retrieving from localstorage...cuz remember
    //state updates asynchronously between renders

    //this is length > 0 so we dont call this function on initial render
    //we dont want to set board to undefined!
    if (gameArray.length > 0) {
      //we actually have something to save
      localStorage.setItem("gameArray", JSON.stringify(gameArray));

      //must've made first move so set key to randomEasyProb
      if (localStorage.getItem("original_prob") == null) {
        localStorage.setItem("original_prob", JSON.stringify(randomEasyProb));
      }
      if (localStorage.getItem("original_prob") != null) {
        const randEasyProb = JSON.parse(localStorage.getItem("original_prob"));
        const rowStarts = [0, 3, 6, 27, 30, 33, 54, 57, 60];
        let problemRowIndex = 0;
        console.log(randEasyProb);

        rowStarts.forEach(start => {
          setDisabledInputs(cell, start, 0, 0, problemRowIndex, randEasyProb);
          problemRowIndex++;
        });
      }

      fillInExistingValues(cell, 0);

      //technically this is late because state updates on next render
      //HOWEVER, when we changed num we saved our game array then,
      //so this conditional block would overwrite changes from the above
      //conditional block...so we would have no issues
      //but this overwrite would only occur on the first time gameArray.length > 0
      //for THAT particular game session
      setHasNewGame(false);
    }
    console.log(gameArray);

    //changing hasNewGame would cause a rerender, so I believe I would need to add this
    //as a dependancy as well so info isnt lost between renders
  }, [gameArray, hasNewGame, randomEasyProb]);

  function setDisabledInputs(
    cell,
    index,
    count,
    problemColumnIndex,
    problemRowIndex,
    randEasyProb
  ) {
    if (count == 9) return;

    let position = cell[index];
    if (randEasyProb[problemRowIndex][problemColumnIndex] !== "") {
      position.disabled = true;
    } else {
      position.disabled = false;
    }
    problemColumnIndex++;
    for (let i = 1; i <= 2; i++) {
      if (position) position = position.nextElementSibling;

      if (randEasyProb[problemRowIndex][problemColumnIndex] !== "") {
        position.disabled = true;
      } else {
        position.disabled = false;
      }
      problemColumnIndex++;

      index++;
    }

    count += 3;

    setDisabledInputs(
      cell,
      index + 7,
      count,
      problemColumnIndex,
      problemRowIndex,
      randEasyProb
    );
  }

  function getNewGame() {
    setGameArray([]);
    setRandomEasyProb(
      easyCollection[Math.floor(Math.random() * easyCollection.length)]
    );
    if (localStorage.getItem("original_prob") != null) {
      localStorage.removeItem("original_prob");
    }
    setHasNewGame(true);
  }

  function validateSudoku() {
    const cell = document.querySelectorAll(".cell-input");
    const modal = document.querySelector(".modal-container");
    modal.innerHTML = "";
    console.log(modal);
    checkSquares(cell, 0, false, false, false, false, modal);
    const rowStarts = [0, 3, 6, 27, 30, 33, 54, 57, 60];
    rowStarts.forEach(start => {
      const seen = new Set();
      checkRows(cell, start, 0, seen, modal);
    });

    const colStarts = [0, 1, 2, 9, 10, 11, 18, 19, 20];
    colStarts.forEach(start => {
      const seen = new Set();
      checkColumns(cell, start, 0, seen, modal);
    });
    if (modal.innerHTML === "") {
      updateGameStatus(modal, "You WON");
    }
  }

  function checkSquares(
    cell,
    index,
    checkedNum,
    checkedEmptySpace,
    checkedRange,
    hasSameElement,
    modal
  ) {
    if (index === 81) return;

    const seen = new Set();
    let position = cell[index];

    seen.add(position.value);

    if (isNaN(position.value) && !checkedNum) {
      console.log("You have an element that isnt a number!");
      updateGameStatus(modal, "You have an element that isnt a number!");
      checkedNum = true;
    }
    if (position.value === "" && !checkedEmptySpace) {
      console.log("You have an empty space!");
      updateGameStatus(modal, "You have an empty space!");
      checkedEmptySpace = true;
    }
    if (
      !isNaN(position.value) &&
      (parseInt(position.value) > 9 || parseInt(position.value) < 1) &&
      !checkedRange
    ) {
      console.log("Number(s) is/are out of range!");
      updateGameStatus(modal, "Number(s) is/are out of range!");
      checkedRange = true;
    }
    //add first element (its directly above) to seen here
    for (let count = 2; count <= 9; count++) {
      position = position.nextElementSibling;
      if (
        seen.has(position.value) &&
        position.value !== "" &&
        !hasSameElement
      ) {
        console.log("You have a duplicate element within a square");
        updateGameStatus(modal, "You have a duplicate element within a square");
        hasSameElement = true;
      }
      if (isNaN(position.value) && !checkedNum) {
        console.log("You have an element that isnt a number!");
        updateGameStatus(modal, "You have an element that isnt a number!");
        checkedNum = true;
      }
      if (position.value === "" && !checkedEmptySpace) {
        console.log("You have an empty space!");
        updateGameStatus(modal, "You have an empty space!");
        checkedEmptySpace = true;
      }
      if (
        !isNaN(position.value) &&
        (parseInt(position.value) > 9 || parseInt(position.value) < 1) &&
        !checkedRange
      ) {
        console.log("Number(s) is/are out of range!");
        updateGameStatus(modal, "Number(s) is/are out of range!");
        checkedRange = true;
      }
      seen.add(position.value);

      index++;
    }
    checkSquares(
      cell,
      index + 1,
      checkedNum,
      checkedEmptySpace,
      checkedRange,
      hasSameElement,
      modal
    );
  }

  /*
    Goes across one column
  */
  let colSameElementStatus = false;
  function checkColumns(cell, index, count, seen, modal) {
    if (count == 9) return;

    let position = cell[index];
    if (
      seen.has(position.value) &&
      !colSameElementStatus &&
      position.value !== ""
    ) {
      console.log("You have a duplicate within a column");
      colSameElementStatus = true;
      updateGameStatus(modal, "You have a duplicate within a column");
    }
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
        updateGameStatus(modal, "You have a duplicate within a column");
        colSameElementStatus = true;
      }

      index += 3;
      seen.add(position.value);
    }
    count += 3;

    checkColumns(cell, index + 21, count, seen, modal);
  }

  /*
    Goes across one row
  */
  let rowSameElementStatus = false;
  function checkRows(cell, index, count, seen, modal) {
    if (count == 9) return;

    let position = cell[index];
    if (
      seen.has(position.value) &&
      !rowSameElementStatus &&
      position.value !== ""
    ) {
      console.log("You have a duplicate within a row");
      updateGameStatus(modal, "You have a duplicate within a row");
      rowSameElementStatus = true;
    }
    seen.add(position.value);

    for (let i = 1; i <= 2; i++) {
      if (position) position = position.nextElementSibling;
      if (
        seen.has(position.value) &&
        position.value !== "" &&
        !rowSameElementStatus
      ) {
        console.log("You have a duplicate element within a row");
        updateGameStatus(modal, "You have a duplicate within a row");
        rowSameElementStatus = true;
      }

      index++;
      seen.add(position.value);
    }
    count += 3;
    checkRows(cell, index + 7, count, seen, modal);
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
    if (randomEasyProb[problemRowIndex][problemColumnIndex] !== "") {
      position.value = randomEasyProb[problemRowIndex][problemColumnIndex];
      position.disabled = true;
    } else {
      position.value = "";
      position.disabled = false;
    }
    problemColumnIndex++;
    for (let i = 1; i <= 2; i++) {
      if (position) position = position.nextElementSibling;

      if (randomEasyProb[problemRowIndex][problemColumnIndex] !== "") {
        position.value = randomEasyProb[problemRowIndex][problemColumnIndex];
        position.disabled = true;
      } else {
        position.value = "";
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

  function updateGameStatus(modal, message) {
    const gameMSG = document.createElement("div");
    gameMSG.innerText = message;
    modal.appendChild(gameMSG);
  }

  return (
    <div>
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
      <button
        className="btn"
        onClick={() => {
          gameArray.length > 0 && validateSudoku();
        }}
      >
        Submit
      </button>
      <button
        className="btn"
        onClick={() => {
          getNewGame();
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default Board;
