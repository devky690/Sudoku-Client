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
    checkRows(cell);
    console.log(cell);
  }, []);

  function checkColumn() {}
  function checkSquare() {}

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

function checkRows(cell) {
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

  //beginning row 2 check
  position = cell[3];
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
  //beginning row 3 check
  position = cell[6];
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
  //beginning row 4 check
  position = cell[27];
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
  //beginning row 5 check
  position = cell[30];
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
  //beginning row 6 check
  position = cell[33];
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
  //beginning row 7 check
  position = cell[33];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 7
  position = cell[42];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
  //still checking row 7
  position = cell[51];
  console.log(position);
  for (let i = 1; i <= 2; i++) {
    position = position.nextElementSibling;
    console.log(position);
  }
}

export default Board;
