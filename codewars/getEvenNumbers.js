/**
 * Filters out odd numbers from the array
 * @param {number[]} numbersArray 
 * @returns {number[]}
 */

function getEvenNumbers(numbersArray){
    return numbersArray.filter(n => n % 2 == 0);
  }