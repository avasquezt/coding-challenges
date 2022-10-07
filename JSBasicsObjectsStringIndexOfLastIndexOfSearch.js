function firstToLast(str,c){
    return str.search(c) != -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
  }

// function firstToLast(str, c) {
// return str.lastIndexOf(c) - Math.max(0, str.indexOf(c));
// }