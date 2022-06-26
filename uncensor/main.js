function uncensor(infected, discovered) {
  discovered = discovered.split('');
  return infected.replace(/\*/g, char => discovered.shift());
}

// function uncensor(infected, discovered, it=0) {
//   return infected.replace(/\*/g, e=>discovered[it++])
// }

// uncensor=(p,q,w=[...q])=>p.replace(/\*/g,_=>w.shift())