import React, { useState } from "react";
import Board from "./components/board.js";
import Modal from "./components/modal.js";

function App() {
  return (
    <div className="App">
      <Board> </Board>
      <div></div>
      <h2>Game Status</h2>
      <Modal> </Modal>
    </div>
  );
}

export default App;
