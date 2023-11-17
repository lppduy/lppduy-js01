const factorial = x => {
  if (x === 0) return 1;

  return x * factorial(x - 1);
};

const ckn = (n, k) => {
  if (k < 0 || k > n) return 'Invalid input';

  return factorial(n) / (factorial(k) * factorial(n - k));
};
