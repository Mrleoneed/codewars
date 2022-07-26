function squareSum(numbers) {
  let a = 0;
  for (let i = 0; i < numbers.length; i++) {
    a += numbers[i] ** 2;
  }
  return a;
}
