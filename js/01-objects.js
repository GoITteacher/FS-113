/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const user = {
//   firstName: 'Vova',
//   secondName: 'Test',
// };

// const user = {
//   age: 25,
//   phoneNumber: '0999999'
// }

//!======================================================

// for(){}

// if(){}

// const bottle1 = {
//   size: '2l',
//   material: 'plastic',
//   color: 'red',
//   brand: 'coca-cola',
//   test: 'hello world',
// };

// console.log(bottle1);

// function showUserInfo(name, city, salary) {
//   console.log(`${name} from ${city} has ${salary}$`);
// }

// showUserInfo(userName, city1, salary2);

//!======================================================

const user = {
  firstName: 'Vasya',
  age: 10,
  address: {
    city: 'Dnipo',
    country: 'Ukraine',
    street: 'Test Street',
    location: {
      x: 1000,
      y: 1000,
    },
  },
};

const address = user.address;
const location = address.location;

// console.log(location);

// const userProps = prompt('Enter prop name');

// console.log(user.userProps);
// console.log(user[userProps.toUpperCase()]);

// console.log(user.age);
// console.log(user['age']);

// console.log(user.address.city);
// user['address']['location']['x'];

// console.log(user.address.location.x);

// user[length - 1]

//!======================================================

// const arr = [1, 2, 34, 5, 6, 7];

//!======================================================

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  isFavourite: true,
};

// playlist.name = 'Hello';
// playlist['name'] = 'Hello';

playlist.test = 'Hello world';
playlist['Hello'] = 'Hello world';
// console.log(playlist);

// console.log(playlist?.hello?.x);
//!======================================================
/**
 * -----------------------------------
 */
const propertyName = prompt('Enter name');
const propertyValue = prompt('Enter value');

playlist[propertyName] = propertyValue;

console.log(playlist);

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}
