function diag2Sym(strng, arr = strng.split('\n')) {
    return arr[0].split('').map((_, index) => arr.map(row => row[arr[0].length - 1 - index]).reverse().join('')).join('\n');
}
function rot90Counter(strng, arr = strng.split('\n')) {
    return arr[0].split('').map((_, index) => arr.map(row => row[arr[0].length - 1 - index]).join('')).join('\n');
}
function selfieDiag2Counterclock(strng, arr = strng.split('\n')) {
    return arr[0].split('').map((str, index) => arr[index] + '|' + arr.map(row => row[arr[0].length - 1 - index]).reverse().join('') + '|' + arr.map(row => row[arr[0].length - 1 - index]).join('')).join('\n');
}
function oper(fct, s) {
    return fct(s);
}