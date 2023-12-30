/**
 * Calculates the sum of the values that have a key with a prefix equal to a given string
 */
var MapSum = function() {
    this.root = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let cur = this.root;
    for(const char of key){
        if(!(char in cur)){
            cur[char] = {};
            cur[char].val = 0;
        }
        cur = cur[char];
    }
    cur.val = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let cur = this.root;
    for(const char of prefix){
        if(!(char in cur)){
            return 0;
        }
        cur = cur[char];
    }
    return add(cur);
    
    function add(node){
        if(!node) return 0;
        return node.val + Object.entries(node).reduce((n, [k, node]) => n + ((k != 'val') ? add(node) : 0), 0);
    }
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */