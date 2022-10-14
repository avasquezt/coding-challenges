function interest(P,r,n) {
  return [P + P*r*n, P * (1 + r) ** n].map(Math.round);
}