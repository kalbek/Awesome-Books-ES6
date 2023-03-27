import { createBookList } from "./createBookList.js";
export const removeBooks = (bookId, books, bookList) => {
  // first remove event listener for the book
  console.log(bookId);
  console.log(books);
  console.log(bookList);
  const removeButton = document.getElementById(bookId.toString());
  removeButton.removeEventListener("click", () => {});
  let newBook = books;
  newBook = newBook.filter((book) => book.id !== bookId);
  // shift ids of books array elements starting from the removed element
  newBook.forEach((book) => {
    if (book.id > bookId) book.id -= 1;
  });
  createBookList(bookList, newBook);
};
