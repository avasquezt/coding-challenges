function solve(s){
  return  [s.replace(/[^A-Z]/g,'').length, s.replace(/[^a-z]/g,'').length, s.replace(/[^0-9]/g,'').length, s.replace(/[a-zA-Z0-9]/g,'').length]
 }