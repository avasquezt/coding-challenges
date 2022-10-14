function time(distance,boatSpeed,stream){
  return +(distance / (boatSpeed + stream.split(' ')[1] * (stream.split(' ')[0] === 'Downstream' ? 1 : -1) )).toFixed(2);
}