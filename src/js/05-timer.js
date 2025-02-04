/**
 * Напишемо  Timer, який буде
 * запускати та зупиняти відлік часу
 */

//!======================================================

const refs = {
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};
//!======================================================

//!======================================================

const timer = {
  intervalId: null,
  initTime: null,

  start() {
    console.log('START');
    this.initTime = new Date('04.02.2025');
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  },

  stop() {
    console.log('STOP');
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(this.intervalId);
  },

  tick() {
    const currentTime = Date.now();
    const ms = this.initTime - currentTime;
    const time = getTimeComponents(ms);
    const str = timeToSTR(time);
    refs.clockface.textContent = str;

    if (ms < 1000) {
      this.stop();
    }
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

//!======================================================

function getTimeComponents(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { hours, mins, secs };
}

function timeToSTR({ hours, mins, secs }) {
  hours = hours.toString().padStart(2, '0');
  mins = mins.toString().padStart(2, '0');
  secs = secs.toString().padStart(2, '0');
  return `${hours}:${mins}:${secs}`;
}
/* 


*/
