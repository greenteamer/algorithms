let counter = 0;
const fibonacci = (n) => {
  counter++;
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const t0 = performance.now();
console.log("fibonacci(40): ", fibonacci(40));
const t1 = performance.now();
console.log(`Call took ${t1 - t0} milliseconds.`);
console.log(`${counter} Calls\n`);

const memo = {};
let counter2 = 0;

const fibonacciMemo = (n) => {
  counter2++;
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    memo[n] = n;
    return n;
  }
  const result = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  memo[n] = result;
  return result;
};

const t2 = performance.now();
console.log("fibonacciMemo(100): ", fibonacciMemo(3000));
const t3 = performance.now();
console.log(`Call took ${t3 - t2} milliseconds.`);
console.log(`${counter2} Calls\n`);
