/**
 * 
 * @param {number} data 
 */
function Node(data) {
    this.data = data;
    this.next = null;
  }

/**
 * Adds a new node to the input liked list
 * @param {Node} head 
 * @param {number} data 
 * @returns {Node}
 */
function push(head, data) {
    const node = new Node(data);
    node.next = head;
    return node;
}

/**
 * Creates and return a linked list with three nodes: 1 -> 2 -> 3 -> nul
 * @returns {Node}
 */
function buildOneTwoThree() {
    return push(push(new Node(3), 2), 1);
}