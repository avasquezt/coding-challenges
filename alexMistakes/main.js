function alexMistakes(numberOfKata, timeLimit){
  return Math.floor((Math.log(((timeLimit - numberOfKata * 6))/ 5 + 1)) / Math.log(2));
}