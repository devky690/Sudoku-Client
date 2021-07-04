import React from "react";
import Square from "./Square.js";
import "../styles/board.css";

const Board = () => {
  return (
    <div className="board-grid">
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
  );
};

export default Board;
