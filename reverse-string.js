function reverseStr(str) {
  let len = str.length;
  let newStr = '';
  for (let i = len - 1; i >= 0; i--) {
    newStr = newStr + str.charAt(i);
  }
  return newStr;
}

console.log(reverseStr('str'));
