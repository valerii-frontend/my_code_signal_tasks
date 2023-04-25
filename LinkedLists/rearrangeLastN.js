function rearrangeLastN(list, num) {
  let length = 0;
  let current = list;
  while (current) {
    length++;
    current = current.next;
  }
  if (num >= length) {
    return list;
  }
  let last = list;
  for (let i = 0; i < length - 1; i++) {
    last = last.next;
  }
  last.next = list;
  let prev = null;
  current = list;
  for (let i = 0; i < length - num; i++) {
    prev = current;
    current = current.next;
  }
  prev.next = null;

  return current;
}
