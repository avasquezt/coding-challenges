function solve(s){
    let upper = lower = 0;
    for(char of s){
      if(char == char.toLowerCase()){
        lower++;
      }else{
        upper++;
      }
    }
    if(upper > lower){
      return s.toUpperCase();
    }else{
      return s.toLowerCase();
    }
}