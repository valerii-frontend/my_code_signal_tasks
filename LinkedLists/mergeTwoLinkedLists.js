function mergeLinkedLists(list1, list2) {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let pointer1 = list1;
  let pointer2 = list2;

  while (pointer1 && pointer2) {
    if (pointer1.value < pointer2.value) {
      current.next = pointer1;
      pointer1 = pointer1.next;
    } else {
      current.next = pointer2;
      pointer2 = pointer2.next;
    }
    current = current.next;
  }

  current.next = pointer1 || pointer2;
  return dummyHead.next;
}
