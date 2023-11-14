// 1.  Write the function to calculate the combination (Ckn)

const factorial = x => {
  if (x === 0) return 1;

  return x * factorial(x - 1);
};

const ckn = (n, k) => {
  if (k < 0 || k > n) return -1; // throw error

  return factorial(n) / (factorial(k) * factorial(n - k));
};

console.log(ckn(5, 2));
