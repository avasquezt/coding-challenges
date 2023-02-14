/**
 * Calculates the requested value using the arc length formula
 * @param  {...any} args 
 * @returns 
 */
function thetaFormula(...args) {
	if(args.filter(e => e == '?').length > 1 || args.length != 3 || args.some(e => typeof e !== 'number' && e !== '?')) return null;
  
  switch(args.indexOf('?')){
      case 0:
        return Number((args[1] / args[2]).toFixed(3));
      case 1:
        return Number((args[0] * args[2]).toFixed(3));
      case 2:
        return Number((args[1] / args[0]).toFixed(3));
  }
  
  return args[2] === args[1] / args[0];
}