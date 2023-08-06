/**
 * Checks if the input string forms an ascending sequence
 * @param {string} sequence 
 * @returns {number}
 */
function findMissingNumber(sequence){
  
  if(/[^ 0-9]/.test(sequence)) return 1;
  sequence = sequence.match(/\d+/g)||[].sort((a,b) => a - b);
  for(let i = 0; i < sequence.length; i++){
    if(i + 1 != sequence[i]) return i + 1;
    
  }
  return 0;
}