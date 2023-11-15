function readNumber(inputNumber) {
  if (
    inputNumber < 0 ||
    inputNumber >= 1000000 ||
    !Number.isInteger(inputNumber)
  ) {
    return 'Invalid input';
  }

  const units = [
    '',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
  ];

  let result = '';
  let numberStr = inputNumber.toString().padStart(6, '0');

  for (let i = 0; i < 6; i++) {
    const digit = parseInt(numberStr[i]);

    if (i === 0 && digit !== 0) {
      result += units[digit] + ' mươi ';
    } else if (i === 1 && digit !== 0) {
      result += units[digit] + ' vạn ';
    } else if (i === 2 && digit !== 0) {
      result += units[digit] + ' ngàn ';
    } else if (i === 3 && digit !== 0) {
      result += units[digit] + ' trăm ';
    } else if (i === 4) {
      if (digit === 0) {
        result += 'linh ';
      } else {
        result += units[digit] + ' mươi ';
      }
    } else if (i === 5 && digit !== 0) {
      result += units[digit];
    }
  }

  return result.trim();
}

const number = 726503;
const vietnamese = readNumber(number);
console.log(vietnamese);
