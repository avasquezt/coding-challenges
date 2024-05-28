/**
 * Return the number of riders necessary to get the mail from one end to the other with the input distances
 * @param {number[]} stations 
 * @returns {number}
 */
function riders(stations) {
    return stations.reduce(([acum, n], e) => acum + e > 100 ? [e, n + 1] : [acum + e, n], [0, 1])[1];
}