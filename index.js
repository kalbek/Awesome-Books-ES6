import Book from './modules/Book.js';
import BookMenu from './modules/handleSelections.js';
import BookList from './modules/BookList.js';
import { DateTime } from './modules/luxon.js';

const addButton = document.getElementById('add-books');
const bookList = document.querySelector('.book-list');
const titles = document.getElementById('titles');
const authors = document.getElementById('author');

// handle nav menu links selections
const add = document.getElementById('add');
add.addEventListener('click', () => {
  BookMenu.handleSelections(add);
});
const list = document.getElementById('list');
list.addEventListener('click', () => {
  BookMenu.handleSelections(list);
});
const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
  BookMenu.handleSelections(contact);
});

//   handle button click event for add books
addButton.addEventListener('click', (e) => {
  Book.setBook(titles.value, authors.value);
  titles.value = '';
  authors.value = '';
  e.preventDefault();
  BookList.createBookList(bookList);
});

// display date and time
const dateTime = DateTime.now();
document.getElementById('dates').innerHTML = dateTime.toLocaleString(
  DateTime.DATETIME_MED,
);

// preserve data on browsers on page load
window.onload = () => {
  BookList.createBookList(bookList);
};
