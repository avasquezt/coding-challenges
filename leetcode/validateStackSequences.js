/**
 * Validates if the pushed and popped input arrays could have been the result of a sequence of push and pop operations on an initially empty stack
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    for(let i = 0, lastPopped = 0, lastPushed = 0; i < pushed.length * 2; i++){
        if(stack.at(-1) == popped[lastPopped]){
            stack.pop();
            lastPopped++;
        }else if(lastPushed < pushed.length){
            stack.push(pushed[lastPushed++]);
        }else{
            return false;
        }
    }
    return true;
};

var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let j = 0;

    for (const x of pushed){
        stack.push(x);
        while(stack.length && j < pushed.length && stack[stack.length -1] === popped[j]){
            stack.pop();
            j++;
        }
    }
    return j === pushed.length;
};