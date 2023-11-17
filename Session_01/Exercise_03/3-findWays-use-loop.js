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

  for (let col = 0; col < columns; col++) {
    const safeRows = indexOfRowSafe[col];

    const currentPaths = [];

    for (let i = 0; i < paths.length; i++) {
      const currentPath = paths[i];
      for (let j = 0; j < safeRows.length; j++) {
        const newPath = [...currentPath, safeRows[j]];
        currentPaths.push(newPath);
      }
    }

    paths.length = 0;
    paths.push(...currentPaths);
  }

  return paths;
};
