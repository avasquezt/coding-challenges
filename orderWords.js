function order(words){
    return words.split(' ').sort((a, b) => Number(a.replace(/[^0-9]/g, '')) - Number(b.replace(/[^0-9]/g, ''))).join(' ')
  }