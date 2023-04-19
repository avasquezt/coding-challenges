/**
 * Returns the quadrant containing the input point
 * @param {number} x 
 * @param {number} y 
 * @returns {number}
 */
function quadrant(x, y) {
    switch(true){
        case x > 0 && y > 0:
          return 1;
        case x < 0 && y > 0:
          return 2;
        case x < 0 && y < 0:
          return 3;
        case x > 0 && y < 0:
          return 4;
    }
}