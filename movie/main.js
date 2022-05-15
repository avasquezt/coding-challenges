function movie(card, ticket, perc) {
  total = card;
  let i = 0;
  while(Math.ceil(total) >= (ticket * i)){
    i++;
    total += ticket * (Math.pow(perc, i));
  }
  return i; 
};