console.log(
  "FILTER, SORTING, DAN REVERSE\n============================================"
);

const myArray = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

console.log("Sebelumnya :", myArray.toString());
console.log("Ascending :", myArray.sort().toString());
console.log("Descending :", myArray.reverse().toString());
console.log(
  "Filter > 10 :",
  myArray
    .filter((number) => {
      return number > 10;
    })
    .toString()
);
