/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!======================================================

// const dog = {
//   name: 'Lord',
//   breed: 'Spaniel',
//   age: 4,
//   sayHello() {
//     console.log('Гав гав');
//   },
//   sleep() {
//     console.log('Zzxzzz');
//   },
//   eat() {
//     console.log('eat...');
//   },
// };

//!======================================================

// const dog1 = {
//   name: 'Lord1',
//   sayName() {
//     console.log(this.name);
//   },
// };

// const dog2 = {
//   name: 'Lord2',
//   sayName() {
//     console.log(this.name);
//   },
// };

// const dog3 = {
//   name: 'Lord3',
//   age: 10,
//   breed: 'Spaniel',
//   sayName() {
//     console.log('Name:', this.name);
//   },
//   sayAge() {
//     console.log('age', this.age);
//   },
//   sayBreed() {
//     console.log('breed', this.breed);
//   },

//   showInfo() {
//     this.sayName();
//     this.sayAge();
//     this.sayBreed();
//   },
// };

// dog3.sayName();
// dog3.sayAge();
//!======================================================

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: [],
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//     return this.tracks;
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
//   removeTrack() {},
//   play() {},
//   stop() {},
//   nextTrack() {},
//   prevTrack() {},
// };

// playlist.addTrack('AcDc');
// playlist.addTrack('AcDc');
// playlist.addTrack('AcDc');
// playlist.addTrack('AcDc');

// console.log(playlist.tracks);

// console.log(playlist.getTrackCount());

// playlist.changeName('New playlist name');

// playlist.addTrack('new track 1');
// console.log(playlist.getTrackCount());

// playlist.addTrack('new track 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

//!======================================================
