
/**
 * Determines how many of the input pawns have their backs covered by another
 * @param {strign[]} pawns 
 * @returns {number}
 */
function coveredPawns(pawns){
    const protected = {};
    
    for(pawn of pawns){
      for(e of attacks(pawn)){
      protected[e] = true; 
      }
    }
      
    let n = 0;
    for(pawn of pawns){
      if(pawn in protected){
        n++;
      }
    }
      
    return n;
  
/**
 * Calculates the possible attack positions for the input pawn position
 * @param {string} pawn 
 * @returns {string[]}
 */    
function attacks(pawn){
    const ans = [];
    let a = pawn[0].toLowerCase();
    let b = Number(pawn[1]);
    if(b < 8){
        if(a > 'a'){
            ans.push(String.fromCharCode(a.charCodeAt(0) - 1) + (b + 1));
        }
        if(a < 'h'){
            ans.push(String.fromCharCode(a.charCodeAt(0) + 1) + (b + 1));
        }
    }
    return ans;
}
}