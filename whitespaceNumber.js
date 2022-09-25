function whitespaceNumber(n) {
    return n.toString(2).replace(/^./, char => (char != 0 && char != '-') ? '+' + char : char).replace(/./g, char => ({'-':'\t', '+':' ', '0':' ', '1':'\t'})[char]) + '\n';
  }