function isolateIt(arr){
    return arr.map(str => str.slice(0, Math.floor(str.length / 2)) + '|' + str.slice(Math.ceil(str.length / 2)));
  }