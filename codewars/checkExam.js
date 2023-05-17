/**
 * Calculates the score for the given array of answers, based on the the input correct answers
 * @param {number[]} array1 
 * @param {number[]} array2 
 * @returns {number}
 */
function checkExam(array1, array2) {
    return Math.max(0, array2.reduce((acc, n, i) => acc += n ? (n == array1[i]) ? 4 : -1 : 0, 0));
}