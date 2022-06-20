function wallpaper(l, w, h) {
  let n = (l * h * 2 + w * h * 2) / (5.2);
  return numbers[l * w * h ? Math.ceil(n + n * 0.15) : 0]; 
}