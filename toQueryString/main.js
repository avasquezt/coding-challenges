function toQueryString (obj) {
  let ans = [];
  for(let key in obj){
    if(Array.isArray(obj[key])){
      ans.push(...obj[key].map(e => key + '=' + e))
    }else{
      ans.push(key + "=" + obj[key]);
    }
  }
  return ans.join('&');
}