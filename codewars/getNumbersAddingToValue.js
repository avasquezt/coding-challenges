/**
 * Returns a list of integers from the input array that add up to the target number
 * @param {number[]} numbers 
 * @param {number} target 
 * @returns {number[]}
 */
const getNumbers = (numbers, target) => {
    return aux(numbers, target, 0, 0, []);
    
    function aux(numbers, target, i, acc, ans){
      if(acc == target) return ans;
      if(acc > target) return [];
      for(let j = i; j < numbers.length; j++){
        ans.push(numbers[j]);
        const r = aux(numbers, target, j, acc + numbers[j], ans);
        if(r.length){
          return r;
        }
        ans.pop();
      }
      return [];
    }
};