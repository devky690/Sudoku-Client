const easyProbOne = [
  ["", 3, 8, "", "", 4, "", "", 2],
  ["", "", 2, 5, "", "", 4, 3, ""],
  ["", 7, 9, 1, 3, "", 5, "", 6],
  ["", "", "", 6, 8, "", 7, "", 1],
  ["", "", "", "", 1, "", "", 4, ""],
  ["", 1, "", "", 2, "", "", "", 5],
  [7, 2, "", 3, "", "", "", 5, ""],
  [3, 4, 5, "", 7, "", 6, 2, ""],
  ["", 9, "", "", 5, 6, 3, 7, ""],
];

const easyCollection = [easyProbOne];

const randomEasyProb = Math.floor(Math.random() * easyCollection.length);

export default easyProbOne;
