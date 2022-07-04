// !!! How to work on tech task. Step by step guide
// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution
// algo:
// 1. iterate from 2 to num
// 2. check it prime
// 3. if prime print it

// input: number
// output: true or false

// algo
//  1)Write a function that checks if a number is prime
// 2) iterate from 2 to number
// 2.1 if a number % iterator ==> 0 then number isn't prime
// 2.2 return false, else true

function primeNum(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
primeNum(97);
primeNum(101);
primeNum(1);
primeNum(5);
primeNum(10);
primeNum(16);

// input: number
// output: undefined
//  1)Write a function that check row of numbers and output in concole if a number is prime
// 2) iterate from 2 to num
// 3) check with help primeNum() true or false each number
// 2.1 if true output in console this number
function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (primeNum(number)) {
      console.log(number);
    }
  }
}
getPrimes(47);
getPrimes(77);
getPrimes(7);
getPrimes(11);
getPrimes(15);
