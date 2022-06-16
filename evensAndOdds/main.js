function evensAndOdds(num){
	return num % 2 == 0 ? num.toString(2) : num.toString(16).toLowerCase();
}

// function evensAndOdds(num){
//   return num.toString([2, 16][num % 2]);
// }