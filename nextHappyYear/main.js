function nextHappyYear(year){
  return new Set(String(year + 1)).size === String(year).length ? year + 1 : nextHappyYear(year + 1);
}