import React, { useState } from "react";
import Board from "./components/board.js";
import Modal from "./components/modal.js";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <div className="game-container">
        <h2>Sudoku </h2>
        <Board> </Board>
        <h2>Game Status</h2>
        <Modal> </Modal>
      </div>
    </div>
  );
}

export default App;
