/**
 * Returns the number of people who sit strictly behind and in the column or to the left of the input position in a theater
 * @param {number} nCols 
 * @param {number} nRows 
 * @param {number} col 
 * @param {number} row 
 * @returns {number}
 */
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
}