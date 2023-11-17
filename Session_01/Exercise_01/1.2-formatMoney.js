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
