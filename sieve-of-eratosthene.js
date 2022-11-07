const sieveOfEratosthenesRec = (n) => {
  const arr = new Array(n - 1).fill(null).map((i, idx) => idx + 2);
  const recFn = ([f, ...rest]) => {
    if (rest.length === 0 && f) {
      return [f];
    }
    if (!f) {
      return [];
    }
    const newArr = rest.filter((i) => i % f !== 0);
    return [f, ...recFn(newArr)];
  };
  return recFn(arr);
};

const sieveOfEratosthenes = (n) => {
  const arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = Math.pow(i, 2); j <= n; j = j + i) {
        arr[j] = false;
      }
    }
  }

  return arr.reduce((acc, i, idx) => {
    if (i) {
      acc.push(idx);
    }
    return acc;
  }, []);
};
