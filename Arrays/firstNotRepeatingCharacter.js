function firstNotRepeatingCharacter(s) {
  let arr = Array(26).fill(0);
  for (let letter of s) arr[letter.charCodeAt(0) - 97]++;
  for (let letter of s) if (arr[letter.charCodeAt(0) - 97] == 1) return letter;
  return "_";
}
