function toAcronym(inp){
    return inp.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
  }