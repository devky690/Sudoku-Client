import React from "react";
import Cell from "./cell.js";
import "../styles/square.css";

const square = () => {
  return (
    <form className="square-grid">
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
    </form>
  );
};

export default square;
