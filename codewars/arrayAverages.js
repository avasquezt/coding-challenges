/**
 * Calculates the averages of each integer-number and his follower in the input array
 * @param {number[]} numbers 
 * @returns {number[]}
 */
function averages(numbers) {
    return numbers && numbers.length > 1 ? numbers.slice(1).map((n, i) => (n + numbers[i]) / 2) : [];
}