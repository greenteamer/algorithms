function isEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function transform(list, offset) {
  const tail = list.splice(offset % list.length);
  return [...tail, ...list];
}

console.log(isEqual(transform([1, 2, 3, 4, 5], 0), [1, 2, 3, 4, 5]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 2), [3, 4, 5, 1, 2]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 3), [4, 5, 1, 2, 3]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 6), [2, 3, 4, 5, 1]));
console.log(isEqual(transform([1, 2, 3, 4, 5], -1), [5, 1, 2, 3, 4]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4]));
console.log("-----------------------------------------------------");
