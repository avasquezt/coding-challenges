function inArray(array1,array2){
    return array1.filter(substr => array2.some(str => str.includes(substr))).sort();
}