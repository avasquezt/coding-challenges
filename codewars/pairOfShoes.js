function pairOfShoes(shoes) {
	let sizes = new Set(shoes.map(shoe => shoe[1]));
  return [...sizes].every(size => shoes.filter(shoe => shoe[0] == 0 && shoe[1] == size).length === shoes.filter(shoe => shoe[0] == 1 && shoe[1] == size).length);
}