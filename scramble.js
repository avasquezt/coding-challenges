function scramble(str1, str2) {
    for(let i = 0, pos = {}; i < str2.length; i++){
      pos[str2[i]] = str1.indexOf(str2[i], pos[str2[i]] || 0) + 1;
      if (!pos[str2[i]]) return false;
    }
     return true;
   }