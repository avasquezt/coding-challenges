function bmi(weight, height) {
  const bmi = weight / height ** 2;
  switch (true){
      case bmi > 30:
        return 'Obese';
      case bmi > 25:
        return 'Overweight';
      case bmi > 18.5:
        return 'Normal';
      default:
        return 'Underweight';
  }
}