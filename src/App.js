import Board from "./components/Board";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    //need to mess around with this to figure out the validation for sudoku
    //then after that, comes the random generator for the sudoku
    const div = document.querySelectorAll(".board-grid");
    console.log(div);
  }, []);

  return (
    <div className="App">
      <Board> </Board>
    </div>
  );
}

export default App;
