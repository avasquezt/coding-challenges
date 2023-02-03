/**
 * Parses a linked list based on the input string representation, and returns its head
 * @param {string} string 
 * @returns {Node}
 */

function parse(string) {
    let currNode = null;
    string = string.split(' -> ');
    for(let i = string.length - 2; i >= 0; i--){
      const newNode = new Node(Number(string[i]), currNode);
      currNode = newNode;
    }
    return currNode;
}

const parse = string => string.split(' -> ').slice(0, -1).reduceRight((a, b) => new Node(Number(b), a), null);