function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || (bounce <= 0 || bounce >= 1) || (window >= h || window < 0)) return -1;
    return Math.ceil(Math.log(window/h)/Math.log(bounce) - 1) * 2 + 1;
  }