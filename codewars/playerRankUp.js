/**
 * Checks if the player has enough points to rank up to class E4
 * @param {number} points 
 * @returns {boolean|string}
 */
function playerRankUp (points) {
  return points >= 100 && "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
}