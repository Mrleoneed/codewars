function countSheeps(arrayOfSheep) {
  let a = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) a += 1;
  }
  return a;
}
