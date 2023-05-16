/**
 * Calculates the original price of the item with the input discounted price and percentage
 * @param {number} discountedPrice 
 * @param {number} salePercentage 
 * @returns {number}
 */
function discoverOriginalPrice(discountedPrice, salePercentage){
    return +(discountedPrice / (1 - salePercentage/100)).toFixed(2);
}