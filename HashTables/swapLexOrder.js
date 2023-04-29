function swapLexOrder(str_, pairs) {
  const n = str_.length;
  str_ = str_.split("");

  const corr = Array.from({ length: n }, () => new Set());
  const nodes = new Set();
  for (const [a, b] of pairs) {
    corr[a - 1].add(b - 1);
    corr[b - 1].add(a - 1);
    nodes.add(a - 1);
    nodes.add(b - 1);
  }

  while (nodes.size) {
    const active = new Set([nodes.values().next().value]);
    const group = new Set();
    while (active.size) {
      for (const x of active) {
        group.add(x);
        nodes.delete(x);
        for (const y of corr[x]) {
          if (nodes.has(y)) {
            active.add(y);
          }
        }
      }
      active.clear();
    }
    const chars = Array.from(group, (i) => str_[i])
      .sort()
      .reverse()
      [Symbol.iterator]();
    for (const i of Array.from(group).sort((a, b) => a - b)) {
      str_[i] = chars.next().value;
    }
  }

  return str_.join("");
}
