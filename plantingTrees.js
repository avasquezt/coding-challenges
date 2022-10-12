function sc(width,length,gaps){
    let n = (2 * width + 2 * length - 4) / (gaps + 1);  
    return Number.isInteger(n) ? n : 0;
  }