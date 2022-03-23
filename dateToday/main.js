function isToday(newDate){
  let today = new Date();
  return today.getFullYear() === newDate.getFullYear() && today.getMonth() === newDate.getMonth() && today.getDate() === newDate.getDate()
}

let newDate = new Date();
//newDate.setDate(newDate.getDate() - 1);

console.log(newDate);
console.log(isToday(newDate));

console.log(newDate.toDateString())