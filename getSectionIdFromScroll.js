// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY,sizes){
    return sizes.reduce((acc, size, i) => {
      scrollY -= size;
      if (scrollY < 0 && acc == -1){
        acc = i;
      }
      return acc;
    }, -1)
 }