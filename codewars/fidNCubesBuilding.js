function findNb(m) {
    let n = Math.sqrt(2 * Math.sqrt(m) + 1 / 4) - 1 / 2;
    return Number.isInteger(n) ? n : -1;
}
