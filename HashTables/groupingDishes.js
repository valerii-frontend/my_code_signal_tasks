function groupingDishes(dishes) {
  let obj = {};
  let keys = [];
  let result = [];
  for (let i = 0; i < dishes.length; i++) {
    for (let j = 1; j < dishes[i].length; j++) {
      const el = dishes[i][j];
      if (!obj[el]) {
        obj[el] = [];
      }
      obj[el].push(dishes[i][0]);
    }
  }
  for (key in obj) {
    if (obj[key].length >= 2) {
      keys.push(key);
    }
  }
  keys.sort();
  for (let i = 0; i < keys.length; i++) {
    const el = keys[i];
    result[i] = [];
    result[i].push(el);
    result[i] = [...result[i], ...obj[el].sort()];
  }
  return result;
}
