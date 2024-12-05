/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = 'https://my-site.com/about/';

// function validateUrl(link) {
//   const isValid = link.endsWith('/');

//   if (isValid) {
//     return link;
//   } else {
//     return link + '/';
//   }
// }

// const validUrl = validateUrl(link);
//!======================================================
/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = 'https://my-site.com/about';

// function validateUrl(link) {
//   const isValid = link.endsWith('/');
//   const isMySite = link.includes('my-site');

//   if (!isValid && isMySite) {
//     return link + '/';
//   } else {
//     return link;
//   }
// }

// const validUrl = validateUrl(url);
// console.log(validUrl);
//!======================================================
/*
 * Пошук у рядку методом includes()
 */

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";

// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// function checkSpam(str) {
//   const blacklistedWord1 = 'spam';
//   const blacklistedWord2 = 'sale';
//   const updatedStr = str.toLowerCase();

//   const hasFirstBanWord = updatedStr.includes(blacklistedWord1);
//   const hasSecondBanWord = updatedStr.includes(blacklistedWord2);

//   const hasBanWords = hasFirstBanWord || hasSecondBanWord;

//   return hasBanWords;
// }

// console.log(checkSpam(string1));
// console.log(checkSpam(string2));
// console.log(checkSpam(string3));
