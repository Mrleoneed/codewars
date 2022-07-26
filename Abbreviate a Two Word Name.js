function abbrevName(name) {
  let a = name.split(" ");
  return a[0].charAt(0).toUpperCase() + "." + a[1].charAt(0).toUpperCase();
}
