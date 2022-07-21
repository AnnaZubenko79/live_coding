/* eslint-disable no-param-reassign */
// const withdraw = (clients, balances, client, amount) => {
//   const indexOfClient = clients.indexOf(client);
//   return balances[indexOfClient] < amount ? -1 : (balances[indexOfClient] -= amount);
// };
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
// const withdraw = (clients, balances, client, amount) => {
//   const indexOfPerson = clients.indexOf(client);
//   if (balances[indexOfPerson] < amount) {
//     return -1;
//   }
//   balances[indexOfPerson] -= amount;
//   return balances[indexOfPerson];
// };

// const withdraw = (clients, balances, client, amount) => {
//   // remote logic from if
//   // get rid of duplicated code
//   // don't use find
//   // BAD

//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     // good
//     //   balances[clients.indexOf(client)]
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// BAD
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? (balances[clients.indexOf(client)] -= amount) : -1;

// BAD
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

// GOOD

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// BAD

// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
// balances[curentClient] -= amount;
//   return newBalance > 0 ? newBalance : -1;
// };

// BAD

// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

// GOOD
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// BAD
// const withdraw = (clients, balances, client, amount) => {
//   let clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// GOOD

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// BAD
// const withdraw = (clients, balances, client, amount) => {
//   const clientBalance = balances[clients.indexOf(client)];

//   return clientBalance < amount ? -1 : clientBalance - amount;
// };

// BAD
// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     return -1;
//   }
// };

// BAD
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;
// const clientNames = ['Anna', 'Sergey', 'Daria'];
// const balance = [1400, 87, 55];
// console.log(withdraw(clientNames, balance, 'Anna', 450));
// console.log(balance);

// BAD
// const getRandomNumbers = (length, from, to) => {
//   const arr = new Array(length);
//   if (to - from < 1) {
//     return null;
//   }
//   return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// GOOD

const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);
  const arr = new Array(length);
  if (to - from < 1) {
    return null;
  }
  return arr.fill(Math.trunc(Math.random() * (toCeil - fromCeil)) + fromCeil);
};

console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
