function points(dice) {
  
  //Sort the array 
  dice = dice.split('').sort().map(Number);
  
  //Check of all the elements are equal
  if (new Set(dice).size === 1) return 50;
  
  //Check if only 1 element is different
  if (new Set(dice.slice(0, -1)).size === 1 || new Set(dice.slice(1)).size === 1) return 40;
  
  //Check if there are two repeated values
  if (new Set(dice).size === 2) return 30;  
  
  //Remove duplicates
  dice = [...(new Set(dice))];
  
  //Check if there are not elements repeated and they are in sequential order
  if (dice.length == 5 && dice.slice(2).every((n,i) => n - dice[i+1] === 1) && "12".includes(dice[0])) return 20;
  return 0;
}