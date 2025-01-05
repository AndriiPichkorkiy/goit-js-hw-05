/**
 * Масив об’єктів користувачів
 * @typedef {Object} user
 * @property {String} user.name Ім’я користувача
 * @property {[String]} user.friends Масив друзів користувача
 * @property {String} user.gender Стать користувача
 */

/**
 * Повертає масив усіх користувачів, відсортованих за спаданням кількостій їх друзів.
 * @param {[user]} users Масив об’єктів користувачів
 * @returns {[user]} Відсортований масив об’єктів користувачів кількостій `users.friends`
 */
const sortByDescendingFriendCount = users =>
  users.toSorted((userA, userB) => userB.friends.length - userA.friends.length);

console.log(
  sortByDescendingFriendCount([
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sharron Pace'],
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      gender: 'male',
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      friends: ['Goldie Gentry', 'Briana Decker'],
      gender: 'female',
    },
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
