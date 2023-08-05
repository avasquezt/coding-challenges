/**
 * Converts the input time in AM/PM format, to military (24-hour) time
 * @param {string} time 
 * @returns {string}
 */
function timeConversion(time) {
    let [h, m, s] = time.slice(0,-2).split(':')
    const t = time.slice(-2);
    if(t == 'AM'){
        h = h % 12;
    }else{
        h = 12 + h % 12;
    }
    h= String(h).padStart(2, '0');
    return `${h}:${m}:${s}`;
}