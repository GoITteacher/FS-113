/**
 * Методи рядків
 *
 *  - slice
 *  - indexOf
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - trim
 */

//!======================================================
// const username = 'Jacob Mercer';

// const firstName = username.slice(0, -2);
// const lastName = username.slice(6);

// const res = username.slice(4);
// const res = username.slice(7, 10);
// const res = username.slice(20, 25);

// const mail = 'sdrawdawd@gmail.com';

// const nickname = mail.slice(0, -10);

// console.log(nickname);

//!======================================================

// const username = 'Jacsesaefseffob Mercer awdawdawdawd';

// const firstIndex = username.indexOf('awdawdwd');
// const lastIndex = username.lastIndexOf(' ');

// const firstName = username.slice(0, firstIndex);
// const lastName = username.slice(firstIndex + 1, lastIndex);
// const patronymic = username.slice(lastIndex + 1);

// console.log(0, firstName, lastName, patronymic);

//!======================================================

// let userMail = 'MySuperPuperPoshta@gmail.com';
// userMail = userMail.toLowerCase();

// const str = 'Hello World'.toLowerCase();
// const str = prompt().toLowerCase();
// console.log(str);

// const str = 'Hello';
// const res = str.toUpperCase();

// console.log(str, res);
//!======================================================

// const message = 'Hello World , its my FIRST STRING';
// const firstPart = message[0].toUpperCase(); // message.slice(0,1)
// const secondPart = message.slice(1).toLowerCase();

// const res = firstPart + secondPart;

// console.log(firstPart);
// console.log(secondPart);
// console.log(res);

//!======================================================

// const str = '@Hello World , its my FIRST STRING';
// const hasMySymbol = str.includes('@', 1);
// console.log(hasMySymbol);

//!======================================================

// function hasSpam(str) {
//   const newStr = str.toLowerCase();
//   return newStr.includes('rice');
// }

// console.log(hasSpam('Hello Rice'));
// console.log(hasSpam('riiice'));
// console.log(hasSpam('RiCe'));

//!======================================================

// const str = '!awdawdwawd.com';

// const res1 = str.startsWith('!');
// const res2 = str.endsWith('.com') || str.endsWith('.ua');

// console.log(res2);

// console.log(str.includes('!', -1));

//!======================================================
// const userName = '    Vasya      ';
// const name = userName.trim();
// console.log(`Hello ${name}!`);

//!======================================================
