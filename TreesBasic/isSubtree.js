function isSubtree(t1, t2) {
  if (!t1) {
    return !t2;
  }

  if (isSameTree(t1, t2)) {
    return true;
  }

  return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
}

function isSameTree(t1, t2) {
  if (!t1 && !t2) {
    return true;
  }

  if (!t1 || !t2 || t1.value !== t2.value) {
    return false;
  }

  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
}
