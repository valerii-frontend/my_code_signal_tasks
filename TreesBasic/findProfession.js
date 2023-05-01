function findProfession(level, pos) {
  const E = "Engineer";
  const D = "Doctor";
  if (level === 1) return "Engineer";
  const parent = findProfession(level - 1, Math.ceil(pos / 2));
  const isLeft = pos % 2 === 1;
  if (parent === E) {
    return isLeft ? E : D;
  } else {
    return isLeft ? D : E;
  }
}

/*
function solution(level, pos) {
  return ['Engineer', 'Doctor'][((pos - 1).toString(2).split('1').length - 1) % 2];
}

*/
