// Regular expression that matches binary inputs that are multiple of 3
// RegExp based on https://math.stackexchange.com/questions/140283/why-does-this-fsm-accept-binary-numbers-divisible-by-three
var multipleOf3Regex = /^0*(1(0(1*)0)*1|0*\1)*0*$/;