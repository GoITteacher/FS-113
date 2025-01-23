/**
 * Деструктуризація об'єкта в параметрах функції
 */

// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// // Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`,
//   );
// }

// З деструктуризацією

// getUserName(user);

//!======================================================

// function userTemplate(user) {
//   const { name, aboutMe, city, phoneNumber, email, isAdmin, password, login } =
//     user;

//   return `<div>
//     <h5>${name}</h5>
//     <p>${aboutMe}</p>
//   </div>`;
// }

//!======================================================

// function create(content, options = {}) {
//   const {
//     closable = true,
//     className = '',
//     onShow = () => {},
//     onClose = () => {},
//   } = options;

//   console.log(closable, className, onShow, onClose);
// }

// create('<h1></h1>');

//!======================================================

// const user = {
//   username: 'Jacob name',
//   number: '+38099561234',
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   location: {
//     x: 100,
//     y: 200,
//   },

//   x: 'Hello World',
// };

// function showInfo({ x, ...data}) {
//   console.log(data);

//   const {} = data;
// }

// // showInfo(user);

// const [x,y, ...data] = [1,2,3,4,5,6,78]

//!======================================================

// function createUser({
//   firstname = 'Anonym',
//   lastname = 'Anonym',
//   isAdmin = false,
//   isStudent,
//   isTeacher,
//   salary,
//   totalItems,
// } = {}) {
//   const user = {
//     firstname,
//     lastname,
//     isAdmin,
//     isStudent,
//     isTeacher,
//     salary,
//     totalItems,

//     showInfo() {},
//     showName() {},
//     showSalary() {},
//     showStatus() {},
//   };

//   return user;
// }

// createUser('Volodka', 'Last', false, false, false, 2000, 1500);

// createUser({
//   lastname: 'Vova',
//   totalItems: '2000',
//   salary: 1500,
//   isTeacher: 'false',
//   isAdmin: true,
//   isStudent: true,
//   firstname: 'Vova',
// });
