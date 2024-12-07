const Library = [];

function Book(title, author, pages, pubyear){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pubyear = pubyear;
    addBookToLibrary(this);
};

function addBookToLibrary(book){
    Library.push(book);
};

const opener = document.querySelector(".add");
const dialog = document.querySelector("#dia");
const closer = document.querySelector(".close");

opener.addEventListener("click", () => {
    dialog.showModal();
})

closer.addEventListener("click", () => {

    const dtitle = document.querySelector("#title")
    const dauthor = document.querySelector("#author")
    const dpages = document.querySelector("#pages")
    const dpubyear = document.querySelector("#pubyear")

    const book = new Book(dtitle.value, dauthor.value, dpages.value, dpubyear.value)

    dialog.close();
})

for(let book of Library){
    let card = document.createElement("div");
    card.classList.add("book");
    
    let title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;
    let author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    let pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    let pubyear  = document.createElement("p");
    pubyear.textContent = `Published: ${book.pubyear}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(pubyear);

    document.querySelector(".display").appendChild(card);
}


