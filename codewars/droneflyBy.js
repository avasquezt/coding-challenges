function flyBy(lamps, drone){
    return 'o'.repeat(Math.min(lamps.length, drone.length)).padEnd(lamps.length, 'x');
  }