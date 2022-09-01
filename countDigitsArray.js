function List(){
    this.countSpecDigits=function(integersList, digitsList){
      return digitsList.reduce((acc, n) => [...acc, [n, integersList.join('').split(n).length - 1]],[]);
    }
  }