function titleCase(title, minorWords = '') {
    return title.split(' ').map((word, i) => i !== 0 && minorWords.toLowerCase().split(' ').includes(word.toLowerCase()) ? word.toLowerCase() : (word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())).join(' '); 
  }
  