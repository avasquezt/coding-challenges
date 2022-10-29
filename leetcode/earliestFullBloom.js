var earliestFullBloom = function(plantTime, growTime) {
    let times = [];
    for (let i = 0; i < plantTime.length; i++){
        times.push([plantTime[i], growTime[i]]);
    }
    times.sort((a, b) => b[1] - a[1]);
    let totalPlantTime = 0;
    let result = 0;
    for(let time of times){
        totalPlantTime += time[0];
        result = Math.max(totalPlantTime + time[1], result);
    }
    return result;
};