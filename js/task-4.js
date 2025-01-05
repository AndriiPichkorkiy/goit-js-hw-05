/**
 * Масив об’єктів користувачів
 * @typedef {Object} user
 * @property {String} user.name Ім’я користувача
 * @property {Number} user.balance Поточний баланс користувача
 * @property {String} user.gender Стать користувача
 */

/**
 * Повертає загальний баланс користувачів, стать яких збігається зі значенням параметра `gender`.
 * @param {[user]} users Масив об’єктів користувачів
 * @param {user.gender} gender Стать користувача
 * @returns {Number} Загальний баланс користувачів
 */
const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((acc, user) => acc + user.balance, 0);

const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863
