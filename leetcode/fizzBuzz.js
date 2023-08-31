/**
 * Calculates the ouptut of the FizzBuzz game for the iput number
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        let curr = '';
        if(i % 3 == 0) curr += 'Fizz';
        if(i % 5 == 0) curr += 'Buzz';
        answer.push(curr || String(i));
    }
    return answer;
};