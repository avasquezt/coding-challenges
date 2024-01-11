/**
 * Creates all permutations of the input string
 * @param {string} string 
 * @returns {string[]}
 */
function permutations(string) {
	return [...aux(string, new Set(), '', new Set())];
  
  function aux(string, ans, cur, seen){
    if(cur.length == string.length){
      ans.add(cur);
      return;
    }
    for(let j = 0; j < string.length; j++){
      if(!seen.has(j)){
        cur += string[j];
        seen.add(j);
        aux(string, ans, cur, seen);
        cur = cur.slice(0, -1);
        seen.delete(j);
      }
    }
    return ans;
  }
}