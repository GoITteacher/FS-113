/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */
//!======================================================

// const arr = [4, 7, 12, 78];

// const sum = arr.reduce((sum, elem, index, arr) => {
//   return acc + elem;
// });

// console.log(sum);

//!======================================================
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers;
// console.log(total);

/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = salary;
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  {
    id: 'player-1',
    name: 'Mango',
    timePlayed: 310,
    online: false,
    friends: ['Vasya'],
  },
  {
    id: 'player-2',
    name: 'Poly',
    timePlayed: 470,
    online: true,
    friends: ['Vasya'],
  },
  {
    id: 'player-3',
    name: 'Kiwi',
    timePlayed: 230,
    online: true,
    friends: ['Vasya'],
  },
  {
    id: 'player-4',
    name: 'Ajax',
    timePlayed: 150,
    online: false,
    friends: ['Vasya'],
  },
  {
    id: 'player-5',
    name: 'Chelsey',
    timePlayed: 80,
    online: true,
    friends: ['Vasya', 'Roma'],
  },
];

// const friends = players.reduce((result, player) => {
//   result.push(...player.friends);
//   return result;
// }, []);

// reduce((acc, elem, index, arr) => {}, true);

// const friends = players.reduce((result, player) => {
//   if (player.timePlayed > 80) {
//     result.push(player.name);
//   }

//   return result;
// }, []);

// console.log(friends);

// const totalTimePlayed = players;
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart;
// console.log(totalAmount);

//!======================================================
const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Honda',
    model: 'Accord',
    year: 2020,
    color: 'White',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    color: 'Red',
    price: 50000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    color: 'Black',
    price: 45000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    color: 'Blue',
    price: 70000,
    amount: 2,
    isSportCar: true,
    type: 'Sedan',
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2020,
    color: 'Silver',
    price: 60000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    color: 'Gray',
    price: 45000,
    amount: 0,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Lamborghini',
    model: 'Huracan',
    year: 2023,
    color: 'Yellow',
    price: 300000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2022,
    color: 'Red',
    price: 350000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Porsche',
    model: '911',
    year: 2021,
    color: 'White',
    price: 120000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Toyota',
    model: 'Golf',
    year: 2020,
    color: 'Black',
    price: 20000,
    amount: 6,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Subaru',
    model: 'Forester',
    year: 2021,
    color: 'Green',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    color: 'Orange',
    price: 35000,
    amount: 0,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2020,
    color: 'Red',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Kia',
    model: 'Soul',
    year: 2021,
    color: 'Yellow',
    price: 20000,
    amount: 4,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Toyota',
    model: 'Tucson',
    year: 2022,
    color: 'White',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2019,
    color: 'Silver',
    price: 22000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Volvo',
    model: 'XC60',
    year: 2020,
    color: 'Blue',
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Lexus',
    model: 'RX',
    year: 2021,
    color: 'Black',
    price: 50000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2022,
    color: 'Gray',
    price: 60000,
    amount: 0,
    isSportCar: false,
    type: 'SUV',
  },
];

// 1. Створити новий масив, що містить лише моделі доступних для продажу машин.

//!======================================================

// const result = cars.filter(car => car.amount).map(car => car.model);

// cars.reduce((models, car) => {
//   if (car.amount > 0) {
//     models.push(car.model);
//   }
//   return models;
// }, []);

//!======================================================

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].amount > 0) {
//     result.push(cars[i]);
//   }
// }

// const result = cars.filter(car => car.amount);
