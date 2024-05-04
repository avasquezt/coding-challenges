/**
 * Returns the elements of an array that meet the condition specified in a callback function
 * @param {Function} func 
 * @returns {Array}
 */
Array.prototype.filter = function (func) {
    let ans = [];
    for(const e of this){
      if(func(e)) ans.push(e);
    }
    return ans;
}
  