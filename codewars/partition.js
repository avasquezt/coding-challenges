function partition(n){
    let sequence = [1, 1];
    for(let i = 2; i <= n;  i++){
        let acc = 0;
        let d = 0; j = 1;
        while(sequence.length - j >= 0){
                acc +=  sequence[sequence.length - j] * (-1) ** d;
                j +=  d + 1;
                if(sequence.length - j >= 0){
                    acc +=  sequence[sequence.length - j] * (-1) ** d;
                }
            d++;
            j += d * 2 + 1;
        }
        sequence.push(acc);
    }
    return sequence[n];
}

console.log(partition(10));