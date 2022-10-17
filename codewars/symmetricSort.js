function sc(array){
    let sorted = array.sort((a,b) => a - b);
    return sorted.filter((n, i) => i % 2 == 0).concat(sorted.filter((n, i) => i % 2).reverse());
}

function sc(a){
    return a.sort((a,b) => a - b).reduceRight((s,n,i) => i%2 ? [...s, n]: [n, ...s], []);
}

console.log(sc([9,8,7,6,5,4,3,2,1]));