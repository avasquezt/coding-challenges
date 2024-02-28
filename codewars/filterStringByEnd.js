/**
 * Filters the logins in the input array ending with underscore
 * @param {string[][]} logins 
 * @returns {string[][]}
 */
function searchNames( logins ){
    return logins.filter(([login, email]) => login.endsWith('_'));
}