/**
 * Деструктуризація об'єкта в циклі
 */

// const users = [
//   {
//     name: 'Kate',
//   },
//   {
//     name: 'Alex',
//   },
//   {
//     name: 'Mark',
//   },
// ];

// const [admin, teacher, student] = users;
// const { name: adminName } = admin;

// for (const { name } of users) {
//   console.log(name);
// }

//!======================================================

// const books = [
//   {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 1960,
//     genre: 'Fiction',
//     price: 10.99,
//     rating: 4.9,
//   },
//   {
//     title: '1984',
//     author: 'George Orwell',
//     year: 1949,
//     genre: 'Dystopian',
//     price: 8.99,
//     rating: 4.8,
//   },
//   {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925,
//     genre: 'Classic',
//     price: 7.99,
//     rating: 4.7,
//   },
//   {
//     title: 'The Catcher in the Rye',
//     author: 'J.D. Salinger',
//     year: 1951,
//     genre: 'Fiction',
//     price: 6.99,
//     rating: 4.6,
//   },
//   {
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     year: 1813,
//     genre: 'Romance',
//     price: 5.99,
//     rating: 4.9,
//   },
//   {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     year: 1937,
//     genre: 'Fantasy',
//     price: 12.99,
//     rating: 4.8,
//   },
//   {
//     title: 'Moby Dick',
//     author: 'Herman Melville',
//     year: 1851,
//     genre: 'Adventure',
//     price: 9.99,
//     rating: 4.5,
//   },
//   {
//     title: 'War and Peace',
//     author: 'Leo Tolstoy',
//     year: 1869,
//     genre: 'Historical',
//     price: 14.99,
//     rating: 4.9,
//   },
//   {
//     title: 'Crime and Punishment',
//     author: 'Fyodor Dostoevsky',
//     year: 1866,
//     genre: 'Philosophical',
//     price: 11.99,
//     rating: 4.8,
//   },
//   {
//     title: 'The Brothers Karamazov',
//     author: 'Fyodor Dostoevsky',
//     year: 1880,
//     genre: 'Philosophical',
//     price: 13.99,
//     rating: 4.9,
//   },
//   {
//     title: 'Brave New World',
//     author: 'Aldous Huxley',
//     year: 1932,
//     genre: 'Dystopian',
//     price: 9.99,
//     rating: 4.7,
//   },
//   {
//     title: 'Jane Eyre',
//     author: 'Charlotte Brontë',
//     year: 1847,
//     genre: 'Romance',
//     price: 7.99,
//     rating: 4.8,
//   },
//   {
//     title: 'Wuthering Heights',
//     author: 'Emily Brontë',
//     year: 1847,
//     genre: 'Romance',
//     price: 8.99,
//     rating: 4.7,
//   },
//   {
//     title: 'The Picture of Dorian Gray',
//     author: 'Oscar Wilde',
//     year: 1890,
//     genre: 'Gothic',
//     price: 6.99,
//     rating: 4.6,
//   },
//   {
//     title: 'Frankenstein',
//     author: 'Mary Shelley',
//     year: 1818,
//     genre: 'Science Fiction',
//     price: 7.99,
//     rating: 4.7,
//   },
//   {
//     title: 'Dracula',
//     author: 'Bram Stoker',
//     year: 1897,
//     genre: 'Horror',
//     price: 6.99,
//     rating: 4.5,
//   },
//   {
//     title: 'The Odyssey',
//     author: 'Homer',
//     year: -800,
//     genre: 'Epic',
//     price: 10.99,
//     rating: 4.9,
//   },
//   {
//     title: 'The Iliad',
//     author: 'Homer',
//     year: -750,
//     genre: 'Epic',
//     price: 9.99,
//     rating: 4.8,
//   },
//   {
//     title: 'Les Misérables',
//     author: 'Victor Hugo',
//     year: 1862,
//     genre: 'Historical',
//     price: 11.99,
//     rating: 4.9,
//   },
//   {
//     title: 'The Count of Monte Cristo',
//     author: 'Alexandre Dumas',
//     year: 1844,
//     genre: 'Adventure',
//     price: 12.99,
//     rating: 4.9,
//   },
//   {
//     title: 'The Grapes of Wrath',
//     author: 'John Steinbeck',
//     year: 1939,
//     genre: 'Fiction',
//     price: 8.99,
//     rating: 4.7,
//   },
//   {
//     title: 'Of Mice and Men',
//     author: 'John Steinbeck',
//     year: 1937,
//     genre: 'Fiction',
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     title: 'A Tale of Two Cities',
//     author: 'Charles Dickens',
//     year: 1859,
//     genre: 'Historical',
//     price: 9.99,
//     rating: 4.8,
//   },
//   {
//     title: 'Great Expectations',
//     author: 'Charles Dickens',
//     year: 1861,
//     genre: 'Fiction',
//     price: 8.99,
//     rating: 4.7,
//   },
//   {
//     title: 'The Secret Garden',
//     author: 'Frances Hodgson Burnett',
//     year: 1911,
//     genre: 'Children',
//     price: 6.99,
//     rating: 4.7,
//   },
//   {
//     title: 'Little Women',
//     author: 'Louisa May Alcott',
//     year: 1868,
//     genre: 'Fiction',
//     price: 7.99,
//     rating: 4.8,
//   },
//   {
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     year: 1877,
//     genre: 'Romance',
//     price: 10.99,
//     rating: 4.9,
//   },
//   {
//     title: 'The Adventures of Sherlock Holmes',
//     author: 'Arthur Conan Doyle',
//     year: 1892,
//     genre: 'Mystery',
//     price: 9.99,
//     rating: 4.8,
//   },
//   {
//     title: 'The Lord of the Rings',
//     author: 'J.R.R. Tolkien',
//     year: 1954,
//     genre: 'Fantasy',
//     price: 20.99,
//     rating: 4.9,
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: 'J.K. Rowling',
//     year: 1997,
//     genre: 'Fantasy',
//     price: 10.99,
//     rating: 4.8,
//   },
// ];

// for (const { title } of books) {
//   console.log(title);
// }

// const result = books.map(({ genre, author }) => {
//   return `${author} ${genre}`;
// });

// books.forEach(({ price, rating }) => {
//   console.log(price, rating);
// });

//!======================================================

/**
 * Без деструктуризації
 */
// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

/**
 * З деструктуризацією
 */

//!======================================================
// const salaries = {
//   Roman: 2000,
//   Anton: 1500,
//   Vlad: 1700,
// };

// const arr = Object.entries(salaries);

// for (const [key, value] of arr) {
//   console.log(key, value);
// }

/* 
[
  ['Roman', 2000],
  ['Anton', 1500],
  ['Vlad', 1700],
]

*/
