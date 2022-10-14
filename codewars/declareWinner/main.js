function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacksfighter1 =  Math.ceil(fighter2.health / fighter1.damagePerAttack);
  let attacksfighter2 =  Math.ceil(fighter1.health / fighter2.damagePerAttack);
  if (attacksfighter1 === attacksfighter2) return (fighter1.toString() === firstAttacker ? fighter1 : fighter2).toString();
  else return (attacksfighter2 < attacksfighter1 ? fighter2 : fighter1).toString();
}