// Exercise 3: 2D Arrays
// -We have a rectangle garden with 3 row and 5 column: -each cell had a bomb or no bomb: ( 0: SAFE, 1: BOMB)
// problem: find all the safe way to go from the left to the right of the garden.

// examples:
// Input: [ [0,1,1], [0,1,1], [0,1,1], [0,1,1], [0,0,1]]
// Output : [ [0,0,0,0,0] , [0,0,0,0,1]]

const findWays = arr => {
  const columns = arr.length;
  const rows = arr[0].length;

  if (rows !== 3 || columns !== 5) return 'Please enter an array with 3 rows and 5 columns';

  const indexOfRowSafe = [];
  for (let colIndex = 0; colIndex < columns; colIndex++) {
    const safeRows = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      if (arr[colIndex][rowIndex] === 0) {
        safeRows.push(rowIndex);
      }
    }
    indexOfRowSafe.push(safeRows);
  }

  if (indexOfRowSafe[0].length === 0) return [];

  const output = [];

  const generatePaths = (currentColumn, path) => {
    if (currentColumn === columns) {
      output.push([...path]);
      return;
    }

    const safeRows = indexOfRowSafe[currentColumn];
    for (let i = 0; i < safeRows.length; i++) {
      path.push(safeRows[i]);
      generatePaths(currentColumn + 1, path);
      path.pop();
    }
  };

  generatePaths(0, []);
  return output;
};

// Test case
// const input = [
//   [0, 1, 1],
//   [0, 1, 1],
//   [0, 1, 1],
//   [0, 1, 1],
//   [0, 0, 1],
// ];
const input = [
  [0, 1, 1],
  [0, 1, 1],
  [0, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
];
const output = findWays(input);
console.log(output);
