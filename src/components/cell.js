import React, { useEffect, useState } from "react";
import "../styles/cell.css";

const Cell = ({setGameArray}) => {
  const [num, setNum] = useState("");
  useEffect(()=>{
    //!=== " " so we dont run on initial render
    if(num !== "") {
      const cell = document.querySelectorAll(".cell-input");
      console.log(cell)
      const newGameArray = [];
      //updateGameArray(cell, index, newGameArray);
      console.log("inside ran");
  
    }
  }, [num])

  // function updateGameArray(cell, index, newGameArray){
  //     if(index === 81) return ;


  // }

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
