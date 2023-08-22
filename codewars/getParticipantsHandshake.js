/**
 * Calculates the minimum number of people needed to perform the required number of handshakes 
 * @param {number} handshakes 
 * @returns {number}
 */
function getParticipants(handshakes){
    if(!handshakes) return 0;
  
    let answer = 0;
    let sum = 0
  
    while(handshakes > sum) {
      sum = answer * (answer + 1) / 2;
  
      answer++;
    }
  
    return answer;
}