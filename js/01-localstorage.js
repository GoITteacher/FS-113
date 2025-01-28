/**
 * LocalStorage
 */

//!======================================================

console.log(localStorage);
//!======================================================
/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const x1 = localStorage.getItem('myData');
// const strMessage = localStorage.getItem('message');

// const message = JSON.parse(strMessage);
//!======================================================
/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// const data = { name: 'Hello world' };

// const jsonData = JSON.stringify(data);

// localStorage.setItem('user', jsonData);

// const jsonDATA = localStorage.getItem('user');
// const data = JSON.parse(jsonDATA);

// data.country = 'Ukraine';

// const str = JSON.stringify(data);
// localStorage.setItem('user', str);

//!======================================================
/**
 * Видалення
 */

// localStorage.removeItem('test2');

// localStorage.clear();

/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }

// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };

//!======================================================

// const user = {
//   name: 'Vasya',
//   city: 'Dnipro',
// };
// const message1 = {
//   userId: 123123,
//   text: 'Hello world',
// };
// const message2 = {
//   userId: 123123,
//   text: 'Hello world',
// };
// const message3 = {
//   userId: 123123,
//   text: 'Hello world',
// };

// localStorage.setItem('user', JSON.stringify(user));
// localStorage.setItem('message2', JSON.stringify(message2));
// localStorage.setItem('message2', JSON.stringif(message2));
// localStorage.setItem('message3', JSON.stringify(message3));

// saveToLS('myUser', user);
// saveToLS('mesage1', message1);
// saveToLS('mesage2', message2);
// saveToLS('mesage3', message3);

//!======================================================

const data1 = loadFromLS('myUser');
const msg1 = loadFromLS('message1');
const msg2 = loadFromLS('message2');

console.log(data1);
console.log(msg1);
console.log(msg2);

//!======================================================

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}
