function wave(str){
    return str.split('').reduce((ans, char, i) => (char.match(/[a-z]/i) ? ans.push(str.substring(0,i) + char.toUpperCase() + str.substr(++i)) : ans, ans), []);
  }