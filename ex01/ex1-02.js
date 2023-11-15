/**
  2. Write a function for format money in shorten :
   1000 => 1K, 1123400000 => 1.12B , 1342222 => 1.34M
 */

const formatMoney = num => {
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixIndex = 0;

  while (num >= 1000 && suffixIndex < suffixes.length - 1) {
    num /= 1000;
    suffixIndex++;
  }

  return num % 1 === 0
    ? num.toFixed(0) + suffixes[suffixIndex]
    : num.toFixed(2) + suffixes[suffixIndex];
};

// Test cases
console.log(formatMoney(1000)); // Output: 1K
console.log(formatMoney(1123400000)); // Output: 1.12B
console.log(formatMoney(1342222)); // Output: 1.34M
