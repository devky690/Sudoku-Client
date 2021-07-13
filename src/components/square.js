import React, { useEffect } from "react";
import Cell from "./cell.js";
import "../styles/square.css";

const Square = () => {
  return (
    <div className="square-grid">
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
    </div>
  );
};

export default Square;
