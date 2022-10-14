function correctOrder(list){
    return list.map(order => {
      for(let n = 5; n < 20; n++){
        for(let m = Math.min(n - 3, 5); m < n; m++){
          if(Number((n + 0.79) * order.steeringWheel + (m + 0.98) * order.tire).toFixed(2) == order.totalPrice){
            return {"tire":4 ,"steeringWheel":1 , "totalPrice": Number(((n + 0.79) + (m + 0.98) * 4).toFixed(2))};
          }
        }  
      }
    });
}


// console.log(correctOrder([{"tire":1,"steeringWheel":2,"totalPrice":31.56},{"tire":5,"steeringWheel":1,"totalPrice":73.69}]));
console.log(correctOrder([
    {"tire":10,"steeringWheel":2,"totalPrice":133.38},
    {"tire":12,"steeringWheel":11,"totalPrice":191.45},
    {"tire":15,"steeringWheel":14,"totalPrice":503.76}]));
// console.log(correctOrder([
//     {"tire":10,"steeringWheel":7,"totalPrice":131.33},
//     {"tire":5,"steeringWheel":4,"totalPrice":57.06},
//     {"tire":6,"steeringWheel":1,"totalPrice":71.67}]));
// console.log(correctOrder({"tire":5,"steeringWheel":1,"totalPrice":73.69}));
// console.log(correctOrder({"tire":10,"steeringWheel":2,"totalPrice":133.38}));
// console.log(correctOrder({"tire":15,"steeringWheel":14,"totalPrice":503.76}));