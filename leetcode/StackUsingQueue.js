// Stack implementation using queues
var MyStack = function() {
    this.queue = new Queue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let count = this.queue.size() - 1;
    while(count > 0){
        this.queue.push(this.queue.pop());
        count--;
    }
    return this.queue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let count = this.queue.size();
    let result;
    while(count > 0){
        if(count == 1) result = this.queue.front();
        this.queue.push(this.queue.pop());
        count--;
    }
    return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */