function telephoneCheck(str) {
  // const isNumberReg = new RegExp(
  //   /^([1]?)([\s.-]?)(\([0-9]{3}(?=\)))([0-9]{3}(?!\)))([0-9]{3})([\s.-]?)([0-9]{3})([\s.-]?)([0-9]{4})$/
  // );
  const isNumberReg = new RegExp(
    /^([1]?)([\s.-]?)([0-9]{3})([\s.-]?)([0-9]{3})([\s.-]?)([0-9]{4})$/
  );
  return isNumberReg.test(str);
}

const result = {
  0: telephoneCheck("555-555-5555"),
  1: telephoneCheck("1 555-555-5555"),
  2: telephoneCheck("1 (555) 555-5555"),
  3: telephoneCheck("5555555555"),
  5: telephoneCheck("(555)555-5555"),
  6: telephoneCheck("1(555)555-5555"),
  7: telephoneCheck("555-5555"),
  8: telephoneCheck("555 555-5555"),
  9: telephoneCheck(" 555 555-5555"),
};
result;
