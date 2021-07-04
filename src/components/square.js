import React, { useEffect } from "react";
import Cell from "./Cell.js";
import "../styles/square.css";

const Square = () => {
  useEffect(() => {
    console.log();
  }, []);
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

export default Square;
