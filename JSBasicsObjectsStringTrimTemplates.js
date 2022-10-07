function fiveLine(s){
    return Array.from(Array(5), (_, i) => s.trim().repeat(i + 1)).join('\n')
  }