function swapValues(arguments) {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0];
  arguments[0] = args[1];
  arguments[1] = temp;
}