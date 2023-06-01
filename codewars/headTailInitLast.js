/**
 * Functions to manipulate arrays
 * @param {number[]} a 
 * @returns {number[]|number}
 */
const head = a => a.at(0);
const init = a => a.slice(0, -1);
const tail = a => a.slice(1);
const last = a => a.at(-1);