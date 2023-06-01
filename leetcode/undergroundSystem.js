/**
 * Underground railway system class for keeping track of customer travel times and calculating average travel times
 */
var UndergroundSystem = function() {
    this.totalTime = {};
    this.travelTimes = {};
    this.currUsers = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.currUsers[id] = [t, stationName];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const time = t - this.currUsers[id][0];
    const travelName = `${this.currUsers[id][1]}-${stationName}`;
    this.totalTime[travelName] = (this.totalTime[travelName] || 0) + time;
    this.travelTimes[travelName] = (this.travelTimes[travelName] || 0) + 1;
    delete this.currUsers[id];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const travelName = `${startStation}-${endStation}`;
    return this.totalTime[travelName] / this.travelTimes[travelName];
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */