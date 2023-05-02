/**
 * Checks if the input volume and side length belong to the same cube
 * @param {number} volume 
 * @param {number} side 
 * @returns {boolean}
 */
var cubeChecker = function(volume, side){
    return volume > 0 && side > 0 && volume == side ** 3;
};