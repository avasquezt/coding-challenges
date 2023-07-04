/**
 * Calculates the total fuel price 
 * @param {number} litres 
 * @param {number} pricePerLitre 
 * @returns {number}
 */
function fuelPrice(litres, pricePerLitre) {
  let discount;
  switch(true){
      case litres < 2:
        discount = 0;
        break;
      case litres < 4:
        discount = 0.05;
        break;
      case litres < 6:
        discount = 0.1;
        break;
      case litres < 8:
        discount = 0.15;
        break;
      case litres < 10:
        discount = 0.2;
        break;
      default:
        discount = 0.25;
        break;
  }
  return +(litres * (pricePerLitre - discount)).toFixed(2);
}