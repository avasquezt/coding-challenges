/**
 * Removes the needless directions (contiguous elements with opposite direction) from the input array
 * @param {string[]} arr 
 * @returns {string[]}
 */
function dirReduc(arr){
    let opposite = {north : 'south', south: 'north', west: 'east', east: 'west'};
    let ans = [];
    for(const dir of arr){
      if(ans.at(-1) && ans.at(-1).toLowerCase() == opposite[dir.toLowerCase()]){
        ans.pop();
      }else{
        ans.push(dir);
      }
    }
    return ans;
}