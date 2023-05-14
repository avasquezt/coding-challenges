/**
 * Verifies if the input coupon code is valid and not expired
 * @param {string} enteredCode 
 * @param {string} correctCode 
 * @param {string} currentDate 
 * @param {string} expirationDate 
 * @returns {boolean}
 */
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}