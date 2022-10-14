function formatDuration (seconds) {
    if (!seconds) return 'now';
    
    let times = [Math.floor(seconds / 31536000),
                 Math.floor((seconds % 31536000) / 86400),
                 Math.floor((seconds % 86400) / 3600), 
                 Math.floor((seconds % 3600) / 60), 
                 seconds % 60];
    
    times[0] = times[0] ? `${times[0]} year${times[0] > 1 ? 's': ''}` : '';
    times[1] = times[1] ? `${times[1]} day${times[1] > 1 ? 's': ''}` : '';
    times[2] = times[2] ? `${times[2]} hour${times[2] > 1 ? 's': ''}` : '';
    times[3] = times[3] ? `${times[3]} minute${times[3] > 1 ? 's': ''}` : '';
    times[4] = times[4] ? `${times[4]} second${times[4] > 1 ? 's': ''}` : '';
    
    times = times.filter(time => time);
    
    return times.length > 1 ? times.slice(0, -1).join(', ') + ' and ' + times.slice(-1)[0] : times[0];
  }
  