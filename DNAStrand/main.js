function DNAStrand(dna){
  return dna.replace(/[CATG]/g, char => ({A:'T', T:'A', C:'G', G:'C'}[char]));
}