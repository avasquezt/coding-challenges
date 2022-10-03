function orderWeight(strng) {
    return strng.trim('').split(/[ ]{1,}/).sort((a, b) => numberWeight(a) - numberWeight(b) || a.localeCompare(b)).join(' ');
}

function numberWeight(n){
  return String(n).split('').map(Number).reduce((acc, n) => acc + n, 0);
}