import { createBookList } from "./createBookList.js";
 // handle adding books to books array
 export const addBooks = (titles, authors, books, bookList) => {
    console.log("hey")
    books.push({
        id: books.length,
        title: titles.value,
        author: authors.value,
    });
    // update book list html content with every action of adding books
    createBookList(bookList, books);
    alert('dd-add-books')
    titles.focus(); 
    localStorage.setItem("bookdata", JSON.stringify(books));
  };