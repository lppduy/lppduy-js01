// 3. Write the function get a random element from an arrays.
// sử dụng lại hàm của câu 2
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = arr => {
  if (!Array.isArray(arr)) return 'Please enter an array';

  let randomIndex = getRandomInt(0, arr.length - 1);

  return arr[randomIndex];
};

// test case:
const arr = ['Duy', 'Tai', 'Phuc', 'Loc', 'Nam'];
console.log(getRandomElement(arr));
