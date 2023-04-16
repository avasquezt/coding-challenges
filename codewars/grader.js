/**
 * Calculates a grade based in the input score
 * @param {number} score 
 * @returns {string}
 */
function grader(score) {
    switch(true){
        case score < 0.6 || score > 1:
          return 'F';
        case score >= 0.9:
          return 'A';
        case score >= 0.8:
          return 'B';
        case score >= 0.7:
          return 'C';
        case score >= 0.6:
          return 'D';
    }
}