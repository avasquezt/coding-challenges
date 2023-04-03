/**
 * Calculates the minimum number of boats needed to carry every person in the input array with the weight limit given
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b);
    let start = 0;
    let end = people.length - 1;
    let count = 0;
    while(start <= end){
      if(people[start] + people[end] <= limit){
        start++;
      }
      end--;
      count++;
    }
    return count;
  };