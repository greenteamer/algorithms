function steamrollArray(arr) {
  return arr.reduce((acc, i) => {
    if (Array.isArray(i)) {
      const res = steamrollArray(i);
      return [...acc, ...res];
    } else {
      return [...acc, i];
    }
  }, []);
}

const result = steamrollArray([1, [2], [3, [[4]]]]);

result;
