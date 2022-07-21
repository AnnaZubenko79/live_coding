const getCustomersList = obj => {
    const newObj = Object.entries(obj);
    console.log(newObj);
    const mapArr = newObj.map(( arr) => ({ ...arr, id[0] }));
    console.log(mapArr);
    const sortArr = mapArr.sort((a, b) => a.age - b.age);
    return sortArr;
  // ===================================================
    // const newObj = Object.entries(obj);
    // console.log(newObj);
    // const mapArr = newObj.map(([id, arr]) => ({ ...arr, id }));
    // console.log(mapArr);
    // const sortArr = mapArr.sort((a, b) => a.age - b.age);
    // return sortArr;
  // ======================================================

//   return Object.entries(obj)
//     .map(([id, arr]) => ({ ...arr, id }))
//     .sort((a, b) => a.age - b.age);
};

const customers = {
  'customers-id-1': {
    name: 'Will',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 19,
  },
  'customers-id-3': {
    name: 'Dan',
    age: 2,
  },
};

console.log(getCustomersList(customers));
console.log(customers);


// input: Object
// output: array that contains objects// object []

// algo:
// преобразовать объект в массив(object.entries) // потому что нам нужно и ключ и значение
// проитерировать массив и преобразовать в нужный формат (map)
// отсортировать по возрасту sort

// ==============================================
//  option1
// algo at live coding
// 1. get array of key-value - entries - [[key1, val1], [key2, val2]]
// 2. iterate array of entries - on every step create new object - [obj1, obj2]
// 3. sort array & return it

// ================================================
// option2
// algo at live coding
// 1. get array keys - [key1, key2]
// 2. iterate array keys - on every step create new object
// 3. sort array & return it

// NORM
// use destructuring
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// const customers = {
//   'customers-id-1': {
//     name: 'Will',
//     age: 54,
//   },
//   'customers-id-2': {
//     name: 'Dan',
//     age: 25,
//   },
// };
// console.log(getCustomersList(customers));

// Andriy
// good
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// расширенный вариант

// const getCustomersList = obj =>
//   // input: obj
//   // output: [[key1, val1], [key2, val2]]
//   Object.entries(obj)
//     .map(entry => {
//       console.log('entry is: ', entry);
//       //   const obj = {};
//       // obj['id'] = entry[0]
//       Object.assign(obj, { id: entry[0] });
//       console.log('some res ', obj);
//       return Object.assign(obj, { id: entry[1] });
//       //   return {id: entry[0], ...[entry[1]]}
//       // return { id: id, ...customer} это то же самое что {{ id, ...customer}}
//       // потому что если id: id, то выводим только id (сокращенная запись)
//       //   console.log('some res2 ', obj);
//     })
//     .sort((a, b) => a.age - b.age);

// ==============================================
// Roman
// NORM
// 1.use push intead of concat
// 2. use map
// rename data on customerObj

// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// ===================================================
// Aleksandr
// GOOD
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);

// ====================================================
// Anastasia
// BAD
// don't use values
// dont use index
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);
//   //   const values = Object.values(obj);

//   return keys.map(key => ({ ...obj.key, id: key })).sort((a, b) => a.age - b.age);
//   //  return values.map((el, index) => ({ ...el, id: keys[index]}))
// };
// ============================================================
// Oleksiy
// BAD
// don't use values
// dont use index
// bad naming
// remove redunt variables
// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// ===============================================================
// Vitalii
// BAD
// don't use shift
// fix eslint errors
// reduntant variable
// const getCustomersList = obj => {
//   //   const moderArr = Object.entries(obj).map(arr => {
//   //     let id = { id: arr.shift() };
//   //     return (arr[0] = { ...arr[0], ...id });
//   //   });

//   //   return moderArr.sort((a, b) => a.age - b.age);
//   return Object.entries(obj)
//     .map(arr => {
//       const idObj = { id: arr[0] };
//       return { ...arr[1], idObj };
//     })
//     .sort((a, b) => a.age - b.age);
// };

// ==================================================================
// Yevgen
// dont use index
// bad naming
// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((acc, elem, index) => {
//       acc[index] = { id: elem, ...customers[elem] };
//       return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((resArr, key, index) => {
//       resArr.push({ id: key, ...customers[key] });
//       return resArr;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// ======================================================================
// Dima
// BAD

// const getCustomersList = obj => {
//   // obj is the object we want to get the keys from
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
//   const first = order.map(el => el[1]); // get the values
//   const second = order.map(el => el[0]); // get the keys
//   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
// };

const customers = {
  'customers-id-1': {
    name: 'Will',
    age: 54,
  },
  'customers-id-2': {
    name: 'Dan',
    age: 25,
  },
};
console.log(getCustomersList(customers));