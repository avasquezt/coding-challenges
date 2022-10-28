function getSum(n) {
    let sum = 0n;
    for (let i = 0n; i <= n; i++){
        sum += ((n + 2n * i + 1n) * (n + 2n * i + 2n)) / 2n - ((3n * i) * (3n * i + 1n)) / 2n;
    }
    // console.log(n, sum)
    return sum;
}

function getSum(n) {
    let sum = 1n;
    for (let i = 1n; i <= n; i++){
        sum += (i + 1n) * (i * 2n + 1n);
    }
    // console.log(n, sum)
    return sum;
}



// for(let i = 0n; i <= 10n; i++){
//     console.log(i, getSum(i), sum(2n*i + i + 1n), sum(2n*i + i + 1n + 1n))
// }

function getSum(n, i = n + 1n) {
    return ((2n * i) * (i + 1n) * (2n * i + 1n)) / 6n - (i * (i + 1n)) / 2n;
}

function getSum(n) {
    return ( ++n )* (n + 1n) * (4n * n - 1n)/6n;
  }

function sum(n){
    return n * (n + 1n) / 2n;
}

for (let i = 0, acum = 1; i < 100; i++){
    console.log(i, acum);
    acum += 3;
}