/**
 * Replaces every word different to rock or gravel with gravel
 * @param {string} garden 
 * @returns {string}
 */
function rakeGarden(garden) {
    return garden.replace(/\b(?!(gravel|rock)\b)\w+/g, 'gravel');
}

function rakeGarden(garden) {
    return garden.replace(/\w+/g, word => ['rock', 'gravel'].includes(word) ? word : 'gravel');
}