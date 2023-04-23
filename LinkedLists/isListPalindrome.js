function solution(l) {
  if (l === null || l.next === null) {
    return true;
  }

  let slow = l;
  let fast = l;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let curr = slow.next;
  let prev = null;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let p1 = l;
  let p2 = prev;
  while (p2 !== null) {
    if (p1.value !== p2.value) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}
