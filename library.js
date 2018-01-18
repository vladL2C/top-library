let el = document.querySelector(".button.is-info");
let modal = document.querySelector(".modal");
let column = document.querySelector(".column.is-three-fifths.is-offset-one-fifth");
let form = document.querySelector('.addbook');
let addBookButton = document.querySelector('a.button.is-success');


//add a book event
addBookButton.addEventListener('click',addBookToLibrary);

//The Modal listeners
el.addEventListener('click', function(e){
  modal.classList.add('is-active');
  let modalClose = document.querySelector('.modal-close.is-large');
  modalClose.addEventListener('click', function(){
    modal.classList.remove('is-active');
  })
});

let myLibrary = [];

//constructor
function Book(author, title, number, read) {
  this.author = author;
  this.title = title;
  this.number = number;
  this.read = read;
}

myLibrary.push(new Book("Roald Dahl", "harry potter", 1000, true));

function addBookToLibrary() {
  myLibrary.push(new Book(form.author.value, form.title.value,
    form.number.value, form.read.checked));
  modal.classList.remove('is-active');
  column.innerHTML = "";
  render();
}

function render() {
  myLibrary.forEach((book) => {
    createCard(book);
  });
}

function createCard(book) {

  let cardContainer = document.createElement('div');
  cardContainer.setAttribute('class','card');
  document.body.appendChild(cardContainer);

  let headerEl = document.createElement('header');
  headerEl.setAttribute('class','card-header');
  cardContainer.appendChild(headerEl);

  let pTag = document.createElement('p');
  pTag.setAttribute('class','card-header-title');
  headerEl.appendChild(pTag);
  pTag.textContent = book.title;

  let cardContent = document.createElement('div');
  cardContent.setAttribute('class','card-content');
  cardContainer.appendChild(cardContent);

  let mainContent = document.createElement('div');
  mainContent.setAttribute('class','content');
  cardContent.appendChild(mainContent);

  let footer = document.createElement('footer');
  footer.setAttribute('class','card-footer');
  cardContainer.appendChild(footer);

  let footerItem = document.createElement('a');
  footerItem.setAttribute('class','card-footer-item');
  footerItem.textContent = "Read";
  footer.appendChild(footerItem);

  let footerItem2 = document.createElement('a');
  footerItem2.setAttribute('class','card-footer-item');
  footerItem2.textContent = "Delete This Book";
  footer.appendChild(footerItem2);
  column.appendChild(cardContainer);
  footerItem2.addEventListener('click',function(){
    
    myLibrary.splice(0,1);
    cardContainer.parentNode.removeChild(cardContainer);
  });
}

