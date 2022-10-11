function sc(s){
    return s.split('').filter(char => s.includes(char.toLowerCase()) && s.includes(char.toUpperCase())).join('');
}