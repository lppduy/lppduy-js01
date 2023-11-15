function countWords1(str) {
  const words = str.split(/(?=[A-Z])/);
  return words.length;
}

const countWords2 = str => {
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
