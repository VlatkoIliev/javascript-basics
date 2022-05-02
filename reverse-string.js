function reverseStr(str) {
  let len = str.length;
  let newStr = '';
  for (let i = len - 1; i >= 0; i--) {
    newStr = newStr + str.charAt(i);
  }
  return newStr;
}

//console.log(reverseStr('str'));

// istata funkcija so push i unshift
function reverseWithPop(str) {
  let arr = Array.from(str);
  let elem;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    elem = arr.pop();
    newStr = newStr + elem;
  }
  return newStr;
}

// console.log(popAndShift('Vlatko'));

console.log(reverseWithPop('vlatko'));
