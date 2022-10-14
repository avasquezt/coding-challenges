function howManySmaller(arr,n){
    arr = arr.map(n => +n.toFixed(2));
    return arr.reduce((acc, m) => m < n ? ++acc : acc, 0);
}