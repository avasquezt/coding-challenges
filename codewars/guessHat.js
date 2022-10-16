function sc(exchange){
    return exchange.reduce((ans, n) => n.includes(ans) ? n.split('-').filter(e => e != ans)[0] : ans, '2');
  }