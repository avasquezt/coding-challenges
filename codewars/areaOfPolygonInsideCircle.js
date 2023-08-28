/**
 * Calculates the area of a regular polygon with the requested number of sides circumscribed inside a circle with the input radius
 * @param {number} circleRadius 
 * @param {number} numberOfSides 
 * @returns {number}
 */
function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    return (((numberOfSides * circleRadius ** 2 / 2) * Math.sin(2 * Math.PI/ numberOfSides) * 1000 + 0.5) >>> 0 )/ 1000;
}