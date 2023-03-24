/**
 * Calculates how many Black Fridays (Friday 13th) are in the input year
 * @param {number} year 
 * @returns {number}
 */
function unluckyDays(year){
    let days = 0;
    const date = new Date(year, 00, 13);
    for(let i = 0; i < 12; i++){
      date.setMonth(i);
      if(date.getDay() == 5){
        days++;
      }
    }
    return days;
}