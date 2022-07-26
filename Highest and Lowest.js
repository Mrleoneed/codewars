function highAndLow(numbers) {
  const arr = numbers.split(" ").map(Number);
  let highest = arr[0];
  let lowest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) highest = arr[i];
    if (arr[i] < lowest) lowest = arr[i];
  }
  return highest + " " + lowest;
}
