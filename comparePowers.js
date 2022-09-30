function comparePowers(n1,n2){
    return Math.sign(n2[1] * Math.log(n2[0]) - n1[1] * Math.log(n1[0]));
  }