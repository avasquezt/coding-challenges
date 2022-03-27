function defineSuit(card) {
  switch (true) {
    case card.includes('♣'):
      return 'clubs';
    case card.includes('♦'):
      return 'diamonds';
    case card.includes('♥'):
      return 'hearts';
    case card.includes('♠'):
      return 'spades';
    default:
      return 'no';
  } 
}

console.log(defineSuit('5♣'))
console.log('5♣'.includes('♣'))
console.log('5♣'.includes('♠'))

function defineSuit(card) {
  return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
}