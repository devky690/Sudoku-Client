import React from "react";
import Square from "./square.js";
import "../styles/board.css";

const board = () => {
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

export default board;
