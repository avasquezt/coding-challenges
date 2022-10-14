function modifyMultiply (str,loc,num) {
    return Array.from(Array(num), _ => str.split(' ')[loc]).join('-')
  } 