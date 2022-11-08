// the total amount of weight you can carry (weightCap)
// the weights of all of the items in an array (weights)
// the values of all of the items in an array (values)
// Your function should return the maximum value that you will be able to carry.

const printMatrix = require("./utils/print-matrix.js");

let call = 0;

const knapsack = (weightCap, weights, values, i = weights.length) => {
  call++;
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return knapsack(weightCap, weights, values, i - 1);
  }
  const newWeightCap = weightCap - weights[i - 1];
  const inc = values[i - 1] + knapsack(newWeightCap, weights, values, i - 1);
  const exc = knapsack(weightCap, weights, values, i - 1);

  return Math.max(inc, exc);
};

let call2 = 0;

const dynamicKnapsack = function (weightCap, weights, values) {
  const numItem = weights.length;
  const matrix = new Array(numItem);

  for (let index = 0; index <= numItem; index++) {
    matrix[index] = new Array(weightCap + 1);
    for (let weight = 0; weight <= weightCap; weight++) {
      // Write your code here:
      if (index === 0 || weight === 0) {
        matrix[index][weight] = 0;
      } else if (weights[index - 1] <= weight) {
        const prev = matrix[index - 1][weight];
        const calcNew =
          values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
        matrix[index][weight] = Math.max(prev, calcNew);
      } else {
        matrix[index][weight] = matrix[index - 1][weight];
      }
    }
  }

  printMatrix(matrix);

  return matrix[numItem][weightCap];
};

const weightCap = 50;
const weights = [31, 10, 20, 19, 4, 3, 6];
const values = [70, 20, 39, 37, 7, 5, 10];

console.log(knapsack(weightCap, weights, values));
console.log("call: ", call);

console.log(dynamicKnapsack(weightCap, weights, values));
console.log("dynamicKnapsack call2: ", call2);
