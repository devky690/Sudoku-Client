import React, { useState } from "react";
import "../styles/cell.css";

const Cell = () => {
  const [num, setNum] = useState();

  return (
    <input
      className="cell-input"
      value="1"
      onChange={e => {
        setNum(e.target.value);
      }}
    />
  );
};

export default Cell;
