function balanceStatements(list){
  // Get the array of orders, if it contains any elements
  list = list.trim() ? list.split(',').map(str => str.trim()) : [];
  
  //Accumulators
  let buy = 0, sell = 0, mistakes = [];
  
  //Process each element
  list.forEach((order, i) => {
    
    //Get order's quantity, price and status
    let quantity = order.split(' ')[1];
    let price = order.split(' ')[2];
    let status = order.split(' ')[3];
    
    //Check if the order has the 4 required elements, and if they meet the conditios
    if( order.split(' ').length == 4 && /^\d+$/.test(quantity) && /^\d*\.\d+$/.test(price)){
      
      //Add to the total boy or sell
      if(status === 'B') buy += price * quantity;
      else if(status === 'S') sell += price * quantity;
      
    //It the order fails the conditions, save it on mistakes array
    }else{
      mistakes.push(order);
    }
  });
  
  //Return the rounded total of buys and sells, and the list of mistakes
  return `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}` + (mistakes.length ? `; Badly formed ${mistakes.length}: ${mistakes.join(' ;')} ;`: '');
}