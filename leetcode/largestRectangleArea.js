/**
 * Calculates the area of the largest rectangle in the input histogram
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
    let max = 0;
    const stack = [];
    
    for(let i = 0; i < n; i++){
        while(stack.length && heights[i] < heights[stack.at(-1)]){
            max = Math.max(max, heights[stack.pop()] * (i - (stack.length ? stack.at(-1) + 1 : 0)));
        }
        stack.push(i);
    }
    
    while(stack.length){
        max = Math.max(max, heights[stack.pop()] * (n - (stack.length ? stack.at(-1) + 1 : 0)));
    }
    
    return max;
};