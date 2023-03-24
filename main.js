let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Add validation to form
const addBook = (ev) => {
  ev.preventDefault;
  let newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").value
  );
  myLibrary.push(newBook);
  document.querySelector("form").reset();
};

document.getElementById("addButton").addEventListener("click", addBook);
