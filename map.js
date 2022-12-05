// Array
const numbers = [2, 4, 8];

// HOC Function
const addTwo = (number) => number + 2;

// .map
function mapArray(addTwo, array) {
  const mappedArray = [];
  for (let element of array) {
    mappedArray.push(addTwo(element));
  }
  return mappedArray;
}

// Checking
const result = mapArray(addTwo, numbers);
console.log(result);
