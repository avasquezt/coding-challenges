function removeSmallest(numbers) {
  let min = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, i) => i !== min);
}