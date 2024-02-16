/**
 * Calculates the time it takes a ball thrown with the input speed to reach maximum height
 * @param {number} v0 
 * @returns {number}
 */
function maxBall(v0) {
    return  Math.round(0.02832 * v0 * 10);
}

function maxBall(v0) {
    const g = 9.81, mpsToKph = 3.6, secondsToTenths = 10;
    return Math.round(secondsToTenths * v0 / mpsToKph / g);
}