const printMatrix = (mtx) => {
  const result = mtx.reduce((str, item) => {
    str +=
      item.map((i) => i + " ".repeat(4 - String(i).length)).join("") + "\n";
    return str;
  }, "");
  console.log(result);
};

module.exports = printMatrix;
