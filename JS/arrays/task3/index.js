// input: array, func
// output:array

// callback:
// input: ellem, index (optional), array (optional)
// output: boolean

// algo:
// 1.create new array
// 2.iterate input arr
// 3.apply callback for every element
// 4.if true - push

const filterArrayElements = (arr, callback) => {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const callBacks = callback(arr[index], index, arr);
    if (callBacks) {
      resArr.push(arr[index]);
    }
  }
  return resArr;
};
// -- test data
const array = [1, 2, 0, 15, 28, -5, 5, 4, 8, Infinity, 25, 40, NaN];
const ar1 = [];
const ar2 = ['2', '5', '6'];
const callback = (el, index, arr) => {
  if (index > 5 && el > 10) {
    return true;
  }
  return false;
};
console.log(filterArrayElements(array, callback));
console.log(filterArrayElements(ar1, callback));
console.log(filterArrayElements(ar2, callback));

// const filterArray = (arr, callback) => {
//   const resArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const callBacks = callback(arr[index], index, arr);
//     if (callBacks) {
//       resArr.push(arr[index]);
//     }
//   }
//   return resArr;
// };
// // -- test data
// const arr = [1, 2, 11, 0, -5, 5, 4, 8, NaN];
// const ar2 = [];
// const ar3 = ['2', '5', '6'];
// const callback = (el, index, arr) => {
//   if (el > 10 && index > 5) {
//     return true;
//   }
//   return false;
// };
// console.log(filterArray(arr, callback));
// console.log(filterArray(ar2, callback));
// console.log(filterArray(ar3, callback));

// const arr = [1, 2, 11, 0, -5, 5, 4, 8, NaN];
// multiply
// number1, number2....
// function multiply(...args) {
//   //   console.log(arguments);
//   console.log(args);
//   return args.reduce((acc, el) => acc * el);
// }

// console.log(multiply(10, 7, 6));
