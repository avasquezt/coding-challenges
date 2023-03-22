/**
 * Calculates the number of books in the requested categories from the input list
 * @param {string[]} listOfArt 
 * @param {string[]} listOfCat 
 * @returns {string}
 */
function stockList(listOfArt, listOfCat){
  
    if(!listOfArt.length || !listOfCat.length) return '';
    
    const categories = {};
    for(const cat of listOfCat){
      categories[cat] = 0;
    }
    for(const e of listOfArt){
      const category = e[0];
      if(category in categories){
        const quantity = Number(e.split(' ')[1]);
        categories[category] += quantity;
      }
    }
    
    return Object.entries(categories).map(e => `(${e[0]} : ${e[1]})`).join(' - ');
}