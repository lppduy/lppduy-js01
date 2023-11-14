// 4. Given two arrays of integers, find which elements in the second array are missing from the first array.

const getMissingElement = (arr1, arr2) =>
  arr1.filter(element => !arr2.includes(element));

// test case:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5];

console.log(getMissingElement(arr1, arr2));
