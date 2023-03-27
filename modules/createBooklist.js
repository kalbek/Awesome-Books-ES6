export const createBookList = (bookList, books) => {
  bookList.innerHTML = "";
  books.forEach((book) => {
    bookList.innerHTML += `
      <div class='flex'>
        <div class='flex-spaced w-100' id='${
          book.id % 2 === 0 ? "evens" : "odds"
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
  books.forEach((book) => {
    // for every remove button of the book list html element
    const removeButton = document.getElementById(book.id.toString());
    if (removeButton !== null) {
      removeButton.addEventListener("click", () => {
        const bookId = Number(book.id);
        removeBooks(Books, bookId, books, bookList);
      });
    }
  });
};
