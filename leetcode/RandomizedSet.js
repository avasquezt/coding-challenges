
 var RandomizedSet = function() {
    this.values = new Map();
    this.idx = [];
 };
 
 /** 
 * @param {number} val
 * @return {boolean}
 */
 RandomizedSet.prototype.insert = function(val) {
    if(this.values.has(val)){
        return false;   
    }
    this.idx.push(val);
    this.values.set(val, this.idx.length - 1);
    return true;
 };
 
 /** 
 * @param {number} val
 * @return {boolean}
 */
 RandomizedSet.prototype.remove = function(val) {
    if(!this.values.has(val)){
        return false;
    }
    this.idx[this.values.get(val)] = this.idx[this.idx.length - 1];
    this.values.set(this.idx[this.idx.length - 1], this.values.get(val));
    this.idx.pop();
    this.values.delete(val);
    return true;
 };
 
 /**
 * @return {number}
 */
 RandomizedSet.prototype.getRandom = function() {
    const i = Math.floor(this.idx.length * (Math.random()));
    return this.idx[i];
 };
 
 /** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
 
 var obj = new RandomizedSet();
 console.log(obj.insert(0));
 console.log(obj.insert(1));
 console.log(obj);
 console.log(obj.remove(0));
 console.log(obj);
 console.log(obj.insert(2));
 console.log(obj);
 console.log(obj.remove(1));
 console.log(obj.getRandom());
 console.log(obj);