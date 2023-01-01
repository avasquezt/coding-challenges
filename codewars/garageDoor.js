/**
 * Calculates the position of a garage door, based on each event on the input string
 * @param {string} events 
 * @returns {string}
 */

function door(events) {
    let up = true, move = false;
    let position = 0;
    let ans = '';
    for(const event of events){
      if(event == 'O'){
        up = !up;
      }else if(event == 'P'){
        move = !move;
      }
      
      if(move){
        position = position + (up ? 1 : -1);
        if(position == 0 || position == 5){
          up = !up;
          move = !move;
        }
      }
      
      ans += position;
      
    }
    return ans;
  }