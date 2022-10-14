function likes(names) {
  if (names.length < 2) return `${(names[0] || 'no one')} likes this`;
  if (names.length < 4) return `${names.slice(0, -1).join(', ')} and ${names.slice(-1)} like this`;
  return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;
}