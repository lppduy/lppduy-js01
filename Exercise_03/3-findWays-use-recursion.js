const findWays = arr => {
  const columns = arr.length;
  const rows = arr[0].length;

  if (rows !== 3 || columns !== 5)
    return 'Please enter an array with 3 rows and 5 columns';

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
