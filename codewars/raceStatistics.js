function stat(strg) {
    
    if(!strg) return '';
    let times = strg.split(/,[ ]{0,}/).map(time => time.split('|').map(Number));
    times = times.map(time => time[0] * 3600 + time[1] * 60 + time[2]).sort((a, b) => a - b);
    let range = times[times.length - 1] - times[0];
    let mean = Math.floor(times.reduce((acc, time) => acc + time, 0) / times.length);
    let median = Math.floor((times[Math.ceil(times.length / 2 - 1)] + times[Math.floor(times.length / 2)]) / 2);
    //return times;
    return `Range: ${secondsToString(range)} Average: ${secondsToString(mean)} Median: ${secondsToString(median)}`;
}

function secondsToString(time){
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time % 3600 / 60);
  let seconds = time % 60;
  return `${String(hours).padStart(2,'0')}|${String(minutes).padStart(2,'0')}|${String(seconds).padStart(2,'0')}`
} 