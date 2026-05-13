
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
    this.toggleReadStatus = function () {
        if (this.read === 'Read') {
            this.read = 'Not Read';
        } else { this.read = 'Read';
        }
    }
}

function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    let add = library.push(newBook)
    console.log(library);
    
}
addBookToLibrary('The Children of Hurin', 'J.R.R. Tolkien', 320, 'Read');


const submitBtn = document.querySelector('#submit-btn');

function displayBook () {
    const bookCont = document.querySelector('.books')
    
    bookCont.innerHTML = '';

    library.forEach(
        (book) => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book');


            bookCard.innerHTML = `
            <div class="book-title tag"><strong>Title:</strong><h4>${book.title}</h4>
            </div>
            <div class="book-author tag"><strong>Author:</strong><h4> ${book.author}</h4></div>
            <div class="book-pages tag"><strong>Pages:</strong><h4> ${book.pages}</h4></div>
            <div class="book-read tag"><strong>Status:</strong><h4 class='status-text'> ${book.read}</h4></div>
            <div><button class="status status-remove">Remove Book</button> <button class="status status-read">Read Status</button></div>
            `;

            // 1. Target the specific buttons inside this individual card wrapper
            const readBtn = bookCard.querySelector('.status-read');
            const removeBtn = bookCard.querySelector('.status-remove');
            
            // 2. Wire up the Read Status toggle event
            readBtn.addEventListener('click', () => {
                if (typeof book.toggleReadStatus === 'function') {
                    book.toggleReadStatus(); // Runs your prototype function
                } else {
                    // Fallback for hardcoded objects not instantiated via 'new Book()'
                    book.read = (book.read === 'Read') ? 'Not Read' : 'Read';
                }
                displayBook(); // Refresh screen view with new state
            });
            
           
            bookCont.appendChild(bookCard);
        }
    )

}

displayBook()



// create Book btn

const createBook = document.querySelector('#create-nb');
const bookForm = document.querySelector('form')

createBook.addEventListener('click', function () {
    bookForm.classList.toggle('book-form-f')
    // createBook.style.display = 'none';

})

bookForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const read = document.querySelector('#book-read').value;

    addBookToLibrary(title, author, pages, read);

    displayBook()

    bookForm.reset(); 
});


