import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";

export async function getBooks() {
  const response = await axios.get("/books?_expand=category");
  return response.data;
}

export async function getBook(id) {
  const response = await axios.get("/books/" + id);
  return response.data;
}

export async function putBook(book) {
  await axios.put("/books/" + book.id, book);
}

export async function postBook(book) {
  await axios.post("/books", book);
}

export async function deleteBook(id) {
  await axios.delete("/books/" + id);
}
