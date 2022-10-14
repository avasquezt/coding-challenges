function grabDoll(dolls){
    var bag=[];
    for(let i = 0; i < dolls.length; i++){
      if (bag.length > 2) break;
      if (["Hello Kitty","Barbie doll"].includes(dolls[i])){
        bag.push(dolls[i]);
      }else{ 
        continue
      };
    }
    return bag;
  }