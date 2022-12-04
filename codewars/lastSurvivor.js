function lastSurvivor(letters, coords) {
    let result = letters;
    coords.forEach(n => (result = result.slice(0, n) + result.slice(n + 1)));
    return result;
  }