function calculateYears(principal, interest, tax, desired) {
    let time = 0;
    for(let i = principal; i < desired; i += (i * interest) * (1 - tax)){
      time++;
    }
    return time;
  }