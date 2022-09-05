/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/
function stantonMeasure(arr){
    let ocurrences = arr.reduce((acc, n) => {
                        acc[n] = acc[n] + 1 || 1;
                        return acc;
                      }, {});
    return ocurrences[ocurrences[1]] || 0;
  }