let Library = [];

function Book(title, author, pages, pubyear){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pubyear = pubyear;
    addBookToLibrary(this);
};

Book.prototype.toggleRead = function (){
    this.readStatus =! this.readStatus;
}

function addBookToLibrary(book){
    Library.push(book);
};

const opener = document.querySelector(".opener");
const dialog = document.querySelector("dialog");
const closer = document.querySelector(".closer");

opener.addEventListener("click", () => {
    dialog.showModal();

})

closer.addEventListener("click", () => {
    addBook();
    dialog.close();
})

function addBook(){

    document.querySelector(".display").innerHTML="";

    const dtitle = document.getElementById("title").value;
    const dauthor = document.getElementById("author").value;
    const dpages = document.getElementById("pages").value;
    const dpubyear = document.getElementById("pubyear").value;

    const libElement = new Book(dtitle, dauthor, dpages, dpubyear);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("pubyear").value = "";

    for(let book of Library){
        let card = document.createElement("div");
        card.classList.add("book");
        
        const title = document.createElement("p");
        title.textContent = `Title: ${book.title}`;
        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        const pubyear  = document.createElement("p");
        pubyear.textContent = `Published: ${book.pubyear}`;

        const delbtn = document.createElement("button");
        delbtn.textContent= "Delete";
        delbtn.addEventListener("click", () => {
            card.remove();
            Library = Library.filter(b => b!==book);
        });

        const readbtn = document.createElement("button");
        readbtn.textContent = book.readStatus ? "Read" : "Not Read";

        readbtn.addEventListener("click", () => {
        book.toggleRead();
        readbtn.textContent = book.readStatus ? "Read" : "Not Read";
        })
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(pubyear);
        card.appendChild(delbtn);
        card.appendChild(readbtn);

        document.querySelector(".display").appendChild(card);
    }
}