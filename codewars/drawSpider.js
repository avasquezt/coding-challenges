/**
 * Returns the spider string drawing with the requested features
 * @param {number} legSize 
 * @param {number} bodySize 
 * @param {string} mouth 
 * @param {string} eye 
 * @returns {string}
 */
function drawSpider(legSize, bodySize, mouth, eye) {
    const leg = [['^', '^'], ['/\\', '/\\'], ['/╲', '╱\\'], ['╱╲', '╱╲']][legSize - 1];
    return leg[0] + '('.repeat(bodySize) + eye.repeat(2 ** bodySize / 2) + mouth + eye.repeat(2 ** bodySize / 2) + ')'.repeat(bodySize) + leg[1];
}