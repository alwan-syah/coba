class Book {
  constructor(code, title, publisher, publicationYear, author) {

    // Properti
    this.code = code;
    this.title = title;
    this.publisher = publisher;
    this.publicationYear = publicationYear;
    this.author = author;

    
  }
}
// const commonResponse = {
//   // Objek konstanta untuk respons
// };
// class Response {
//   constructor() {
//     // Properti respons
//   }
// }
// class Validate {
//   constructor() {
//     // Constructor
//   }
// }
// class BookService extends Validate {
//   constructor() {
//     // Constructor
//   }
// }
// const main = () => {
//   // Fungsi utama
// };
// main();

// const commonResponse = {
//     success: "Success";
//     data[]
// }


class NotFoundException extends Error {
  constructor(message) {
    super(message);
  }
}

class BookManager {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  searchBookByTitle(title) {
    const filteredBooks = this.books.filter(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (filteredBooks.length === 0) {
      throw new NotFoundException(`Book with title "${title}" not found`);
    }
    return filteredBooks;
  }

  searchBookByCode(code) {
    const book = this.books.find((book) => book.code === code);
    if (!book) {
      throw new NotFoundException(`Book with code "${code}" not found`);
    }
    return book;
  }

  deleteBookByCode(code) {
    const index = this.books.findIndex((book) => book.code === code);
    if (index === -1) {
      throw new NotFoundException(`Book with code "${code}" not found`);
    }
    this.books.splice(index, 1);
  }

  getAllBooks() {
    return this.books.slice(); // Return a copy to avoid direct modification
  }
}

let novel = new Book("123", "Jaga dia", "Gramed", "2005", "Tera Lae");
console.log(novel.addBook);
