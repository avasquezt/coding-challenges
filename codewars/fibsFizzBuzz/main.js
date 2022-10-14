var fibsFizzBuzz = function(n) {
  let acc = [0, 0];
  return Array.from(Array(n), (n, i) => {
    acc.push( acc[0] + (acc [1] || 1));
    acc.shift();
    let ans = '';
    if(acc[1] % 3 == 0) ans += 'Fizz';
    if(acc[1] % 5 == 0) ans += 'Buzz';
    return ans || acc[1];
  })
}