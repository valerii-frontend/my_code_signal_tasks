function removeNode(node, value) {
  if (!node) {
    return null;
  }

  if (value < node.value) {
    node.left = removeNode(node.left, value);
  } else if (value > node.value) {
    node.right = removeNode(node.right, value);
  } else {
    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    }

    let rightmost = node.left;
    while (rightmost.right) {
      rightmost = rightmost.right;
    }

    node.value = rightmost.value;
    node.left = removeNode(node.left, rightmost.value);
  }

  return node;
}

function deleteFromBST(t, queries) {
  for (let i = 0; i < queries.length; i++) {
    t = removeNode(t, queries[i]);
  }

  return t;
}
