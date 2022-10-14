function hexHash(code){
    return code.split('').map(char => char.charCodeAt(0).toString(16).replace(/[^0-9]/,'').split('').reduce((acc, n) => acc + Number(n), 0)).reduce((acc, n) => acc + Number(n), 0);
  }