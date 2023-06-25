/**
 * Filters and groups the streets in the input string using the requested zipcode
 * @param {string} r 
 * @param {string} zipcode 
 * @returns {string}
 */
function travel(r, zipcode) {
    let addr = r.split(',');
    addr = addr.filter(e => e.slice(-8) == zipcode).map(e => e.slice(0, -9));

    const streets = addr.map(e => e.replace(/^[\d ]+/g, ''));
    const houses = addr.map(e => e.replace(/(^[\d]+).*/g, '$1'));
    
    return zipcode + ':' + streets.join(',') + '/' + houses.join(',');
}