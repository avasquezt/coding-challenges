function compareVersions (version1, version2) {
  version1 = version1.split('.').map(Number);
  version2 = version2.split('.').map(Number);
  for(let i = 0; i < Math.max(version1.length, version2.length); i++){
    if ((version1[i] || 0) > (version2[i] || 0)){
      return true;
    }else if((version1[i] || 0) < (version2[i] || 0)){
      return false;
    }
  }
  return (version1.length == version2.length) ? true : false;
}