function solution(crypt, symbolMap) {
  const [w1, w2, w3] = crypt;
  const charLegend = createObjectFromArray(symbolMap);
  const [n1, n2, n3] = [decode(w1, charLegend), decode(w2, charLegend), decode(w3, charLegend)];

  const isNumsValid = +n1 + +n2 === +n3;
  const isValid = checkZero(n1) && checkZero(n2) && checkZero(n3) && isNumsValid;

  return isValid;
}

function decode(word, obj) {
  let num = "";
  for (let i = 0; i < word.length; i++) {
    num += obj[word[i]];
  }
  console.log(word, num);
  return num;
}

function checkZero(num) {
  return num.length === 1 || num[0] !== "0";
}

function createObjectFromArray(array) {
  const object = {};
  for (const [key, value] of array) {
    object[key] = value;
  }
  return object;
}
