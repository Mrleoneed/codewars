function squareDigits(n) {
  return +n
    .toString()
    .split("")
    .map((val) => val * val)
    .join("");
}
console.log(squareDigits(4444));
