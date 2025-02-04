/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');
//!======================================================

setTimeout(showNotification, NOTIFICATION_DELAY);

notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});
//!======================================================
/*
 * Функції
 */

function showNotification() {
  console.log('SHOW');
  notification.classList.add('is-visible');
  timeoutId = setTimeout(hideNotification, 4000);
}

function hideNotification() {
  console.log('HIDE');
  notification.classList.remove('is-visible');
}
