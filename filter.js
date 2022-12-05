// Array
const numbers = [2, 4, 8];

// HOC Function
const isMoreThanFive = (number) => number > 5;

// .map
function filterArray(predictor, array) {
  const filteredArray = [];
  for (let element of array) {
    if (predictor(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

// Checking
const result = filterArray(isMoreThanFive, numbers);
console.log(result);
