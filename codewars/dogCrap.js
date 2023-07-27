/**
 * Checks if there is enough capacity to collect all the dog's crap in the input array
 * @param {string[]} x 
 * @param {number} bags 
 * @param {number} cap 
 * @returns {string}
 */
function crap(x, bags, cap){
    let curr = 0;
    let msg = 'Clean';
    for(const arr of x){
      for(const e of arr){
        if(e == 'D') return "Dog!!";
        if(e == '@'){
          while(!curr && bags) {
            bags--;
            curr = cap;
          }
          if(!curr) msg = "Cr@p";
          curr--;
        }
      }
    }
    return msg;
}