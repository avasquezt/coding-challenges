/**
 * Finds the suspect who visited all the victims
 * @param {object} suspectInfo 
 * @param {string[]} dead 
 * @returns {string}
 */
function killer(suspectInfo, dead) {
    for(const suspect in suspectInfo){
      if(dead.every(victim => suspectInfo[suspect].includes(victim))) return suspect;
    }
}