// import BookList from './BookList.js';

export default class Book {
  // initialize book title and author
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // add books to book lists
  static setBook = (titles, authors) => {
    const books = Book.getBooks();
    books.push({
      title: titles,
      author: authors,
      id: books.length,
    });
    localStorage.setItem('books', JSON.stringify(books));
    document.getElementById('titles').focus();
  };

  // get single book by ID
  static getBook = (id) => {
    let currentBook;
    Book.getBooks().forEach((book) => {
      if (book.id === id) currentBook = book;
    });
    return currentBook;
  };

  // get all books
  static getBooks = () => {
    let books;
    if (
      localStorage.getItem('books') === null
      || localStorage.getItem('books') === undefined
    ) {
      books = [];
    } else books = JSON.parse(localStorage.getItem('books'));
    return books;
  };

  // remove a book by id
  static removeBook = (id) => {
    const bookList = document.querySelector('.book-list');
    let books = Book.getBooks();
    books = books.filter((book) => book.id !== id);
    books.forEach((book) => {
      if (book.id > id) {
        book.id -= 1;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    bookList.innerHTML = '';
    books.forEach((book) => {
      bookList.innerHTML += `
      <div class='flex'>
        <div class='flex-spaced w-100' id='${
          book.id % 2 === 0 ? 'evens' : 'odds'
        }'>
          <div class ='flex book-title-authors'>
            <div class='book-title'>'${book.title}' by </div>
            <div class='book-author'>&nbsp;${book.author} </div>
          </div>
          <div class='container'> 
           <button class='removes' id='${book.id}'><p>Remove</p></button>
        </div>
        </div>
      </div>
        `;
    });
    // create an event listener for every newly created remove button
    books.forEach((book) => {
      const bookId = Number(book.id);
      const removeButton = document.getElementById(bookId.toString());
      if (removeButton !== null) {
        removeButton.addEventListener('click', () => {
          Book.removeBook(bookId);
        });
      }
    });
  };
}
