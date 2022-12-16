function ransomNote(note, magazine){
    let magazineWords = {};
    for(const word of magazine.split(' ')){
        magazineWords[word] = 1 + (magazineWords[word] || 0);
    }

    for(const word of note.split(' ')){
        if(magazineWords[word]){
            magazineWords[word]--;
        }else{
            return false;
        }
    }

    return true;
}

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);