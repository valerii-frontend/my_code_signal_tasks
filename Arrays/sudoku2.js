function gridCheck(grid, index, isRow) {
  const seen = new Set();
  const length = isRow ? 9 : grid.length;

  for (let i = 0; i < length; i++) {
    const x = isRow ? index : i;
    const y = isRow ? i : index;
    const item = grid[x][y];

    if (item !== "." && seen.has(item)) {
      return false;
    }
    seen.add(item);
  }
  return true;
}
function sudokuChecker(grid) {
  // Check rows and cols
  for (let i = 0; i < 9; i++) {
    if (!gridCheck(grid, i, true) || !gridCheck(grid, i, false)) {
      return false;
    }
  }

  // Check sub-grids
  for (let k = 0; k < 9; k++) {
    const seen = new Set();
    const i0 = Math.floor(k / 3) * 3;
    const j0 = (k % 3) * 3;

    for (let i = i0; i < i0 + 3; i++) {
      for (let j = j0; j < j0 + 3; j++) {
        if (grid[i][j] !== "." && seen.has(grid[i][j])) {
          return false;
        }
        seen.add(grid[i][j]);
      }
    }
  }

  return true;
}
