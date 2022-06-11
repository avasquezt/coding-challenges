function evaporator(content, evap_per_day, threshold){ 
  return Math.ceil(Math.log(threshold/100) / Math.log(1 - evap_per_day/100));
}