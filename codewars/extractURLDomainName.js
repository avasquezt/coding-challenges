function domainName(domain) {
    // http     matches 'http'
    // (s)?     optionally, matches 's' after 'http'
    // :\/\/    matches '://'
    // (www.)?  optionally, matches 'www.' after ://
    return domain.replace(/(http(s)?:\/\/)?(www.)?/, '').split('.')[0];
  }