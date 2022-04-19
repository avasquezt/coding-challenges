function barista(coffees){
  return coffees.length ? coffees.sort((a,b) => a - b).reduce((acc, coffee, i) =>  acc + (coffee +  2) * (coffees.length - i)  , (-2 * coffees.length))  : 0;
}

console.log(barista([4,3,2]));
console.log(barista([2,10,5,3,9]));