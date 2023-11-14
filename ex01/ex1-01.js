// 1. Write a function to format money string:
//    10000000 => “10,000,000" || 123456 => “123,456" || 12000.02 => "12,000.02"

// Cách 1:
const formatMoney = money => {
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

// console.log(formatMoney(2222));
console.log(formatMoney(1000.02));
// console.log(formatMoney(12000.02));

// Cách 2: dùng builtin method
// const formatMoney2 = money => Intl.NumberFormat().format(money);
// console.log(formatMoney2(22222));
// console.log(formatMoney2(1000.02));
// console.log(formatMoney2(12000.02));
