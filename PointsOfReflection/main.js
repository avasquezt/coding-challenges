function symmetricPoint(p, q) {
  [distX, distY] = [q[0] - p[0], q[1] - p[1]]
  return [q[0] + distX, q[1] + distY]
}

console.log(symmetricPoint([2, 6], [-2, -6]))