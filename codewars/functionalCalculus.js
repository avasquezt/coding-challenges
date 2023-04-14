/**
 * Calculates the of the functions expression
 */

// let zero = op => op ? Math.floor(eval(0 + op)) : 0;
// let one = op => op ? Math.floor(eval(1 + op)) : 1;
// let two = op => op ? Math.floor(eval(2 + op)) : 2;
// let three = op => op ? Math.floor(eval(3 + op)) : 3;
// let four = op => op ? Math.floor(eval(4 + op)) : 4;
// let five = op => op ? Math.floor(eval(5 + op)) : 5;
// let six = op => op ? Math.floor(eval(6 + op)) : 6;
// let seven = op => op ? Math.floor(eval(7 + op)) : 7;
// let eight = op => op ? Math.floor(eval(8 + op)) : 8;
// let nine = op => op ? Math.floor(eval(9 + op)) : 9;

// let plus = n => '+' + n; 
// let minus = n => '-' + n; 
// let times = n => '*' + n; 
// let dividedBy = n => '/' + n;

let zero = op => op ? op(0) : 0;
let one = op => op ? op(1) : 1;
let two = op => op ? op(2) : 2;
let three = op => op ? op(3) : 3;
let four = op => op ? op(4) : 4;
let five = op => op ? op(5) : 5;
let six = op => op ? op(6) : 6;
let seven = op => op ? op(7) : 7;
let eight = op => op ? op(8) : 8;
let nine = op => op ? op(9) : 9;

let plus = n => a => a + n; 
let minus = n => a => a - n; 
let times = n => a => a * n;  
let dividedBy = n => a => Math.floor(a / n) ;

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
console.log(nine(dividedBy(two()))); // must return 4