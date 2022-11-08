console.log("--- Quick Sort 500000 ---");

const arr2 = Array.from({ length: 500000 }, (i) =>
  Math.trunc(Math.random() * 100)
);

const arr3 = [4, 6, 1, 3, 7, 2, 8, 5];

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIdx = Math.floor(arr.length / 2);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIdx) {
      if (arr[i] <= arr[pivotIdx]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return quickSort(left).concat(arr[pivotIdx], quickSort(right));
};

const t0 = performance.now();
console.log("quick sort: ", quickSort(arr2));
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
