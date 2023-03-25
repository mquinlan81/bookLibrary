const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readBtn = document.getElementById("read-button");
const bookType = document.getElementById("bookType");
const showForm = document.getElementById("showForm");
const addBookForm = document.querySelector("form");

let myLibrary = [];

function Book(title, author, pages, bookType, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookType = bookType;
  this.read = read;
}

//Add validation to form
const addBook = (ev) => {
  ev.preventDefault;
  let newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("bookType").value,
    document.getElementById("read-button").textContent
  );
  myLibrary.push(newBook);
  document.querySelector("form").reset();
  addBookForm.style.display = "none";
};

document.getElementById("addBookBtn").addEventListener("click", addBook);

let sampleBook = new Book("The Hobbit", "J.R.R. Tolken", 295, "fiction", "Yes");
myLibrary.push(sampleBook);

let sampleBook2 = new Book(
  "Lord of the Rings",
  "J.R.R. Tolken",
  337,
  "fiction",
  "No"
);
myLibrary.push(sampleBook2);

const bookRead = (ev) => {
  ev.preventDefault;
  readBtn.classList.toggle("disabled");
  if (readBtn.textContent === "Yes") {
    readBtn.textContent = "No";
    this.value = false;
  } else {
    readBtn.textContent = "Yes";
    // value = true;
  }
};

readBtn.addEventListener("click", bookRead);

showForm.addEventListener("click", () => {
  if (addBookForm.style.display === "none") {
    addBookForm.style.display = "block";
  } else {
    addBookForm.style.display = "none";
  }
});
