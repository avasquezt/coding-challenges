function chain(input, fs) {
  return fs.reduce( (acc, f) => f(acc) , input);
 }