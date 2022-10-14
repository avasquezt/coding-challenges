function lastIndexOf(head, value) {
  let index = -1;
  let currentIndex = 0;
  while(head){
    if(head.data === value) index = currentIndex;
    head = head.next;
    currentIndex++;
  }
  return index;
}