/**
 * Calculates who wins the war in the input fight string
 * @param {string} fight 
 * @returns {string}
 */
function alphabetWar(fight){
  const power = {'w':4, 'p':3, 'b':2, 's':1, 'z':-1, 'd':-2, 'q':-3, 'm':-4};
  fight = fight.replace(/.?\*+.?/g, '_');
  switch (Math.sign(fight.split('').reduce((acc, n) => acc + (power[n] || 0), 0))){
      case 1:
        return 'Left side wins!';
      case -1:
        return 'Right side wins!';
      default:
        return 'Let\'s fight again!';
  }  
}