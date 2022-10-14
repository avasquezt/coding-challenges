function findMultiples(integer, limit) {
  return Array.from({length:Math.floor(limit/integer)}, (_ , index) => ++index  * integer)
}
