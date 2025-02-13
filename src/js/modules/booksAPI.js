import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
});

export function getAllBooks() {
  return axios2.get('/books').then(res => res.data);
}
export function createBook(book) {
  return axios2.post('/books', book).then(res => res.data);
}
export function updateBook(id, book) {
  return axios2.patch(`/books/${id}`, book).then(res => res.data);
}
export function resetBook(id, book) {
  return axios2.put(`/books/${id}`, book).then(res => res.data);
}
export function deleteBook(id) {
  return axios2.delete(`/books/${id}`).then(res => res.data);
}
