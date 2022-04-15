const well = x => {
  const n = x.filter(val => val === 'good').length;
    if (n > 2) return 'I smell a series!';
    else if (n > 0) return 'Publish!';
    return 'Fail!';
  }