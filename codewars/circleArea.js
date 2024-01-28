/**
 * Calculates the area of a circle with the given radius
 * @param {number} radius 
 * @returns {number}
 */
function circleArea(radius) {
    if(radius <= 0){
      throw new Error();
    }
    return Math.PI * radius ** 2;
}