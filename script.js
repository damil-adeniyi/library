
const library = [];

function Book (title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    let add = library.push(newBook)
    console.log(library);
    
}
addBookToLibrary('The Children of Hurin', 'J.R.R. Tolkien', 320, 'Read');
