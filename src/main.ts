// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
import { addBook, listBooks, searchBook } from './functions/bookManager';
//   2. Tambahkan beberapa data buku untuk testing
const book1: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publicationYear: 1925,
};

const book2: Book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  publicationYear: 1960,
};

addBook(book1);
addBook(book2);
//   3. Uji fungsi listBooks untuk melihat semua data
listBooks();
//   4. Uji fungsi searchBook dengan dan tanpa parameter
searchBook('The Great Gatsby');
searchBook();
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini

searchBook();
