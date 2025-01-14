/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

function colorTemplate(color) {
  return `
  <div style="background-color: ${color.color}" class="color-picker__option">${color.label}</div>
  `;
}

function colorsTemplate(colors) {
  const markup = colors.map(colorTemplate).join('');
  return markup;
}

// colorPickerContainerEl.innerHTML = '';

colorPickerContainerEl.insertAdjacentHTML('beforeend', colorsTemplate(options));

//!======================================================
