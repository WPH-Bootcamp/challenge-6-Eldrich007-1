"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
const bookManager_1 = require("./functions/bookManager");
//   2. Tambahkan beberapa data buku untuk testing
const book1 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925,
};
const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 1960,
};
(0, bookManager_1.addBook)(book1);
(0, bookManager_1.addBook)(book2);
//   3. Uji fungsi listBooks untuk melihat semua data
(0, bookManager_1.listBooks)();
//   4. Uji fungsi searchBook dengan dan tanpa parameter
(0, bookManager_1.searchBook)('The Great Gatsby');
(0, bookManager_1.searchBook)();
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
console.log('Book Management Application - Week 6');
console.log('=====================================');
// Mulai pengujian di bawah ini
(0, bookManager_1.searchBook)();
