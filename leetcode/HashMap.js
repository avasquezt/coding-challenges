class ListNode {
    constructor(key, val, next) {
        this.key = key
        this.val = val
        this.next = next
    }
}

/**
 * Hash Map implementation
 */
var MyHashMap = function() {
    this.size = 19997
    this.mult = 12582917
    this.data = new Array(this.size)
    
    this.hash = function(key) {
        return key * this.mult % this.size;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.remove(key)
    let h = this.hash(key)
    let node = new ListNode(key, value, this.data[h])
    this.data[h] = node
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let h = this.hash(key), node = this.data[h]
    for (; node; node = node.next)
        if (node.key === key) return node.val
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let h = this.hash(key), node = this.data[h]
        if (!node) return
        if (node.key === key) this.data[h] = node.next
        else for (; node.next; node = node.next)
            if (node.next.key === key) {
                node.next = node.next.next
                return
            }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */