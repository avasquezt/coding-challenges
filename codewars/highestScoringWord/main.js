function high(x){
  return x.split(' ').sort( (a,b) => b.split('').reduce((acc, n) => acc + n.charCodeAt(0) - 96, 0) - a.split('').reduce((acc, n) => acc + n.charCodeAt(0) - 96, 0))[0]
}