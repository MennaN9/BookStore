const  Books  = require('../models/books.model');
const category = require('../models/category.model');

///////////////////////////////////////////////////
//admin
//user as a admin  addBook,allBook, editBook,showSingleBookById,DeleteBook
addBook = async (req, res) => {
    try {
      const bookData = new Books(req.body)
      await bookData.save()
      res.status(200).send({
        status: true,
        result: bookData,
        message: 'book inserted successfuly'
      })
    }
    catch (e) {
      res.status(500).send({
        status: false,
        result: e,
        message: 'error adding book'
      })
    }
  }
  allBook = async (req, res) => {
    try {
      const books = await Books.find().populate('Category')
      res.status(200).send({
        status: true,
        result: books,
        message: "successfuly show all books"
      })
    }
    catch (e) {
      res.status(500).send({
        status: false,
        result: e,
        message: "unfetched books"
      })
    }
  }
  editBook = async (req, res) => {
    try {
      const _id = req.params.id
      const updatedData = req.body;
      await Books.findByIdAndUpdate(_id,
        {
          authors: updatedData.authors,
          price: updatedData.price,
          bookName: updatedData.bookName,
          type: updatedData.type,
          cover: updatedData.cover,
          desc: updatedData.desc,
          numPage: updatedData.numPage,
          countInStock: updatedData.countInStock,
          numReviews: updatedData.numReviews,
          language: updatedData.language,
        }, { new: true },);
        res.status(200).send({
          status: true,
          result: updatedData,
          message: "updated book data"
        })
  
    } catch (e) {
      res.status(500).send({
        status: false,
        result: e,
        message: "error in editing"
      })
    }
  }
  
  showSingleBookById = async (req, res) => {
    try {
      const _id = req.params.id
      const showBook = await Books.findById(_id).populate('Category')
      if (!showBook) res.send('book not found')
      res.status(200).send({
        status: true,
        result: showBook,
        message: 'successfuly show single book'
      })
    }
    catch (e) {
      res.status(500).send({
        status: false,
        result: e,
        message: 'error show single book'
      })
    }
  }
  
  DeleteBook = async (req, res) => {
    try {
      const _id = req.params.id
      const deleteBook = await Books.findByIdAndDelete(_id)
      if (!deleteBook) res.send('book not found')
      res.status(200).send({
        status: true,
        result: deleteBook,
        message: 'book  successfuly deleted'
      })
    }
    catch (e) {
      res.status(500).send({
        status: false,
        result: e,
        message: 'error delete book'
      })
    }
  }
  module.exports = {
    addBook,
    allBook,
    editBook,
    showSingleBookById,
    DeleteBook
  }