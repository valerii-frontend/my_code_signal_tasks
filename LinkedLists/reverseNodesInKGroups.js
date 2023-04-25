function reverseNodesInKGroups(head, k) {
  if (k <= 1) {
    return head;
  }

  const dummy = new ListNode(0);
  dummy.next = head;
  let prevTail = dummy;

  while (prevTail.next) {
    let curr = prevTail.next;
    let tail = prevTail;

    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return dummy.next;
      }
    }

    const nextHead = tail.next;
    tail.next = null;
    prevTail.next = reverseList(curr);
    curr.next = nextHead;
    prevTail = curr;
  }

  return dummy.next;
}

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
