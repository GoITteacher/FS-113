import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function getAllBooks() {
  const res = await axios2.get('/books');
  return res.data;
}
export async function createBook(book) {
  const res = await axios2.post('/books', book);
  return res.data;
}

export async function updateBook(id, book) {
  const res = await axios2.patch(`/books/${id}`, book);
  return res.data;
}
export async function resetBook(id, book) {
  const res = await axios2.put(`/books/${id}`, book);
  return res.data;
}
export async function deleteBook(id) {
  const res = await axios2.delete(`/books/${id}`, book);
  return res.data;
}
