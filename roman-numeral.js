const dict = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};

const orderKeys = Object.keys(dict)
  .map((i) => parseInt(i))
  .sort((a, b) => (a < b ? 1 : -1));
orderKeys;

function convertToRoman(num) {
  const res = orderKeys.reduce(
    (acc, i) => {
      const dev = num % i;
      const condition = dev === num;
      if (condition) {
        return acc;
      } else {
        const repeatNum = Math.floor(acc.arabic / i);
        const romanResult = `${acc.roman}${dict[i].repeat(repeatNum)}`;
        const rest = acc.arabic - i * repeatNum;
        return { roman: romanResult, arabic: rest };
      }
    },
    { roman: "", arabic: num }
  );

  return res.roman;
}

const result = convertToRoman(39);

result;
