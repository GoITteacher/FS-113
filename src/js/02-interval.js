/*
 * Метод setInterval(callback, delay, args)
 */

let counter = 0;

function showCounter() {
  counter++;
  console.log(counter);
}

//
// setInterval(() => console.log('----------'), 5000);

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

// const id = setInterval(showCounter, 1000);

// setTimeout(() => {
//   clearInterval(id);
// }, 5000);

// const intervalId = setInterval(logger, 2000, 2000);
