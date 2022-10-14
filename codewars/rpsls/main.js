function rpsls(pl1,pl2){
  let rules = {
    scissors: ['paper','lizard'],
    paper: ['rock','spock'],
    rock: ['lizard','scissors'],
    lizard: ['spock','paper'],
    spock: ['scissors','rock'],
  };
  return rules[pl1].includes(pl2) ? 'Player 1 Won!' : rules[pl2].includes(pl1) ? 'Player 2 Won!' : 'Draw!';
}