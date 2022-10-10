function thinkingAndTesting(number,base){
    return number - (base ** Math.floor(Math.log(number)/Math.log(base)))
  }