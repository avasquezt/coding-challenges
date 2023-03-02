/**
 * Replaces every pair of chars in the input string with its average
 * @param {*} s 
 * @returns 
 */

function testit(s){
    //return s?
    //return s.substr(0,1) ?
    //return s.substr(0,s.length/2) ?
    return s.replace(/\w{2}/gi, e => String.fromCharCode(Math.floor((e.charCodeAt(0) + e.charCodeAt(1))/2)));
}