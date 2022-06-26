function uncensor(infected, discovered) {
  discovered = discovered.split('');
  return infected.replace(/\*/g, char => discovered.shift());
}