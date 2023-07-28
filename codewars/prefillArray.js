/**
 * Returns an array with requested size and with the all elements having the same input value
 * @param {string | number} n 
 * @param {any} v 
 * @returns {any[]}
 */
function prefill(n, v = undefined) {
  if(!/^\d+$/.test(n)) throw new TypeError(`${n} is invalid`);
  return Array(parseInt(n)).fill(v);
}