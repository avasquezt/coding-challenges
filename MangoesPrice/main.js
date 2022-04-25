function mango(quantity, price){
  return (Math.floor(quantity / 3) * 2 + quantity % 3) * price;
}