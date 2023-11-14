function findSafePaths(garden) {
  const numRows = garden.length;
  const numCols = garden[0].length;

  const visited = []; // Create a visited array to track visited cells
  for (let i = 0; i < numRows; i++) {
    visited.push(new Array(numCols).fill(false));
  }

  const queue = [];
  for (let i = 0; i < numRows; i++) {
    if (garden[i][0] === 0) {
      queue.push([[i, 0]]);
      visited[i][0] = true; // Mark the cell as visited
    }
  }

  const safePaths = [];

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const lastCell = currentPath[currentPath.length - 1];
    const [row, col] = lastCell;

    if (col === numCols - 1) {
      safePaths.push(currentPath);
    } else {
      const directions = [
        [0, 1], // Right
        [1, 0], // Down
        [-1, 0], // Up
      ];

      for (const [dRow, dCol] of directions) {
        const newRow = row + dRow;
        const newCol = col + dCol;

        if (
          newRow >= 0 &&
          newRow < numRows &&
          newCol >= 0 &&
          newCol < numCols &&
          garden[newRow][newCol] === 0 &&
          !visited[newRow][newCol] // Check if cell is not visited
        ) {
          const newPath = [...currentPath];
          newPath.push([newRow, newCol]);
          visited[newRow][newCol] = true; // Mark the cell as visited
          queue.push(newPath);
        }
      }
    }
  }

  return safePaths;
}

// Example garden
const garden = [
  [0, 1, 1],
  [0, 1, 1],
  [0, 1, 1],
  [0, 1, 1],
  [0, 0, 1],
];

// Finding safe paths
const allSafePaths = findSafePaths(garden);
console.log(allSafePaths);
