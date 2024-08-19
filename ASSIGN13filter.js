// Function to filter out even numbers from an array
function filterEvenNumbers(myArray) {
  const resultArray = myArray.filter((value) => value % 2 === 0);
  return resultArray;
}
const input1 = [12, 5, 7, 8, 3, 2];
const output1 = filterEvenNumbers(input1);
console.log("Input:", input1);
console.log("Output:", output1);
