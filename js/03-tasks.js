/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

//!======================================================
// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes === 0) {
//   timestring = `${hours}h.`;
// } else {
//   timestring = `${hours}h. ${minutes}m`;
// }

// console.log(timestring);

//!======================================================
// const hours = 14;
// const minutes = 15;

// let timestring = `${hours}h.`;
// timestring += minutes !== 0 ? ` ${minutes}m` : '';

// console.log(timestring);

//!======================================================

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту.
 * Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

function getMessage(daysUntilDeadline) {
  let result;

  if (daysUntilDeadline === 0) {
    result = 'Today';
  } else if (daysUntilDeadline === 1) {
    result = 'Tomorrow';
  } else if (daysUntilDeadline === 2) {
    result = 'Overmorrow';
  } else {
    result = 'Date in the future';
  }

  return result;
}

const message = getMessage(2);
console.log(message);
