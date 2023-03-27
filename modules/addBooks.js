import { createBookList } from "./createBookList.js";
 // handle adding books to books array
 export const addBooks = (titles, authors, books, bookList) => {
     console.log("books-1 ", books)
    books.push({
        id: books.length,
        title: titles.value,
        author: authors.value,
    });
    console.log("books-1 ", books)
    // update book list html content with every action of adding books
    createBookList(bookList, books);
    titles.focus(); 
    localStorage.setItem("bookdata", JSON.stringify(books));
    console.log("books-2 ", books)
  };