const DNAtoRNA = dna => dna.split('').map(x => x === 'T' ? 'U' : x).join('')


// return dna.split("T").join("U");