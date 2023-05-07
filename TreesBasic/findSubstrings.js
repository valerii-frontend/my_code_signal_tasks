function findSubstrings(words, parts) {
  const partLengths = new Map();
  let minLength = Infinity;
  let maxLength = 0;

  // Store part lengths and find min and max lengths
  for (const part of parts) {
    const length = part.length;
    partLengths.set(part, length);
    minLength = Math.min(minLength, length);
    maxLength = Math.max(maxLength, length);
  }

  const buildResult = (word, obj) => {
    const { s, val, e } = obj;
    return word.substring(0, s) + "[" + val + "]" + word.substring(e);
  };

  const extractWord = (word) => {
    const length = word.length;
    for (let i = 0; i < length; i++) {
      for (let p = minLength; p <= maxLength && i + p <= length; p++) {
        const val = word.substring(i, i + p);
        if (partLengths.has(val)) {
          const maxLengthPart = resMap.has(word) ? resMap.get(word).val.length : 0;
          if (maxLengthPart < val.length) {
            resMap.set(word, { s: i, e: i + p, val });
          }
        }
      }
    }
  };

  const resMap = new Map();
  for (const word of words) {
    extractWord(word);
  }

  const result = [];
  for (const word of words) {
    if (resMap.has(word)) {
      result.push(buildResult(word, resMap.get(word)));
    } else {
      result.push(word);
    }
  }

  return result;
}
