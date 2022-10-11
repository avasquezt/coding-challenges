var regex=/\d{3}(?!$|\$)/g
function addCommas(money,reg){
  //coding the use of regex here...
  return money.split('').reverse().join('').replace(reg,x=>x+",").split('').reverse().join('');  //like this
}