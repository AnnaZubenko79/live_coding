// algo
// 1. create new obj
// 2. literate keysList
// 3. put key/value to the obj

// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     // obj[keysList[index]] = valuesList[index];
//     obj = { ...obj, [keysList[index]]: valuesList[index] };
//   }
//   return obj;
// }

function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => {
    // console.log('before ', obj);
    const res = { ...obj, [key]: valuesList[index] };
    // console.log('after ', obj);
    return res;
  }, {});
}
// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
