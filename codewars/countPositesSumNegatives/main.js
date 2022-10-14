function countPositivesSumNegatives(input) {
  return  (!input || !input.length ) ? [] : [input.reduce((acc, i) => (i > 0) ? ++acc : acc, 0), 
                       input.reduce((acc, i) => (i < 0) ? acc + i : acc, 0)];
}