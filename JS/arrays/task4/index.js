// input: array, callback;
// output: array
// callback:
// input: vallue of Element, index, arr;
// output: array;

// algo:
// 1. create new array;
// 2. loop through the input array
// 3. perform certain actions in the callback function
// 4. push the processed value into a new array
const mapArrayElements = (arr, callback) => {
  const resMapArray = [];
  for (let index = 0; index < arr.length; index += 1) {
    const callBacks = callback(arr[index], index, arr);
    resMapArray.push(callBacks);
  }
  return resMapArray;
};
const array = [1, 2, 0, 15, 28, -5, 5, 4, 8, Infinity, 25, 40, NaN];
const ar1 = [];
const ar2 = ['2', '5', '6'];
const callback = (elem, index, arr) => {
  // option1
  //   return elem * 5;
  // option2
  //   if (elem > 2 && index > 5 && arr.length > 5) {
  //     return elem * 5;
  //   }
  // option3
  if (elem > 2 && index > 2) {
    return elem * 5;
  }
};
console.log(mapArrayElements(array, callback));
console.log(mapArrayElements(ar1, callback));
console.log(mapArrayElements(ar2, callback));
