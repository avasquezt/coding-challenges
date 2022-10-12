function sc(...nums){
    let ops = ['+', '-', , '*', '/'];
    for (op of ops){
        if(eval(nums[0] + op + nums[1]) == nums[2]) return `${nums[0]}${op}${nums[1]}=${nums[2]}`;
        if(eval(nums[0] + op + nums[2]) == nums[1]) return `${nums[0]}${op}${nums[2]}=${nums[1]}`;
        if(eval(nums[1] + op + nums[0]) == nums[2]) return `${nums[1]}${op}${nums[0]}=${nums[2]}`;
        if(eval(nums[1] + op + nums[2]) == nums[0]) return `${nums[1]}${op}${nums[2]}=${nums[0]}`;
        if(eval(nums[2] + op + nums[1]) == nums[0]) return `${nums[2]}${op}${nums[1]}=${nums[0]}`;
        if(eval(nums[2] + op + nums[0]) == nums[1]) return `${nums[2]}${op}${nums[0]}=${nums[1]}`;
    }
    return '';
}

console.log(sc(1,2,3));