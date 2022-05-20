function search(n, root) {
  if(root){
    if(root.value === n) {
      return true;
    }else if(search(n, root.left)){
      return true;
    }else if(search(n, root.right)){
      return true;
    }
  }
  return false;
}