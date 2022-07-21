// /* eslint-disable prefer-object-spread */
// /* eslint-disable no-param-reassign */

// /* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
//  * лучше использовать spread опертор - это самый современный подход
//  *
//  * Так же плохой подход - мутировать входящие параметры функции
//  *
//  * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
//  * для этой задачи он отключен аннотацией eslint-disable
//  * */
// // input: object, key, value
// // output: object
// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// // console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// // console.log(addPropertyV1(transaction, 'name', 'Dan'));

// // input: object1(куда копируем), копируемые объекты
// // output: object
// function addPropertyV2(obj, key, value) {
//   // const hello = 'greeting'; в key может быть любая переменная
//   // Object.assign({}, obj, { [hello]: value });
//   return Object.assign(obj, { [key]: value });
// }
// // // test data
// // const transaction = {
// //   value: 170,
// // };
// // console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// // console.log(addPropertyV2(transaction, 'name', 'Dan'));
// // console.log(transaction);

// // input: object1(куда копируем), копируемые объекты
// // output: new object
// function addPropertyV3(obj, key, value) {
//   return Object.assign({}, obj, { [key]: value });
// }

// // const transaction = {
// //   value: 170,
// //   currency: 'EURO',
// // };

// // const res1 = addPropertyV3(transaction, 'currency', 'USD');
// // const res2 = addPropertyV3(res1, 'currency', 'USD');
// // console.log('result test1 ', res1);
// // console.log('result test2 ', res2);
// // console.log(addPropertyV3(transaction, 'name', 'Dan'));
// // console.log('object after ', transaction);

// function addPropertyV4(obj, key, value) {
//   //   const newObj = { ...obj, [key]: value };
//   //   return newObj;
//   return { ...obj, [key]: value };
// }

// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV4(transaction, 'currency', 'USD'));
// console.log(transaction);
// console.log(addPropertyV4(transaction, 'name', 'Dan'));
// console.log(transaction);
// transaction.firstName = 'Dand';
// console.log(transaction);

// input: obj, String
// output: obj

// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   return userData;
// }

// function addPropertyV2(userData, userId) {
//   Object.assign(userData, { id: userId });
//   return userData;
// }

function addPropertyV3(userData, userId) {
  return Object.assign({}, userData, { id: userId });
}

function addPropertyV4(userData, userId) {
  return { ...userData, id: userId };
}

// examples
const user = {
  name: 'Sam',
};
// console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(user);
