function solution(s) {
  const stack = [];
  let currentStr = "";
  let num = 0;

  for (let char of s) {
    if (!isNaN(char)) {
      num = num * 10 + parseInt(char);
    } else if (char === "[") {
      stack.push([num, currentStr]);
      num = 0;
      currentStr = "";
    } else if (char === "]") {
      const [k, prevStr] = stack.pop();
      currentStr = prevStr + currentStr.repeat(k);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
}
