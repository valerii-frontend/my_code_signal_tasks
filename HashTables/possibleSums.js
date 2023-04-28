function possibleSums(coins, quantity) {
  const sumsArray = [0];
  for (let i = 0; i < coins.length; i++) {
    const c = coins[i];
    const q = quantity[i];
    const len = sumsArray.length;
    for (let j = 0; j < len; j++) {
      for (let k = 1; k <= q; k++) {
        sumsArray.push(sumsArray[j] + c * k);
      }
    }
  }
  return new Set(sumsArray).size - 1;
}
