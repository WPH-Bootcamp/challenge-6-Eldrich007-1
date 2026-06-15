"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
function addBook(newBook) {
    books_1.BookCollection.push(newBook);
}
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
function listBooks() {
    console.log('Daftar Buku:');
    books_1.BookCollection.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" oleh ${book.author} (${book.publicationYear})`);
    });
}
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
function searchBook(title) {
    if (title) {
        const foundBooks = books_1.BookCollection.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(`Buku yang ditemukan dengan judul "${title}":`);
            foundBooks.forEach((book, index) => {
                console.log(`${index + 1}. "${book.title}" oleh ${book.author} (${book.publicationYear})`);
            });
        }
        else {
            console.log(`Tidak ditemukan buku dengan judul "${title}".`);
        }
    }
    else {
        listBooks();
    }
}
