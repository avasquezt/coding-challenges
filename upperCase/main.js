function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    return arrayOfSheep.reduce((acum, sheep) => (sheep === true) ? acum + 1 : acum + 0)
  }

