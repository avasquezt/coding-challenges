function blackAndWhite(arr){
    if (!Array.isArray(arr)) return "It's a fake array"
    return `It's a ${arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0 ? 'black' : 'white'} array`;
  }