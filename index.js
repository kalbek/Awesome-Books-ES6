import Book from "./modules/Book.js";
import { createBookList } from "./modules/createBookList.js";
import { handleSelections } from "./modules/handleSelections.js";
import { DateTime } from "./modules/luxon.js";
const addButton = document.getElementById("add-books");
const bookList = document.querySelector(".book-list");
const titles = document.getElementById("titles");
const authors = document.getElementById("author");

// handle nav menu links selections
// handle link selections from menu
add.addEventListener("click", () => {
  handleSelections(add);
});
list.addEventListener("click", () => {
  handleSelections(list);
});
contact.addEventListener("click", () => {
  handleSelections(contact);
});

//   handle button click event for add books
addButton.addEventListener("click", (e) => {
  Book.setBook(titles.value, authors.value);
  titles.value = "";
  authors.value = "";
  e.preventDefault();
  createBookList(bookList);
});

// display date and time
let dateTime = DateTime.now();
document.getElementById("dates").innerHTML = dateTime.toLocaleString(DateTime.DATETIME_MED);

// preserve data on browsers on page load
window.onload = () => {
  createBookList(bookList);
};
 
