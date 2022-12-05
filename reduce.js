// Array
const numbers = [2, 4, 8];

// HOC Function
const summingReducer = (accumulator, current) => accumulator + current;

// .reduce
function reduceArray(reducer, initialAccumulatorValue, array) {
  let accumulatorValue = initialAccumulatorValue;
  for (let element of array) {
    accumulatorValue = reducer(accumulatorValue, element);
  }
  return accumulatorValue;
}

// Checking
const result = reduceArray(summingReducer, 0, numbers);
console.log(result);
