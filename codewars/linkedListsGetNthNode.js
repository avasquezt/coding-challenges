function Node(data) {
    this.data = data;
    this.next = null;
}

/**
 * Returns the node stored at the requested position in the input linked list
 * @param {Node} node 
 * @param {number} index 
 * @returns {Node}
 */
function getNth(node, index) {
    while(index && node){
        node = node.next;
        index--;
    }
    if(!node) throw new Error();
    return node;
}
  