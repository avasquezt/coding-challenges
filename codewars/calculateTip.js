/**
 * Calculates the tip amount based on the input bill value and service
 * @param {number} amount 
 * @param {string} rating 
 * @returns {number | string}
 */
function calculateTip(amount, rating) {
  let tip;
  switch(rating.toLowerCase()){
      case 'excellent':
        tip = 0.2;
        break;
      case 'great':
        tip = 0.15;
        break;
      case 'good':
        tip = 0.1;
        break;
      case 'poor':
        tip = 0.05;
        break;
      case 'terrible':
        tip = 0;
        break;
      default:
        return 'Rating not recognised';
  }
  return Math.ceil(amount * tip);

}