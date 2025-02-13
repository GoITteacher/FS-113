// function getAllCars() {
//   const BASE_URL = 'http://localhost:3000';
//   const END_POINT = '/cars';

//   const params = new URLSearchParams({});

//   const url = `${BASE_URL}${END_POINT}`;

//   const options = {
//     headers: {},
//   };

//   return fetch(url, options).then(res => {
//     console.log(res);
//     return res.json();
//   });
// }

// getAllCars().then(cars => {
//   console.log(cars);
// });

//!======================================================
import axios from 'axios';

// function createCar1(carObj) {
//   const BASE_URL = 'http://localhost:3000';
//   const END_POINT = '/cars';

//   const params = new URLSearchParams({
//     x1: 'x1',
//   });
//   const url = `${BASE_URL}${END_POINT}`;

//   const options = {
//     mathod: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },

//     body: JSON.stringify(carObj),
//   };

//   return fetch(url, options).then(res => res.json());
// }

function createCar2(carObj) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/cars';
  const url = BASE_URL + END_POINT;

  const params = { userId: 1 };
  const headers = {};

  return axios.post(url, carObj, { params, headers });
}

function updateCar(id, car) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = `/cars/${id}`;
  const url = BASE_URL + END_POINT;

  const params = {};
  const headers = {};

  return axios.patch(url, car, { params, headers });
}
function resetCar(id, car) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = `/cars/${id}`;
  const url = BASE_URL + END_POINT;

  const params = {};
  const headers = {};

  return axios.put(url, car, { params, headers });
}

function deleteCar(id) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = `/cars/${id}`;
  const url = BASE_URL + END_POINT;

  const params = {};
  const headers = {};

  return axios.delete(url);
}
