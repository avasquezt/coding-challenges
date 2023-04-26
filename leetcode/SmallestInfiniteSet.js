/**
 * Class that contains all positive integers and returns the next smallest one
 */
var SmallestInfiniteSet = function() {
    this.n = 1;
    this.inserted = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if(this.inserted.length){
        return this.inserted.pop();
    }
    this.n++;
    return this.n - 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(num < this.n){
        if(this.inserted.includes(num)) return;
        let index = this.inserted.length;
        while(index > 0 && this.inserted[index - 1] < num){
            index--;
        }
        this.inserted.splice(index, 0, num);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */