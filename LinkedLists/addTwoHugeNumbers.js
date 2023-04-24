function solution(a, b) {
  // Reverse both linked lists
  a = reverseLinkedList(a);
  b = reverseLinkedList(b);

  let currA = a;
  let currB = b;
  let carry = 0;
  let sum;

  // Create a new linked list to store the result
  const result = new ListNode(0);
  let curr = result;

  while (currA || currB || carry) {
    sum = (currA ? currA.value : 0) + (currB ? currB.value : 0) + carry;
    carry = Math.floor(sum / 10000);
    sum %= 10000;

    curr.next = new ListNode(sum);
    curr = curr.next;

    currA = currA && currA.next;
    currB = currB && currB.next;
  }

  // Reverse the result linked list and return it
  return reverseLinkedList(result.next);
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  let next;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
