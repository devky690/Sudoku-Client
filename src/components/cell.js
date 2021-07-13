import React, { useEffect, useState } from "react";
import "../styles/cell.css";

const Cell = () => {
  const [num, setNum] = useState("");
  useEffect(()=>{
    //saveToLocalStorage();
    //
  }, [num])
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
