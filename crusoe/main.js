function crusoe(n, d, ang, distmult, angmult) {
  let origin = [0, 0];
  for (let i = 0; i < n; i++){
    origin[0] += Math.cos(ang * Math.PI / 180) * d;
    origin[1] += Math.sin(ang * Math.PI / 180) * d;
    ang *= angmult;
    d *= distmult;
  }
  return origin;
}