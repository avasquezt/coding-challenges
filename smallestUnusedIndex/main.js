function nextId(ids){
  let a = [...ids.keys()].find(id => !ids.includes(id))
  return  (a === undefined) ? ids.length : a;
}