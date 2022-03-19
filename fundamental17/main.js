var number = function(busStops){
  return busStops.reduce((acum, stop) => acum += stop[0] - stop[1], 0)
}