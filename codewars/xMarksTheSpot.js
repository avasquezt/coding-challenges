const xMarksTheSpot = (input) => {
    let row, column;
    return input.filter((x, i) => [x.includes('x'), x.includes('x') && ([row, column] = [i, x.indexOf('x')])][0]).length == 1 ? [row, column] : [];
  }