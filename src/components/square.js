import React, { useEffect } from "react";
import Cell from "./cell.js";
import "../styles/square.css";

const Square = ({setGameArray}) => {
  return (
    <div className="square-grid">
      <Cell setGameArray = {setGameArray} ></Cell>
      <Cell setGameArray = {setGameArray} ></Cell>
      <Cell setGameArray = {setGameArray} ></Cell>
      <Cell setGameArray = {setGameArray} ></Cell>
      <Cell setGameArray = {setGameArray} ></Cell>
      <Cell setGameArray = {setGameArray} ></Cell>
      <Cell setGameArray = {setGameArray} ></Cell>
      <Cell setGameArray = {setGameArray} ></Cell>
      <Cell setGameArray = {setGameArray} ></Cell>
    </div>
  );
};

export default Square;
