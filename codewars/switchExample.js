/**
 * Returns a string based on the input value
 * @param {number} oscar 
 * @returns {string}
 */

function leo(oscar){
    switch (true){
        case oscar > 88:
          return 'Leo got one already!';
        case oscar == 88:
          return 'Leo finally won the oscar! Leo is happy';
        case oscar == 86:
          return 'Not even for Wolf of wallstreet?!';
        default:
          return 'When will you give Leo an Oscar?';
    }
}