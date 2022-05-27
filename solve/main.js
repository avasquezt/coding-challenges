function solve(arr){
  return arr.map(word => word.toLowerCase().split('').reduce((acc, char, index) => acc + ( (char.charCodeAt(0)) - 97 === index ? 1 : 0), 0));
};