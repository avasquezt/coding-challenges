function logicalCalc(array, op){
  let AND = (a, b) => a && b;
  let OR = (a, b) => a || b;
  let XOR = (a, b) => a ? !b : b;
  return array.reduce((acc, n) => eval(op+"(acc,n)"));
}

var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}


function logicalCalc(array, op){
  return array.reduce(ops[op]);
}