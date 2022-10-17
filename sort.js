const arr = [5, 3, 4, 2, 1, 3, 4];
const Output = [1, 2, 5];

const sort1 = (arr) => {
  const [first, second, ...rest] = arr;
  if (arr.length === 1) {
    return [first];
  }
  const [f, s] = first > second ? [second, first] : [first, second];
  return [f, ...sort1([s, ...rest])];
};

console.log(sort1(arr));
console.log(sort1(arr).length);

const bubbleSort = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    // let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // wasSwap = true;
      }
    }
    // if (!wasSwap) break;
  }
  return arr;
};

console.log(bubbleSort(arr));
console.log(bubbleSort(arr).length);
