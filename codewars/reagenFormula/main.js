function isValid(formula){
  if(formula.includes(1) && formula.includes(2)) return false;
  if(formula.includes(3) && formula.includes(4)) return false;
  if(!formula.includes(5) && formula.includes(6) || formula.includes(5) && !formula.includes(6)) return false;
  if(!formula.includes(7) && !formula.includes(8)) return false;
  return true;
}


// isValid = a => !(a.includes(1) && a.includes(2)) &&
// !(a.includes(3) && a.includes(4)) &&
// a.includes(5) === a.includes(6) &&
// (a.includes(7) || a.includes(8));