// ('🤑' або '👿')

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

function getRandomSmile(delay) {
  const smile = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('🤑');
      } else {
        reject('👿');
      }
    }, delay);
  });

  return smile;
}

startBtn.addEventListener('click', () => {
  const promises = [];
  for (let i = 0; i < 3; i++) {
    container.children[i].textContent = '';
    const s1 = getRandomSmile((i + 1) * 200);
    s1.then(smile => {
      container.children[i].textContent = smile;
    }).catch(smile => {
      container.children[i].textContent = smile;
    });
    promises.push(s1);
  }

  Promise.all(promises)
    .then(() => {
      result.textContent = 'You won';
    })
    .catch(() => {
      result.textContent = 'Try again';
    });
});
