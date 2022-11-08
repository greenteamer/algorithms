console.log("--- Selection Sort 25000 ---");

const arr2 = Array.from({ length: 25000 }, (i) =>
  Math.trunc(Math.random() * 100)
);

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIdx = j;
      }
    }
    const tmp = arr[i];
    arr[i] = min;
    arr[minIdx] = tmp;
  }
  return arr;
};

const t0 = performance.now();
console.log("change sort: ", selectionSort(arr2));
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.\n`);
