"use strict";
class Book {
    constructor(title, author, isbn, isIssued = false) { Object.assign(this, { title, author, isbn, isIssued }); }
    issueBook() { if (this.isIssued) return false; this.isIssued = true; return true; }
    returnBook() { if (!this.isIssued) return false; this.isIssued = false; return true; }
    getDetails() { return `${this.title} by ${this.author} | ISBN: ${this.isbn} | ${this.isIssued ? "Issued" : "Available"}`; }
}
const books = [
    new Book("The Hobbit", "J. R. R. Tolkien", "ISBN001"),
    new Book("1984", "George Orwell", "ISBN002"),
    new Book("Clean Code", "Robert C. Martin", "ISBN003", true)
];
function displayAvailableBooks() {
    console.log("Available books:");
    books.filter(book => !book.isIssued).forEach(book => console.log(book.getDetails()));
}
function issueBookByISBN(isbn) {
    const book = books.find(item => item.isbn === isbn);
    if (!book) return console.log(`No book found with ISBN ${isbn}.`);
    console.log(book.issueBook() ? `Book issued: ${book.getDetails()}` : `"${book.title}" is already issued.`);
}
displayAvailableBooks();
console.log("\nIssue a book:");
issueBookByISBN("ISBN002");
console.log("\nAvailable after issue:");
displayAvailableBooks();
