// Recursion solution
function hasPathWithGivenSum(t, s) {
  if (!t) {
    return false;
  }
  if (!t.left && !t.right) {
    return t.value === s;
  }
  return hasPathWithGivenSum(t.left, s - t.value) || hasPathWithGivenSum(t.right, s - t.value);
}

// Solution using Stack
function hasPathWithGivenSum2(root, s) {
  if (!root) {
    return false;
  }

  const nodeStack = [root];
  const sumStack = [root.value];

  while (nodeStack.length) {
    const node = nodeStack.pop();
    const sum = sumStack.pop();

    if (!node.left && !node.right && sum === s) {
      return true;
    }

    if (node.left) {
      nodeStack.push(node.left);
      sumStack.push(sum + node.left.value);
    }

    if (node.right) {
      nodeStack.push(node.right);
      sumStack.push(sum + node.right.value);
    }
  }

  return false;
}
