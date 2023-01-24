/**
 * Finds the index where the sum of the integers to the left is equal to the sum of the integers to the right
 * @param {number[]} arr 
 * @returns {number}
 */

function findEvenIndex(arr)
{
  const totalSum = arr.reduce((acc,n) => acc + n, 0);
  for(let i = 0, sum = 0; i < arr.length; i++){
    if(totalSum - (sum + arr[i]) == sum){
      return i;
    }  
    sum += arr[i];
  }
  return -1;
}