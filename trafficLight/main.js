function updateLight(current) {

  const trafficLight = {red:'green', green:'yellow', yellow:'red'};
  return trafficLight[current];

}


// const updateLight = current => ({
//   green: 'yellow',
//   yellow: 'red',
//   red: 'green',
// })[current]