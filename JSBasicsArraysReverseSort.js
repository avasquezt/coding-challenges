function sortIt(arr){
    return arr.slice().sort((a, b) => (arr.filter(n => n == a).length - arr.filter(n => n == b).length) || (b - a))
  }