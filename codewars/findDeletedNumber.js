function findDeletedNumber(arr, mixArr, n = arr.length) {
    return n * (n + 1) / 2 - mixArr.reduce((acc, e) => acc + e, 0);
}