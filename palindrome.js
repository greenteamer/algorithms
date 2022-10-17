function palindrome(str) {
  const clearStr = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const [first, ...rest] = clearStr.split("");
  if (!first || rest.length === 0) return true;

  const last = rest.pop();

  if (last) {
    return first === last ? palindrome(rest.join("")) : false;
  }
  return true;
}

const result = palindrome("A man, a plan, a canal. Panama");

result;
