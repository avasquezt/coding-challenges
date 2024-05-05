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

/**
 * Calculates the area of the input circle
 * @param {Circle} circle 
 * @returns {number}
 */
function circleArea(circle){
  return Math.PI * circle.radius ** 2;
}