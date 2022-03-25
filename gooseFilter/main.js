function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter(bird => !geese.some(element => element === bird))
};

// return birds.filter(b => !geese.includes(b));