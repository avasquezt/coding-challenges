var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if (count < 0) return count + '<0';
      else if (count == 0) return '0=0';
      else return Array.from(Array(count + 1), (_,i) => i).join('+') + ' = ' + (count * (count + 1)) / 2;
    };
  
    return SequenceSum;
  
  })();