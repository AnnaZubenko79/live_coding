// // input: obj1, obj1
// // output: bool
// // algo
// // 1 get keys1, keys2
// // 2 if length !== length2 ==> false
// // 3 iterate keys1
// // 4 compare key1/value1 with key2/value2
// // 5 if (step4 ===false) ==> false

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   return keys1.every(key => obj1[key] === obj2[key]);
//   //   return !keys1.some(key => obj1[key] !== obj2[key]);
// }

// // // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true

// Урок 2. Переменные и типы данных
// Урок 3. Операторы
// Урок 4. Циклы
// Урок 5. Функции: Основы
// Урок 6. Массивы
// Урок 7. Array methods
// Урок 8. Объекты: основы
// Урок 9. Объекты
// Урок 14. Lexical environment, scope (скоуп)
// Урок 17. Контекст выполнения (this) - part 1
// Урок 18. Контекст выполнения (this) - part 2
// Урок 19. Прототипы. Наследование
// Урок 20. Классы в JavaScript
// Урок 22. Events: browser, handling, bubbling
// Урок 23. Events: forms, delegation
// Урок 25. Детальнее о инструментах разработчика
// Урок 29. Асинхронный код
// Урок 32. Promise static methods
// Урок 33. Общение с сервером - HTTP part 1
// Урок 34. Общение с сервером - HTTP part 2
// Урок 35. Обработка ошибок

// // const getAdults = obj => {
// //   const filterObj = {};
// //   const valArr = Object.entries(obj);
// //   console.log(valArr);
// //   return Object.fromEntries(
// //     valArr.filter(([key]) => {
// //       if (obj[key] > 18) {
// //         filterObj[key] = obj[key];
// //       }
// //       return filterObj[key];
// //     }),
// //   );
// // };

// // // examples
// // console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// // console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }

// const transformToObject = arr => {
//   const obj = {};
//   const entrArr = arr.map(elem => (obj[elem] = elem));
//   return obj;
// };

// // examples
// console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
// пройтись по массиву с помомощью reduce
//
const transformToObject = arr => {
  const redArr = arr.reduce((obj, key) => {
    const res = { ...obj, [key]: key };
    console.log('obj: ', obj);
    console.log('[key]: ', [key]);
    console.log('key: ', key);
    return res;
  }, {});
  return redArr;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

// return keysList.reduce((obj, key, index) => {
//   // console.log('before ', obj);
//   const res = { ...obj, [key]: valuesList[index] };
//   // console.log('after ', obj);
//   return res;
// }, {});
