/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */
// input: none
// output: number(last element)
// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];
console.log('BEFORE POP ', numbersList1);
const lastNumber = numbersList1.pop();
console.log(lastNumber);
console.log('AFTER POP ', numbersList1);

/* push - добавит элемент в конец массива */
// input: number
// output: length array
// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];
console.log(numbersList2);
numbersList2.push(8);
console.log(numbersList2);
console.log(numbersList2.push());

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// input: none
// output: number(deleted element)
const numbersList3 = [8, 2, 3, 4, 5];
console.log(numbersList3);
const firstNumber = numbersList3.shift();
console.log(firstNumber);
console.log(numbersList3);
// // // put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

// input: none
// output: length array
const numbersList4 = [1, 2, 3, 4, 5];
console.log(numbersList4);
const res = numbersList4.unshift();

// // /* ======================================= */
// // /* ===> НЕ мутирующие методы массивов <=== */
// // /* ===> НЕ изменяют исходный массив <===== */
// // /* ======================================= */
// /* метод filter */
// /* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
//    ф-ция callback запустится по очереди для каждого элемента начального массива arr
//    в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
//    callback(arr[i]) === true -> элемент будет добавлен в финальный массив
//    callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// // c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// // выведи bigNumbers в консоль
// // // начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
// // // input: callback function
// // // output: new array

// //input: number
// // output: boolean
// // // option1

function filterCallback(el) {
  return el > 5;
}
// console.log(filterCallback(anotherNumbersList));
// const callBack = el => el > 5;

console.log(
  anotherNumbersList.filter(function filterCallback(el) {
    return el > 5;
  }),
);
console.log(anotherNumbersList.filter(el => el > 0));

//  * A callback is a function passed as an argument to another function
//  * This technique allows a function to call another function
//  * A callback function can run after another function has finished
//  * */
// // input: number, number, callback function
// // output: undefind
function sum(from, to, resolver) {
  let sumRes = 0;
  for (let index = from; index <= to; index += 1) {
    sumRes += index;
  }
  resolver(sumRes);
}

// --test data
function resolver(num) {
  console.log(num);
}

console.log(sum(5, 10, resolver));
