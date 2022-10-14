function getGrade (s1, s2, s3) {
  // Code here
  const avg = (s1 + s2 + s3)/3
  switch (true){
      case avg >= 90:
        return 'A';
      case avg >= 80:
        return 'B';
      case avg >= 70:
        return 'C';
      case avg >= 60:
        return 'D';
      case avg >= 0:
        return 'F';
  }
}