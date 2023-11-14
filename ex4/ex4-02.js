// 2. print how to read number in vietnamese: n integer < 1,000,000
// 726503 : bảy mươi hai vạn sáu ngàn năm trăm linh ba.

const numberToVietnamese = number => {
  const dv = [
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

  const readThreeDigits = num => {
    const tram = Math.floor(num / 100);
    const chuc = Math.floor((num % 100) / 10);
    const donVi = num % 10;
    let result = '';

    if (tram > 0) {
      result += dv[tram] + ' trăm ';
    }

    if (chuc === 0 && donVi === 0 && tram > 0) {
      result += 'linh ';
    } else if (chuc === 0 && donVi > 0) {
      result += 'linh ' + dv[donVi] + ' ';
    } else if (chuc === 1) {
      result += 'mười ' + dv[donVi] + ' ';
    } else if (chuc > 1) {
      result += dv[chuc] + ' mươi ';
      if (donVi > 0) {
        result += dv[donVi] + ' ';
      }
    }

    return result.trim();
  };

  if (number === 0) return 'không';

  let result = '';
  let index = 0;

  while (number > 0) {
    const group = number % 1000;
    if (group > 0) {
      let read = readThreeDigits(group);
      if (index === 1) {
        read += ' vạn ';
      } else if (index === 2) {
        read += ' triệu ';
      }
      result = read + result;
    }
    index++;
    number = Math.floor(number / 1000);
  }

  return result.trim();
};

// test case:
// const number = 726503;
const number = 32232;
const vietnameseNumber = numberToVietnamese(number);
console.log(vietnameseNumber); // Output: 'bảy mươi hai vạn sáu ngàn năm trăm linh ba'
