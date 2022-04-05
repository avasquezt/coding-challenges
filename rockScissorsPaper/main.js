const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper' ||
     p1 === 'rock' && p2 === 'scissors' ||
     p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!';
  }else if(p1 === p2){
    return 'Draw!';
  }else{
    return 'Player 2 won!';
  }
};

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };