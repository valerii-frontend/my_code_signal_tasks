function areFollowingPatterns(strings, patterns) {
  const stringObject = {};
  const patternObject = {};

  for (let i = 0; i < strings.length; i++) {
    const stringItem = strings[i];
    const patternItem = patterns[i];

    if (!stringObject[stringItem]) {
      stringObject[stringItem] = patternItem;
    } else if (stringObject[stringItem] !== patternItem) {
      return false;
    }

    if (!patternObject[patternItem]) {
      patternObject[patternItem] = stringItem;
    } else if (patternObject[patternItem] !== stringItem) {
      return false;
    }
  }
  return true;
}
