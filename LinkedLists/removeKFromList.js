function removeKFromList(l, k) {
  let temp = new ListNode();
  temp.next = l;
  let current = temp;
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return temp.next;
}
