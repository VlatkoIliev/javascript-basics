function checkPalindrom(str) {
  // if string is empty or string length === 1 return true

  let len = str.length;
  if (len <= 1) {
    return true;
  }
  let i = 0;
  let j = len - 1;
  while (i <= j) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(checkPalindrom('odo'));
console.log(checkPalindrom('anaana'));
console.log(checkPalindrom('hgt'));
console.log(checkPalindrom('d'));
