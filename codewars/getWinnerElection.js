function getWinner(listOfBallots) {
    let votes = {};
    let max = [{total:0},{total:0}];
    for (let ballot of listOfBallots){
      votes[ballot] = 1 + (votes[ballot] || 0);
      if(votes[ballot] >= max[0]["total"]){
        max.unshift({name:ballot, total:votes[ballot]});
        max.pop();
      }
    }
    return max[0]["total"] == max[1]["total"] || max[0]["total"] <= listOfBallots.length / 2 ? null : max[0]["name"];
  }