const currency = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

function getValueByName(name) {
  return currency.find((i) => i[0] === name)[1];
}

function checkCashRegister(price, cash, cid) {
  const diff = cash - price;
  const change = calculate(price, cash, cid)
    .map((i) => [i[0], i[2]])
    .filter((i) => i[1] > 0)
    .reverse();
  change;
  const resultChangeAmmount = change
    .reduce((acc, next) => next[1] + acc, 0)
    .toFixed(2);
  const cidAmmount = cid.reduce((acc, next) => next[1] + acc, 0).toFixed(2);
  resultChangeAmmount;
  cidAmmount;
  if (diff > resultChangeAmmount) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  if (cidAmmount === resultChangeAmmount) {
    return { status: "CLOSED", change: cid };
  }
  return { status: "OPEN", change };
}

function calculate(price, cash, cid) {
  let diff = cash - price;
  diff;
  const sortedCurrency = currency.sort((a, b) => (a[1] > b[1] ? -1 : 1));
  sortedCurrency;

  const change = sortedCurrency.reduce((acc, next) => {
    const ord = diff % next[1];
    if (ord < diff) {
      const needsAmount = next[1] * Math.floor(diff / next[1]);
      needsAmount;
      const cidAmount = cid.find((i) => i[0] === next[0])[1];
      cidAmount;
      const takedAmount = needsAmount > cidAmount ? cidAmount : needsAmount;
      diff = (diff - takedAmount).toFixed(2);
      diff;
      console.log({ name: next[0], needsAmount, cidAmount, diff, takedAmount });
      return [[...next, takedAmount], ...acc];
    }
    return [[...next, 0], ...acc];
  }, []);

  return change;
}

const result = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
console.log(result);

result;
