
const library = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 310, read: 'Read'},
    {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', pages: 1178, read: 'Read'},
    {title: 'The Silmarillion', author: 'J.R.R. Tolkien', pages: 365, read: 'Not Read'},    
    {title: 'The Children of Hurin', author: 'J.R.R. Tolkien', pages: 320, read: 'Read'},
    {title: 'The Unfinished Tales', author: 'J.R.R. Tolkien', pages: 472, read: 'Not Read'}
];

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

const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;
    const read = bookRead.value;

    addBookToLibrary(title, author, pages, read);
});
