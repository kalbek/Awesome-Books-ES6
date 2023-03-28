import Book from '../modules/Book.js';
// update UI of the list books section
export const createBookList = (bookList) => {
  const books = Book.getBooks();
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
