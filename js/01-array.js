/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const friends = [
//   { email: 'Mango@gmail.com', online: false },
//   { email: 'Kiwi@gmail.com', online: true },
//   { email: 'Poly@gmail.com', online: false },
//   { email: 'Ajax@gmail.com', online: false },
// ];

//!======================================================

// for (const item of friends) {
//   item.email = item.email.toLowerCase();
// }

// for (let i = 0; i < friends.length; i++) {
//   if (i % 2 === 0) {
//     friends[i].email = 'Hello';
//   }
// }

// console.table(friends);

//!======================================================

/**
 * Пошук друга за іменем
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// function findFriendByName(allFriends, friendName) {
//   for (const item of allFriends) {
//     if (item.name === friendName) {
//       return item;
//     }
//   }
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

//!======================================================
/**
 * Отримуємо імена всіх лрузів
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// function getAllNames(allFriends) {
//   const names = [];

//   for (const item of allFriends) {
//     names.push(item.name);
//   }

//   return names;
// }

// console.log(getAllNames(friends));
//!======================================================

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// const friends = [
//   { name: 'Mango', online: 1 },
//   { name: 'Kiwi', online: 0 },
//   { name: 'Poly', online: 1 },
//   { name: 'Ajax', online: 0 },
// ];

// function getOnlineFriends(allFriends) {
//   const result = [];

//   for (const item of allFriends) {
//     if (item.online) {
//       result.push(item.name);
//     }
//   }

//   return result;
// }

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * item.quantity;
//     }
//   }
//   return 0;
// }

// console.log(calcTotalPrice(stones, 'Щебінь'));
// console.log(calcTotalPrice(stones, 'Цегла'));
