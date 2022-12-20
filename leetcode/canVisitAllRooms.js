/**
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