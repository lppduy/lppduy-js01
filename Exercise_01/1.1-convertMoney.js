const convertMoney = money => {
  let str = money.toString();
  let parts = str.split('.');
  let whole = parts[0];
  let formatted = '';

  let count = 0;
  for (let i = whole.length - 1; i >= 0; i--) {
    formatted = whole[i] + formatted;
    count++;
    if (count % 3 === 0 && i !== 0) formatted = ',' + formatted;
  }

  if (parts.length === 2) return formatted + '.' + parts[1];

  return formatted;
};
