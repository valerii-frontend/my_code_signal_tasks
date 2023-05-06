function restoreBinaryTree(inorder, preorder) {
  const index = {};
  inorder.forEach((val, idx) => (index[val] = idx));
  let preIdx = 0;

  function buildTreeHelper(start, end) {
    if (start > end) return null;

    const node = { value: preorder[preIdx++] };
    const inIdx = index[node.value];

    node.left = buildTreeHelper(start, inIdx - 1);
    node.right = buildTreeHelper(inIdx + 1, end);

    return node;
  }

  return buildTreeHelper(0, inorder.length - 1);
}
