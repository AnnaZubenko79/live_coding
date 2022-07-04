function getSenseOfLife() {
  return 42;
}

// ---test data
const res = getSenseOfLife();
console.log(res);
console.log(getSenseOfLife());

function getSquared(num) {
  return num ** 2;
}

const sumDegree = getSquared();
console.log(sumDegree);
console.log(getSquared());

// function sum (num1, num2){
//     return num1+num2
// }
// console.log(sum(2, 3))

// ... code here

function sum(years) {
  return `I am ${years} years old`;
}

console.log(sum(34));
console.log(sum(Infinity));
console.log(sum(false));
//  * ф-ция sum должна принимать число
//  * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
//  * где 34 - число, полученное в аргументах
//  */

// ... code here

/* ======> Arrow functions <======= */
function sumFunc(from, to) {
  let res = 0;
  for (let index = from; index <= to; index += 1) {
    res += index;
  }
  return res;
}
console.log(sumFunc(5, 7));
console.log(sumFunc(-5, 7));

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFunc(firstFrom, firstTo) < sumFunc(secondFrom, secondTo);
}

console.log(compareSums(1, 2, 5, 8));
console.log(compareSums(-1, 25, -5, 8));
/* ф-ция mult должна принимать два числа и вернуть их произведение */
const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(2, 3));
console.log(mult(2, -3));
console.log(mult(-5, 0));
console.log(mult(-2, 3));
// ... code here

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */
const getSquaredArrow = num => num ** 2;

console.log(getSquaredArrow(5));
console.log(getSquaredArrow(0));
console.log(getSquaredArrow(-5));
console.log(getSquaredArrow(1));

// // ... code here

// /*
//  * ф-ция getMagicNumber не должна принимать аргументы
//  * ф-ция getMagicNumber должна вернуть число 17

const getMagicNumber = () => 17;

console.log(getMagicNumber());
console.log(getMagicNumber(5));
