function queueTime(customers, n) {
  const tills = Array(n).fill(0);
  customers.forEach(n =>{
    let till = tills.indexOf(Math.min(...tills));
    tills[till] += n;
  })
  return Math.max(...tills);
}