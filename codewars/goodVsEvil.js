/**
 * Determines who wins the battle, based on the input count of forces 
 * @param {string} good 
 * @param {string} evil 
 * @returns {string}
 */

function goodVsEvil(good, evil){
    const goodVal = [1,2,3,3,4,10];
    const evilVal = [1,2,2,2,3,5,10];
    const goodSum = good.split(' ').reduce((acc, n, i) => acc += n * goodVal[i], 0);
    const evilSum = evil.split(' ').reduce((acc, n, i) => acc += n * evilVal[i], 0);
    return goodSum > evilSum ? "Battle Result: Good triumphs over Evil" : goodSum == evilSum ? "Battle Result: No victor on this battle field" : "Battle Result: Evil eradicates all trace of Good";
}