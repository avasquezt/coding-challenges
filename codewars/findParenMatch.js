/**
 * Finds matching parenthesis' position of the element at the given index
 * @param {number} n 
 * @returns {number}
 */

String.prototype.findParenMatch = function(n){
    const left = [];
    const indexes = new Map();
    for(let i = 0; i < this.length; i++){
        if(this[i] == '('){
            left.push(i);
        }else if(this[i] == ')'){
            if(left.length){
                const j = left.pop();
                indexes.set(i, j);
                indexes.set(j, i);
            }
        }
    }
    return indexes.has(n) ? indexes.get(n) : -1;
}
