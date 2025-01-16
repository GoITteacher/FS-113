const cars = [
  {
    id: 1,
    title: 'Toyota Camry',
    price: 28312,
    img: 'https://picsum.photos/200?random=1&car,toyota',
    onSale: false,
    type: 'supercar',
  },
  {
    id: 2,
    title: 'Honda Civic',
    price: 49756,
    img: 'https://picsum.photos/200?random=2&car,Honda',
    onSale: true,
    type: 'suv',
  },
  {
    id: 3,
    title: 'BMW X5',
    price: 37689,
    img: 'https://picsum.photos/200?random=3&car,BMW',
    onSale: true,
    type: 'supercar',
  },
  {
    id: 4,
    title: 'Chevrolet Malibu',
    price: 40233,
    img: 'https://picsum.photos/200?random=4&car,Chevrolet',
    onSale: false,
    type: 'suv',
  },
  {
    id: 5,
    title: 'Mercedes-Benz E-Class',
    price: 19258,
    img: 'https://picsum.photos/200?random=5&car,Mercedes-Benz',
    onSale: true,
    type: 'sedan',
  },
  {
    id: 6,
    title: 'Audi A4',
    price: 31674,
    img: 'https://picsum.photos/200?random=6&car,Audi',
    onSale: false,
    type: 'sedan',
  },
  {
    id: 7,
    title: 'Lexus RX',
    price: 48326,
    img: 'https://picsum.photos/200?random=7&car,Lexus',
    type: 'supercar',
    onSale: false,
  },
  {
    id: 8,
    title: 'Nissan Altima',
    price: 36890,
    img: 'https://picsum.photos/200?random=8&car,Nissan',
    onSale: true,
    type: 'suv',
  },
  {
    id: 9,
    title: 'Hyundai Sonata',
    price: 29147,
    img: 'https://picsum.photos/200?random=9&car,Hyundai',
    onSale: false,
    type: 'suv',
  },
  {
    id: 10,
    title: 'Ford Mustang',
    price: 43751,
    img: 'https://picsum.photos/200?random=10&car,Ford',
    type: 'supercar',
    onSale: true,
  },
  {
    id: 11,
    title: 'Toyota Corolla',
    price: 41872,
    img: 'https://picsum.photos/200?random=11&car,Toyota',
    onSale: false,
    type: 'sedan',
  },
  {
    id: 12,
    title: 'Honda Accord',
    price: 35491,
    img: 'https://picsum.photos/200?random=12&car,Honda',
    onSale: true,
    type: 'sedan',
  },
  {
    id: 13,
    title: 'BMW 3 Series',
    price: 26783,
    img: 'https://picsum.photos/200?random=13&car,BMW',
    type: 'supercar',
    onSale: true,
  },
  {
    id: 14,
    title: 'Chevrolet Silverado',
    price: 49205,
    img: 'https://picsum.photos/200?random=14&car,Chevrolet',
    onSale: false,
    type: 'suv',
  },
  {
    id: 15,
    title: 'Mercedes-Benz GLC',
    price: 38957,
    img: 'https://picsum.photos/200?random=15&car,Mercedes-Benz',
    onSale: true,
    type: 'sedan',
  },
  {
    id: 16,
    title: 'Audi Q5',
    price: 43296,
    img: 'https://picsum.photos/200?random=16&car,Audi',
    type: 'supercar',
    onSale: false,
  },
  {
    id: 17,
    title: 'Lexus IS',
    price: 31548,
    img: 'https://picsum.photos/200?random=17&car,Lexus',
    onSale: false,
    type: 'suv',
  },
  {
    id: 18,
    title: 'Nissan Rogue',
    price: 27041,
    img: 'https://picsum.photos/200?random=18&car,Nissan',
    onSale: true,
    type: 'sedan',
  },
  {
    id: 19,
    title: 'Hyundai Tucson',
    price: 44103,
    img: 'https://picsum.photos/200?random=19&car,Hyundai',
    onSale: false,
    type: 'suv',
  },
  {
    id: 20,
    title: 'Ford Explorer',
    price: 37619,
    img: 'https://picsum.photos/200?random=20&car,Ford',
    type: 'supercar',
    onSale: true,
  },
];

const refs = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-list'),
};

function carTemplate(car) {
  return `<li class="car-item">
        <img
          src="${car.img}"
          alt="car image"
        />
        <div class="car-info">
          <h3>${car.title}</h3>
          <p>Type: ${car.type}</p>
          <p>Price: ${car.price}$</p>
        </div>
      </li>`;
}
function carsTemplate(cars) {
  return cars.map(carTemplate).join('');
}

const markup = carsTemplate(cars);

refs.container.innerHTML = markup;

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Hello');

  const formData = new FormData(e.target);

  const title = formData.get('query');
  const type = formData.get('car-type');

  const filteredCars = cars.filter(car => {
    const isValidName = car.title.includes(title);
    const isValidType = car.type === type || type === 'all';
    return isValidName && isValidType;
  });

  const markup = carsTemplate(filteredCars);
  refs.container.innerHTML = markup;
});
