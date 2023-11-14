// 3. Write the function to count how many words appear in a string:
//  oneTwoThree => 3

// Cách 1:
function countWords(str) {
  const words = str.split(/(?=[A-Z])/);
  return words.length;
}

// Test case
console.log(countWords('oneTwoThree')); // Output: 3

// Cách 2:
const countWordsSML = str => {
  if (str.length === 0) return 0;

  const AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    result = result + str[i];
    if (AZ.includes(str[i]) && i > 0) count++;
  }

  return count;
};

// Test case
console.log(countWordsSML('')); // 0
console.log(countWordsSML('OneTwo')); // 2
console.log(countWordsSML('oneTwoThree')); //  3
console.log(countWordsSML('oneTwoThreeFourFive')); // 5
