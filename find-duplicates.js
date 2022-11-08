const findDuplicates = (arr) => {
  const result = arr.reduce((acc, next) => {
    const isDuplicate = arr.filter((i) => i === next).length > 1;
    const alreadyIn = acc.includes(next);
    return isDuplicate && !alreadyIn ? [...acc, next] : acc;
  }, []);
  return result;
};

const input = [
  34, 54, 0, 8, 90, 45, 2, 1, 56, 98, 54, 23, 8, 2, 56, 0, 9, 980, 8, 23, 1, 65,
  0, 4,
];

const output = findDuplicates(input);

console.log(output, "\n");
