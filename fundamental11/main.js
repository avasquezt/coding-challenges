function points(games) {
  return games.reduce((acum, game) => {
            if(Number(game.split(":")[0]) === Number(game.split(":")[1])){
              return  acum + 1;
            }else if(Number(game.split(":")[0]) > Number(game.split(":")[1])){
              return acum + 3;
            }else{
              return acum + 0;
            }
          } ,0)
}


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))