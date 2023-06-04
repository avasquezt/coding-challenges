/**
 * Calculates the slope of the line joining the two input points
 * @param {number[]} points 
 * @returns {string}
 */
function slope(points){
  let x = points[2] - points[0];
  let y = points[3] - points[1];
  return String(x ? Math.round(y / x) : undefined);
}