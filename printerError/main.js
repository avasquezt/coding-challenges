function printerError(s) {
  return s ? (s.match(/[^a-m]/g)||[]).length + "/" + s.length : "0/0";
}