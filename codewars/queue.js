var Queue = function() {
    this.arr = [];
  };
  
Queue.prototype.enqueue = function(item) {
    // add item to the queue
    this.arr.push(item);
};

Queue.prototype.dequeue = function() {
    // remove item from the front of the queue and return its value
    return this.arr.shift();
};

Queue.prototype.size = function() {
    // return number of items in queue so far
    return this.arr.length;
};