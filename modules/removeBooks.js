export const removeBooks = ( Books, bookId, books, bookList ) => {
  // first remove event listener for the book
  const removeButton = document.getElementById(bookId.toString());
  removeButton.removeEventListener("click", () => {});
  books = books.filter((book) => book.id !== bookId);
  // shift ids of books array elements starting from the removed element
  books.forEach((book) => {
    if (book.id > bookId) book.id -= 1;
  });
  // update book list html content with every action of removing books
  // replace with updating
  bookList.innerHTML = "";
  books.forEach((book) => {
    bookList.innerHTML += `
      <div class='flex'>
      <div class='flex-spaced w-100' id='${
        book.id % 2 === 0 ? "evens" : "odds"
      }'>
        <div class ='flex book-title-authors'>
          <div class='book-title'>"${book.title}" by </div>
          <div class='book-author'>&nbsp;${book.author} </div>
        </div>
        <div class='container'> 
         <button class='removes' id='${book.id}'>Remove</button>
      </div>
      </div>
    </div>
    `;
  });
  books.forEach((book) => {
    // while creating a book element each time create event listener
    // for every remove button of the book list html element
    const removeButton = document.getElementById(book.id.toString()); // remove0
    removeButton.addEventListener("click", () => {
      const bookId = Number(Number(book.id));
      removeBooks(bookId);
    });
  });
  localStorage.setItem("bookdata", JSON.stringify(books));
  titles.focus();
};
