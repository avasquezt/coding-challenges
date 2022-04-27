function uefaEuro2016(teams, scores){
  if (scores[0] > scores[1]) return `At match ${teams.join(' - ')}, ${teams[0]} won!`;
  if (scores[0] < scores[1]) return `At match ${teams.join(' - ')}, ${teams[1]} won!`;
  return `At match ${teams.join(' - ')}, teams played draw.`
}