const Input = [1, 2, 3, 3, 4, 4, 5];
const Output = [1, 2, 5];

const func = (arr) => {
  const sorted = arr.sort((a, b) => (a < b ? -1 : 1));

  console.log(sorted);
  let tmp = [];
  sorted.forEach((a) => {
    if (sorted.filter((v) => v === a).length > 1) {
      return;
    }
    tmp.push(a);
  });
  return tmp;
};
