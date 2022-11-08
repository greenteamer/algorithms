console.log("--- Merge Sort 1000000 ---");

const arr = [14, 7, 5, 11, 3, 9, 10, 1, 8, 12, 15, 2, 4, 13, 6];

const arr2 = Array.from({ length: 1000000 }, (i) =>
  Math.trunc(Math.random() * 100)
);

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const partition = Math.trunc(arr.length / 2);
  const left = mergeSort(arr.slice(0, partition));
  const right = mergeSort(arr.slice(partition));

  const mergeFn = (l, r) => {
    let result = [];
    let lIndex = 0;
    let rIndex = 0;
    if (!r.length && l) {
      return l;
    } else if (!l.length && r) {
      return r;
    }

    for (let i = 0; i <= l.length + r.length - 1; i++) {
      if (l[lIndex] <= r[rIndex] || (r[rIndex] === undefined && l[lIndex])) {
        result.push(l[lIndex]);
        lIndex++;
      } else if (
        l[lIndex] > r[rIndex] ||
        (l[lIndex] === undefined && r[rIndex])
      ) {
        result.push(r[rIndex]);
        rIndex++;
      }
    }
    return result;
  };

  return mergeFn(left, right);
};

const t0 = performance.now();
console.log(mergeSort(arr2));
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
