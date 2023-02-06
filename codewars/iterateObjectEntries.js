/**
 * Calculates the average value of the properties in the input object 
 * @param {string} meet 
 * @param {string} boss 
 * @returns {string}
 */

function outed(meet, boss){
    let happinessScore = 0;
    let n = 0;
    for(const [key, value] of Object.entries(meet)){
      happinessScore += value * (key == boss ? 2 : 1);
      n++;
    }
    return happinessScore / n <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}