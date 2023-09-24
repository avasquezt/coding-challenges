/**
 * Hash Set implementation
 */
var MyHashSet = function() {
    this.data = Array.from(Array(31251)).fill(0);
    
    this.getIndex = k => Math.floor(k / 32);
    this.getMask = k => (1<<(k % 32));
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.data[this.getIndex(key)] |= this.getMask(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.data[this.getIndex(key)] &= ~(this.getMask(key));
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return (this.data[this.getIndex(key)] & this.getMask(key)) != 0
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */