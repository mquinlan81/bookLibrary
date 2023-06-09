const title = document.getElementById("title");
const sortRead = document.getElementById("show-books-read");
const sortNotRead = document.getElementById("show-books-not-read");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readBtn = document.getElementById("read-button");
const bookType = document.getElementById("bookType");
const showForm = document.getElementById("showForm");
const addBookForm = document.querySelector("form");
const main = document.querySelector("main");

//Form & Array Controls
let myLibrary = [];

function Book(title, author, pages, bookType, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookType = bookType;
  this.read = read;
}

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
  createCardBookAdded(newBook);
};

document.getElementById("addBookBtn").addEventListener("click", addBook);

//------   Sample Books Added to Array ------------
let sampleBook = new Book("The Hobbit", "J.R.R. Tolken", 295, "Fiction", "Yes");
myLibrary.push(sampleBook);

let sampleBook2 = new Book(
  "Lord of the Rings",
  "J.R.R. Tolken",
  337,
  "Fiction",
  "No"
);
myLibrary.push(sampleBook2);

const bookRead = (ev) => {
  ev.preventDefault;
  readBtn.classList.toggle("read");
  if (readBtn.textContent === "No") {
    readBtn.textContent = "Yes";
  } else {
    readBtn.textContent = "No";
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

//creating the catalog card
function BookCard(prop) {
  const catalogCard = document.createElement("div");
  const ccTitle = document.createElement("h3");
  const ccAuthor = document.createElement("h4");
  const ccPages = document.createElement("p");
  const ccType = document.createElement("p");
  const ccButtons = document.createElement("div");
  const ccReadBtn = document.createElement("button");
  const ccDeleteBtn = document.createElement("button");

  catalogCard.classList.add("catalogCard");
  ccTitle.classList.add("card-text");
  ccAuthor.classList.add("card-text");
  ccPages.classList.add("card-text");
  ccType.classList.add("card-text");
  ccReadBtn.classList.add("read-button");
  ccReadBtn.classList.add("card-read-button");
  ccReadBtn.classList.add("card-btn");
  ccDeleteBtn.classList.add("ccDeleteBtn");
  ccButtons.classList.add("ccButtons");

  main.appendChild(catalogCard);
  catalogCard.appendChild(ccTitle);
  catalogCard.appendChild(ccAuthor);
  catalogCard.appendChild(ccPages);
  catalogCard.appendChild(ccType);
  catalogCard.appendChild(ccButtons);
  ccButtons.appendChild(ccDeleteBtn);
  ccButtons.appendChild(ccReadBtn);

  ccTitle.textContent = `${prop.title}`;
  ccAuthor.textContent = `Author: ${prop.author}`;
  ccPages.textContent = `Pages: ${prop.pages}`;
  ccType.textContent = `Type: ${prop.bookType}`;
  ccReadBtn.textContent = `${prop.read}`;
  ccReadBtn.title = "Did you read this book?";
  ccDeleteBtn.textContent = "X";
  ccDeleteBtn.title = "Delete this book";

  if (prop.read === "Yes") {
    catalogCard.classList.add("read");
    ccReadBtn.classList.add("read");
  }

  ccDeleteBtn.addEventListener("click", () => {
    myLibrary.splice(prop, 1);
    catalogCard.remove();
  });

  ccReadBtn.addEventListener("click", () => {
    ccReadBtn.classList.toggle("read");
    catalogCard.classList.toggle("read");
    if (ccReadBtn.textContent === "No") {
      ccReadBtn.textContent = "Yes";
      prop.read = "Yes";
    } else {
      ccReadBtn.textContent = "No";
      prop.read = "No";
    }
  });

  sortRead.addEventListener("click", () => {
    if (prop.read === "No" && catalogCard.style.display === "block") {
      catalogCard.style.display = "none";
    } else {
      catalogCard.style.display = "block";
    }
  });

  sortNotRead.addEventListener("click", () => {
    if (prop.read === "Yes" && catalogCard.style.display === "block") {
      catalogCard.style.display = "none";
    } else {
      catalogCard.style.display = "block";
    }
  });

  // Functionality to add: Yes/No button change property of read and color of button, delete button to delete array item
}

function createCardBookAdded(prop) {
  let newCard = BookCard(prop);
}

function createCardPageLoad() {
  myLibrary.forEach((prop) => {
    let newCard = BookCard(prop);
  });
}

createCardPageLoad();
