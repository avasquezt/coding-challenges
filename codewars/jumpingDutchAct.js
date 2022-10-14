// function sc(floor){
//   return floor > 1 ? `${'Aa~ '.repeat(floor - 1)}Pa!${floor < 7 ? ' Aa!' :''}` : '';
// }

// function sc(floor){
//   return floor > 1 ? 'Aa~ '.repeat(floor - 1) + 'Pa!' + (floor < 7 ? ' Aa!' :'') : '';
// }

function sc(floor){
    if (floor < 2) return '';
    return 'Aa~ '.repeat(floor - 1) + 'Pa!' + (floor < 7 ? ' Aa!' :'');
  }