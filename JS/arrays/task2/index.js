// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
// input: callback
// output: new array
// callback:
// input: el array (in this case number)
// output: number
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */
// option1
// const mapRes = numbersList.map(el => {
//   const newEl = el * el;
//   return newEl;
// });
// console.log(mapRes);
// console.log(numbersList);
// option2
// const mapRes = numbersList.map(el => el * el);
// console.log(mapRes);
// console.log(numbersList);
// option3
// возвести с 4 єлемента
// const mapRes = numbersList.map((el, index) => {
//   if (index > 2) {
//     return el * el;
//   }
//   return el;
// });
// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// put your code here

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// put your code here

/* метод forEach */
// input: callback
// output: none

// callback:
// input: value of element, index, array
// output: undefined
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */
const forEacchRes = numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
});
console.log(forEacchRes);
// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// put your code here

/* метод reduce */

// input: callback, accumulator (init value)
// output: результат (number)
// callback:
// input: accumulator(number), el array (number), index(optional), array(optional)
// output: new
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
transactions.reduce((sum, el) => {
  if (el > 100) {
    return sum + el;
  }
  return sum;
}, 0);

// put your code here

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

// put your code here
