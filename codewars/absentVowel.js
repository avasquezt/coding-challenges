function absentVowel(x){
    return 'aeiou'.indexOf(['a', 'e', 'i', 'o', 'u'].filter(e => !x.includes(e))[0]);
  }