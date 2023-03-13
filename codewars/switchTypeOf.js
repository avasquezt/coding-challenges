/**
 * Returns a message, depending on the input data type
 * @param {any} x 
 * @returns {string}
 */
function cookie(x){
    let name = 'the dog!';
    switch (typeof x){
        case 'string':
          name ='Zach!';
          break;
        case 'number':
          name = 'Monica!';
    }
    return "Who ate the last cookie? It was " + name;
}