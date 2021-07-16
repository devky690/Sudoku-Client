import React, { useEffect, useState } from "react";
import "../styles/cell.css";

const Cell = ({ setGameArray }) => {
  const [num, setNum] = useState("");
  useEffect(() => {
    //!=== " " so we dont run on initial render
    //we dont want to set board to empty strings on initial render! that would
    //mean our sudoku board would never be generated with the required initial
    //values
    if (num !== "") {
      const cell = document.querySelectorAll(".cell-input");
      const newGameArray = [];
      updateGameArray(cell, 0, newGameArray);
      setGameArray(newGameArray);
    }
  }, [num]);

  function updateGameArray(cell, index, newGameArray) {
    if (index == 81) return;
    let position = cell[index];
    newGameArray.push(position.value);

    //add first element (its directly above) to seen here
    for (let count = 2; count <= 9; count++) {
      position = position.nextElementSibling;
      index++;
      newGameArray.push(position.value);
    }
    updateGameArray(cell, index + 1, newGameArray);
  }

  return (
    <input
      className="cell-input"
      value={num}
      onChange={e => {
        setNum(e.target.value);
      }}
    />
  );
};

export default Cell;
