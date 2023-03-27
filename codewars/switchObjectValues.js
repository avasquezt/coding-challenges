/**
 * Returns a string depending on the sum of the values on the input object
 * @param {object} staff 
 * @returns {string}
 */
function boredom(staff){
    const deps = {accounts: 1,finance: 2,canteen: 10,regulation: 3,trading: 6,change: 6,IS: 8,retail: 5,cleaning: 4,'pissing about': 25};
    const n = Object.values(staff).reduce((acc, e) => acc += deps[e], 0);
    switch(true){
        case n <= 80:
          return 'kill me now';
        case n < 100:
          return 'i can handle this'
        default:
          return 'party time!!'
    }
}