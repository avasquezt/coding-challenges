// return the total number of photos.
// it should return an integer
function countPhotos(road){
    // console.log(road.split('.'));
    // console.log(road.split('.').reduce((acc, dir, i) => acc + dir.replace('[^<]', ''), ''));
    return road.split('.').reduce((acc, dir, i, arr) => (acc += dir.replace(/[^>]/g, '').length * (arr.length - (i + 1)), acc += dir.replace(/[^<]/g, '').length * i, acc), 0);
  }

console.log(countPhotos('>>.'));  //2
console.log(countPhotos('.>>'));  //0
console.log(countPhotos('>.<.'));  //3
console.log(countPhotos('.><.>>.<<'));  //11
console.log(countPhotos('.<>>..><.<<<<<.'));  //34


//console.log('>>.'.replace(/[^<]/g, ''));