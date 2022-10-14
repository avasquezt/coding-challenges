function passOrFail(harmony) {
  harmony = harmony.map(chord => chord.split(' '));
  for(let i = 1; i < 4; i++){
    for(let j = 0; j < 4; j++){
      let note = harmony[i][j];
      let prevNote = harmony[i-1][j];
      if ((j !== harmony[i].indexOf(note)) && (note !== prevNote) && (prevNote === harmony[i-1][harmony[i].indexOf(note)])){
        return 'Fail';
      }
    }
  }
  return 'Pass';
}