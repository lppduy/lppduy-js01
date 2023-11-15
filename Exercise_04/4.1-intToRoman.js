function intToRoman1(num) {
  if (num <= 0 || num >= 1000) return -1;

  const romanList = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ];

  const units = num % 10;
  const tens = Math.trunc((num % 100) / 10);
  const hundreds = Math.trunc(num / 100);

  const roman =
    romanList[2][hundreds] + romanList[1][tens] + romanList[0][units];

  return roman;
}

const intToRoman2 = num => {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = '';
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
};
