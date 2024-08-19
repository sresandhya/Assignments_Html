// Function to multiply each value of an array by ten
function multiplyByTen(myArray) {
  const resultArray = myArray.map((value) => value * 10);
  return resultArray;
}
const input1 = [12, 2, 2, 4, 1];
const output1 = multiplyByTen(input1);
console.log("Input:", input1);
console.log("Output:", output1);
