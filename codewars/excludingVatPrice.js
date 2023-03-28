/**
 * Calculates the original product price, excluding the VAT, from the input value
 * @param {number} price 
 * @returns {number}
 */
function excludingVatPrice(price){
    return price != null ? Number((price / 1.15).toFixed(2)) : -1;
}