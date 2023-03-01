/**
 * Returns an object with the status property
 * @param {boolean} isBusy 
 * @returns {object}
 */

function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {status: msg};
}