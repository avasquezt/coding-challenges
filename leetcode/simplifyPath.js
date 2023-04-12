/**
 * Converts the input Unix-style file system absolute path to the simplified canonical path
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const folders = [];
    for(const folder of path.split('/')){
      if(folder == '..'){
        folders.pop();
      }else if(folder == '.' || folder == ''){
        continue;
      }else{
        folders.push(folder);
      }
    }
    return '/' + folders.join('/');
};