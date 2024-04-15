function fizzBuzz(n){
    for(let i = 1; i <= n; i++){
        let ans = '';
        if(i % 2 == 0) ans += 'fizz';
        if(i % 3 == 0) ans += 'buzz';
        console.log( ans ? ans : i);
    }
}

console.log(fizzBuzz(15));

/**
 * Returns the fizzBuzz from the numbers from 1 to N
 * @param {number} n 
 * @returns {any[]}
 */
function fizzbuzz(n){
    const ans = [];
    for(let i = 1; i <= n; i++){
      let text = '';
      if(i % 3 == 0) text += 'Fizz';
      if(i % 5 == 0) text += 'Buzz';
      ans.push(text || i);
    }
    return ans;
}