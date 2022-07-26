function noSpace(x) {
  let a = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      a += x[i];
    }
  }
  return a;
}
