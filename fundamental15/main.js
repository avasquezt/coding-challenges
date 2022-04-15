var capitals = function (word) {
	// Write your code here
  let arr = [];
  for(let i = 0; i < word.length; i++){
      if (word[i] === word[i].toUpperCase()) arr.push(i);
  }
  return arr;
};

console.log(capitals('CodEWaRs').join());
