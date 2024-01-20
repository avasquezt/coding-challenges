/**
 * Calculates the mean of the rainfall records for the requested town
 * @param {string} town 
 * @param {string} strng 
 * @returns {number}
 */
function mean(town, strng) {
    let e = getValues(town, strng);
    return  e.length ? getMean(e) : -1;
}
/**
 * Calculates the variance of the rainfall records for the requested town
 * @param {string} town 
 * @param {string} strng 
 * @returns {number}
 */
function variance(town, strng) {
    let e = getValues(town, strng);
    let m = getMean(e);
    return e.length ? getVariance(e, m) : -1;
}

function getMean(arr){
    return arr.reduce((r, n) => r + n, 0) / arr.length; 
}

function getVariance(arr, m){
    return arr.reduce((r, n) => r + (n - m) ** 2, 0) / arr.length;
}

function getValues(town, str){
    const vals = str.split('\n').filter(e => new RegExp('^' + town + ':.+').test(e))[0]
    return vals ? vals.split(',').map(e => +e.match(/\d+\.\d+$/)[0]) : []; 
}