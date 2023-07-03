/**
 * Checks if the number of days passed between the two input days is greater than the requested cycle length
 * @param {Date} last 
 * @param {Date} today 
 * @param {number} cycleLength 
 * @returns {boolean}
 */
function periodIsLate(last, today, cycleLength) {
    const day = 
  //       ms to s
        1000 *
  //       s to m
        60 *
  //       m to h
        60 *
  //      h to days
        24;
    return (today - last) / day > cycleLength;
}