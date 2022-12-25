function removeParentheses(s){
    while(/\([\w ]*\)/g.test(s)){
      s = s.replace(/\([\w ]*\)/g, '');
    }
    return s;
  }