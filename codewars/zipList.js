/**
 * Applies the function to all the elements on the input lists and returns the results as a new list
 * @param {Function} fn 
 * @param {NodeList} head0 
 * @param {NodeList} head1 
 * @returns {NodeList}
 */

function zipWith(fn,head0,head1) {
    let result = new Node();
    result.next = null;
    let curr = result;
    let curr0 = head0;
    let curr1 = head1;
    while (curr0 && curr1){
      const val = new Node();
      val.value = fn(curr0.value, curr1.value);
      curr0 = curr0.next;
      curr1 = curr1.next;
      curr.next = val;
      curr = val;
    }
    return result.next;
}

function zipWith(f, a, b) {
    return a && b ? new Node(f(a.value, b.value), zipWith(f, a.next, b.next)) : null;
}