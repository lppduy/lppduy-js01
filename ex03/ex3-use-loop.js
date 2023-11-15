// Exercise 3: 2D Arrays
// -We have a rectangle garden with 3 row and 5 column: -each cell had a bomb or no bomb: ( 0: SAFE, 1: BOMB)
// problem: find all the safe way to go from the left to the right of the garden.

// examples:
// Input: [ [0,1,1], [0,1,1], [0,1,1], [0,1,1], [0,0,1]]
// Output : [ [0,0,0,0,0] , [0,0,0,0,1]]

const findWays = arr => {
  const columns = arr.length;
  const rows = arr[0].length;

  // validate input
  if (rows !== 3 || columns !== 5)
    return 'Vui lòng nhập mảng có 3 hàng và 5 cột';

  const indexOfRowSafe = []; // Mảng chứa các hàng an toàn cho từng cột

  // Tìm các row an toàn trong từng col và lưu vào mảng indexOfRowSafe
  for (let colIndex = 0; colIndex < columns; colIndex++) {
    const safeRows = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      if (arr[colIndex][rowIndex] === 0) {
        safeRows.push(rowIndex);
      }
    }
    indexOfRowSafe.push(safeRows);
  }
  // Nếu không có row an toàn nào trong col đầu tiên
  if (indexOfRowSafe[0].length === 0) return [];

  const paths = [[]]; // Mảng các đường đi ban đầu chỉ có một đường đi rỗng

  // Duyệt qua từng col của khu vườn
  for (let col = 0; col < columns; col++) {
    const safeRows = indexOfRowSafe[col]; // Các row an toàn trong col hiện tại
    const currentPaths = []; // Mảng trung gian lưu trữ các đường đi hiện tại

    // Duyệt qua từng đường đi hiện tại trong paths
    for (let i = 0; i < paths.length; i++) {
      const currentPath = paths[i]; // Đường đi hiện tại

      // Duyệt qua từng row an toàn trong col hiện tại
      for (let j = 0; j < safeRows.length; j++) {
        const newPath = [...currentPath, safeRows[j]]; // Tạo đường đi mới bằng cách thêm row an toàn vào đường đi hiện tại
        currentPaths.push(newPath); // Thêm đường đi mới vào mảng currentPaths
      }
    }

    paths.length = 0; // Xóa các đường đi trong paths
    paths.push(...currentPaths); // Cập nhật các đường đi mới vào paths
  }

  return paths;
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
