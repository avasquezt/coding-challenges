function generateHashtag (str) {
    str = str.trim();
    if (!str.length) return false;
    str = str.split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1)).join('');
    return str.length < 140 ? '#' + str : false;
  }