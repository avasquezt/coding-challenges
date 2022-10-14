function  calculateAge(a, b) {
  
  return a > b ? `You will be born in ${a-b} year${a-b===1? '': 's'}.` : a === b ? "You were born this very year!" : `You are ${b-a} year${b-a===1? '': 's'} old.`;
  
  }
  
  