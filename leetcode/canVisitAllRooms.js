/**
 * Checks if it's possible to visit all rooms with the input key configuration
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const keys = {};
    const n = rooms.length - 1;
    let total = 0;
    const visited = [0];
    while(visited.length){
        const i = visited.pop();
        rooms[i].forEach(key => {
            if(!keys[key] && key != i){
                keys[key] = true;
                total += key;
                visited.push(key);
            }
        });
    }
    return total == n * (n + 1) / 2;
};


var canVisitAllRooms = function(rooms) {
    const visited = new Set();
    const n = rooms.length - 1;
    const stack = [0];
    visited.add(0);
    while(stack.length){
        const curr = stack.pop();
        for(const key of rooms[curr]){
            if(visited.has(key)) continue;
            stack.push(key);
            visited.add(key);
        }
    }
    return rooms.length == visited.size;
};