import axios from 'axios';
// async function test2() {
//   console.log('start');
//   console.log(1);
//   console.log(2);
//   console.log(1_1);
//   console.log(2_2);
//   console.log('end');
// }

// const myFun = async () => {};

// const data = {
//   async sayHello() {},
// };

// class User {
//   async setData() {}
// }

// document.addEventListener('click', async () => {});

//!======================================================

// async function test1() {
//   const data = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
//   console.log(data);
// }

// test1();

// async function test2() {
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//   const data = await res.json();
// }

// test2();

// async function test2() {
//   try {
//     const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

async function getPokemon(id) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.data;
}

// async function getPokemons() {
//   const promises = [];

//   for (let i = 1; i < 100; i++) {
//     const promise = await getPokemon(i);
//     promises.push(promise);
//   }

//   console.log(promises);
// }

// getPokemons();

// async function getPokemons() {
//   const promises = [];

//   for (let i = 1; i < 100; i++) {
//     const promise = getPokemon(i);
//     promises.push(promise);
//   }

//   const result = await Promise.all(promises);
//   console.log(result);
// }
// getPokemons();

//!======================================================
// async function getPokemons() {
//   const pokemon1 = getPokemon(1);
//   const pokemon2 = getPokemon(2);
//   const pokemon3 = getPokemon(3);
//   const promises = [pokemon1, pokemon2, pokemon3];

//   const result = await Promise.all(promises);

//   console.log(result);
// }

// getPokemons();
//!======================================================
