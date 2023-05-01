function isTreeSymmetric(t) {
  if (!t) {
    return true;
  }
  return isMirror(t.left, t.right);
}
// helper recursive func
function isMirror(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2 || node1.value !== node2.value) return false;
  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
}
