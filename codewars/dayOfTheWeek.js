function dayOfTheWeek(date) {
    date = date.split('/');
    return Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(date[2], date[1] - 1, date[0]));
  }