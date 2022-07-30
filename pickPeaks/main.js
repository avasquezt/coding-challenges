// function pickPeaks(arr){
//   let peaks = {pos:[], peaks:[]};
//   arr.slice(1).reduce((acc, n, i) => {
//     let diff = Math.sign(n - arr[i])
//     console.log(acc, diff);
//     if (((acc + diff) === 0) && diff < 0){
//       peaks.pos.push(i);
//       peaks.peaks.push(arr[i]);
//     }
//     return diff || acc;
//   }, 0);
//   return peaks;
// }

function pickPeaks(arr){
  let peaks = {pos:[], peaks:[]};
  let curr = [0, 1];
  arr.slice(2).forEach((n, i) => {
      if(n < arr[curr[1]] && arr[curr[1]] > arr[curr[0]]){
        peaks.pos.push(curr[1]);
        peaks.peaks.push(arr[curr[1]]);
        curr.shift();
        curr.push(i + 2);
      }else if(n != arr[curr[1]]){
         curr.shift();
        curr.push(i + 2);
      }
  })
  return peaks;
}