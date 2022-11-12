
var MedianFinder = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let idx = 0;
    while (this.arr.length && this.arr[idx] < num){
        idx++;
    }
   this.arr.splice(idx, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return (this.arr[Math.floor((this.arr.length - 1) / 2)] + this.arr[Math.floor(this.arr.length / 2)]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 let a = new MedianFinder();

 console.log(a.arr);

 a.addNum(1);
 a.addNum(2);

 console.log(a.arr);
 console.log(a.findMedian());

 a.addNum(3);
 console.log(a.arr);
 console.log(a.findMedian());

 a.addNum(4);
 console.log(a.arr);
 console.log(a.findMedian());

 
 a.addNum(0);
 console.log(a.arr);
 console.log(a.findMedian());