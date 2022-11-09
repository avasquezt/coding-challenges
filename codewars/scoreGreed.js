function score( dice ) {
    let s = 0;
    let occurrences = {};
    for (let i = 0; i < dice.length; i++){
      occurrences[dice[i]] = 1 + (occurrences[dice[i]] || 0);
    }
    for (let e in occurrences){
      switch (e){
          case '1':
            s += Math.floor(occurrences[e] / 3) * 1000 + (occurrences[e] % 3 * 100);
            break;
          case '6':
            s += Math.floor(occurrences[e] / 3) * 600;
            break;
          case '5':
            s += Math.floor(occurrences[e] / 3) * 500 + (occurrences[e] % 3 * 50);
            break;
          case '4':
            s += Math.floor(occurrences[e] / 3) * 400;
            break;
          case '3':
            s += Math.floor(occurrences[e] / 3) * 300;
            break;
          case '2':
            s += Math.floor(occurrences[e] / 3) * 200;
            break;
      }
    }
    return s;
  }