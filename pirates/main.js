const cannonsReady = (gunners) => {
  for (let key in gunners){
    if(gunners[key] !== 'aye'){
      return 'Shiver me timbers!';
    }
  }
  return 'Fire!';
}

Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';