function timeCorrect(timestring) {
    if(!timestring) return timestring;
    if(!/\d\d:\d\d:\d\d/.test(timestring)) return null;
    timestring = timestring.split(':').map(Number);
    const seconds = timestring[2] % 60;
    const minutes = (timestring[1] + Math.floor(timestring[2] / 60)) % 60;
    const hours = (timestring[0] + Math.floor((timestring[1] + Math.floor(timestring[2] / 60)) / 60)) % 24;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }