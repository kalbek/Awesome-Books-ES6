import { removeBooks } from "./modules/removeBooks.js";
import { addBooks } from "./modules/addBooks.js";
let books = [];
const addButton = document.getElementById("add-books");
const bookList = document.querySelector(".book-list");
const author = document.getElementById("author");
const titles = document.getElementById("titles");
const authors = document.getElementById("author");
const list = document.getElementById("list");
const add = document.getElementById("add");
const contact = document.getElementById("contact");
const listSection = document.getElementById("list-all-books");
const addSection = document.getElementById("add-new-book");
const contactSection = document.getElementById("see-contact");
const copyright = document.getElementById("copyright");
class Books {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }


  // action to handle link selections from menu
  static handleSelections = (item) => {
    if (item.id === "list") {
      // color style for navigation
      list.classList.remove("inactive");
      list.classList.add("active");
      add.classList.remove("active");
      add.classList.add("inactive");
      contact.classList.remove("active");
      contact.classList.add("inactive");
      // visibility style for sections
      addSection.classList.remove("visible");
      addSection.classList.add("hidden");
      listSection.classList.remove("hidden");
      listSection.classList.add("visible");
      contactSection.classList.remove("visible");
      contactSection.classList.add("hidden");
      copyright.classList.remove("absolute-bottom");
      copyright.classList.add("copyrights");
    } else if (item.id === "add") {
      // color style for navigation
      list.classList.remove("active");
      list.classList.add("inactive");
      add.classList.remove("inactive");
      add.classList.add("active");
      contact.classList.remove("active");
      contact.classList.add("inactive");
      // visibility style for sections
      addSection.classList.remove("hidden");
      addSection.classList.add("visible");
      listSection.classList.remove("visible");
      listSection.classList.add("hidden");  
      contactSection.classList.remove("visible");
      contactSection.classList.add("hidden");
      copyright.classList.remove("copyrights");
      copyright.classList.add("absolute-bottom");
    } else {
      // color style for navigation
      list.classList.remove("active");
      list.classList.add("inactive");
      add.classList.remove("active");
      add.classList.add("inactive");
      contact.classList.remove("inactive");
      contact.classList.add("active");
      // visibility style for sections
      addSection.classList.remove("visible");
      addSection.classList.add("hidden");
      listSection.classList.remove("visible");
      listSection.classList.add("hidden");
      contactSection.classList.remove("hidden");
      contactSection.classList.add("visible");
      copyright.classList.remove("copyrights");
      copyright.classList.add("absolute-bottom");
    }
  };
}
// handle link selections from menu
add.addEventListener("click", () => {
  Books.handleSelections(add);
});
list.addEventListener("click", () => {
  Books.handleSelections(list);
});
contact.addEventListener("click", () => {
  Books.handleSelections(contact);
});
//   handle button click event for add books
addButton.addEventListener("click", (e) => {
  alert("ddd")
  addBooks(titles, authors, books, bookList);
  alert("ddd-2")
  titles.value = "";
  authors.value = "";
  e.preventDefault();
});
// display date and time
let date = new Date();
let time = new Date();
const dateSection = document.getElementById("dates");
const timeSection = document.getElementById("time");
date = date.toDateString();
time = time.toLocaleTimeString();
dateSection.innerHTML = date;
timeSection.innerHTML = time;

// // preserve data on browsers on page load
// window.onload = () => {
//   // assigning form fields to a variable.
//   const form = document.querySelector("#form");
//   // handling event for every change in input field
//   form.addEventListener("input", () => {
//     const fields = { titles, author, books };
//     // storing input values to a local storage.
//     fields.titles = titles.value;
//     fields.author = author.value;
//     localStorage.setItem("data", JSON.stringify(fields));
//   });
//   // parsing the data.
//   const data = JSON.parse(localStorage.getItem("data"));
//   const bookdata = JSON.parse(localStorage.getItem("bookdata"));
//   // assining values to input fields from local storage on page load.
//   if (data !== null && data !== undefined) {
//     titles.value = data.title;
//     author.value = data.author;
//   }
//   if (bookdata !== null) {
//     books = bookdata;
//     createBookList(bookList, books);
//   }
//   titles.focus();
// };
