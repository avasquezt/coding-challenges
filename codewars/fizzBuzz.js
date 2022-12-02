function fizzBuzz(n){
    for(let i = 1; i <= n; i++){
        let ans = '';
        if(i % 2 == 0) ans += 'fizz';
        if(i % 3 == 0) ans += 'buzz';
        console.log( ans ? ans : i);
    }
}

console.log(fizzBuzz(15));