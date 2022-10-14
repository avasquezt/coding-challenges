function ghostBusters(building) {
  return building.includes(' ') ? building.split(' ').join('') : "You just wanted my autograph didn't you?";
}