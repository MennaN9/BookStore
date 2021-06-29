const express = require('express');
const bookController = require('../controllers/book.controller');
const router = new express.Router()

//as admin
router.post('/addBook', bookController.addBook);
router.get('/allBooks', bookController.allBook);
router.patch('/editBook/:id', bookController.editBook);//////?????????
router.get('/showSingleBook/:id', bookController.showSingleBookById);
router.delete('/deleteBook/:id', bookController.DeleteBook);
router.get('/numOfBook', bookController.numOfBook); // to get all books number
router.get('/featuredBooks', bookController.featuredBooks);//to get all featured books
/////////// need to filter by category

module.exports = router