function solution(a) {
  let b = {};
  for (let i = 0; i < a.length; i++) {
    let value = a[i];
    if (!b[value]) {
      b[value] = [];
      b[value].push(i);
    } else {
      return value;
    }
  }
  return -1;
}
