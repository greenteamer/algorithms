const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const length = alphabet.length;

function rot13(str) {
  return str
    .split("")
    .map((i) => {
      if (i.match(/[A-Z]/g)) {
        const index = alphabet.indexOf(i);
        const shiftIndex =
          index + 13 > length - 1 ? index + 13 - length : index + 13;
        return alphabet[shiftIndex];
      }
      return i;
    })
    .join("");
}

const result = rot13("SERR PBQR PNZC");
result;
