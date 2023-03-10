/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.list = head;
};

/**
 * Returns a random value from the input list
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let scope = 1, chosenValue = 0;
    let curr = this.list;
    while (curr){
        if(Math.random() < (1 / scope)) chosenValue = curr.val;
        scope++;
        curr = curr.next;
    }

    return chosenValue;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */