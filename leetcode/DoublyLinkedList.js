/**
 * Doubly Linked List implementation
 */
var MyLinkedList = function() {
    this.head = null;
};

var Node = function(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0) return -1;
    let node = this.head;
    while(index && node){
        node = node.next;
        index--;
    }
    return node ? node.val : -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    node.next = this.head;
    if(this.head) this.head.prev = node;
    this.head = node;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val);
    let tail = this.head;
    while(tail && tail.next){
        tail = tail.next;
    }
    if(tail){
        tail.next = node;
        node.prev = tail;
    }else{
        this.head = node;
    }
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0) return;
    if(index == 0){
        this.addAtHead(val);
        return;
    }
    let node = new Node(val);
    let curr = this.head;
    let i = 1;
    while(i < index && curr){
        curr = curr.next;
        i++;
    }
    if(curr){
        [curr.next, node.next] = [node, curr.next];
        node.prev = curr;
        if(node.next) node.next.prev = node;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0) return;
    if(index == 0){
        this.head = this.head.next;
        if(this.head) this.head.prev = null;
        return;
    }
    let curr = this.head;
    let i = 1;
    while(i < index && curr){
        curr = curr.next;
        i++;
    }
    if(curr && curr.next){
        curr.next = curr.next.next;
        if(curr.next) curr.next.prev = curr;
    } 
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */