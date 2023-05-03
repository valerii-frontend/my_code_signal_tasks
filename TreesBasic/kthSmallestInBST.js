function kthSmallestInBST(root, k) {
  let count = 0;
  function inorder(node) {
    if (!node) return -1;
    let left = inorder(node.left);
    if (left !== -1) return left;
    count++;
    if (count === k) return node.value;
    return inorder(node.right);
  }
  return inorder(root);
}
