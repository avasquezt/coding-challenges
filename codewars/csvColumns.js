/**
 * Returns the requested columns from the input csv string
 * @param {string} csv 
 * @param {number[]} indices 
 * @returns 
 */
function csvColumns(csv, indices) {
	return csv.split('\n')
        .map(e => e
                .split(',')
                .filter((_, index) => indices.includes(index))
                .join(','))
        .filter(e => e)
        .join('\n');
}