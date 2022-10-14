function runningPace(distance, time){
  let totalTime = Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]);
  return `${Math.floor(totalTime / (distance * 60))}:${String(Math.floor(totalTime / distance) % 60).padStart(2, '0')}`
}