const  Books  = require('../models/books.model');
const Category = require('../models/category.model');
const mongoose = require('mongoose');
///////////////////////////////////////////////////
//admin
//user as a admin  addBook,allBook, editBook,showSingleBookById,DeleteBook
addBook = async (req, res) => {
    try {
      const category = await Category.findById(req.body.category);
      if(!category) return res.status(400).send('Invalid Category')
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
  
  showSingleBookById = async (req, res) => {
    try {
      const _id = req.params.id
      const showBook = await Books.findById(_id).populate('Category')
      if (!showBook) res.status(404).send('book not found')
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
      if(!mongoose.isValidObjectId(req.params.id)) return res.status(400).send('invalid book id')
      const _id = req.params.id
      const deleteBook = await Books.findByIdAndRemove(_id)
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
  editBook = async (req, res) => {////////////////////////////////
    try {
      // if(!mongoose.isValidObjectId(req.params.id)){
      //   return res.status(400).send('Invalid book Id')
      // }
      //  const category = await Category.findById(req.body.category);
      // if(!category) return res.status(400).send('Invalid Category')
     const edit = await Books.findByIdAndUpdate(req.params.id,
        {
          authors: req.body.authors,
          price: req.body.price,
          bookName: req.body.bookName,
          cover: req.body.cover,
          desc: req.body.desc,
          numPage: req.body.numPage,
          countInStock:req.body.countInStock,
          numReviews:req.body.numReviews,
          language: req.body.language,
          category: req.body.category,
          richDes: req.body.richDes,
          dateInsert:req.body.dateInsert,
          rating: req.body.rating,
          isFeatured: req.body.isFeatured,
        },
       //  { new: true }
         );
        await Books.save()
        res.status(200).send({
          status: true,
          result: edit,
          message: "updated book data"
        })
  
    } catch (e) {
      res.status(500).send({
        status: false,
        result: e,
        message: "error"
      })
    }
  }
  numOfBook=async(req,res)=>{
    const bookCount = await Books.countDocuments((count)=> count)
    try {
      if(!bookCount){
        res.status(500).send({
          status: false,
         // result: e,
          message: "out of the stock"
        })
      }
      res.status(200).send({
        status: true,
        result: bookCount,
        message: "in the stock"
      })
    } catch (e) {
      res.status(500).send({
        status: false,
        result: e,
        message: "error in editing"
      })
    }
 }
 featuredBooks=async(req,res)=>{
  const featuredBook = await Books.find({isFeatured:true})
  try {
    if(!featuredBook){
      res.status(500).send({
        status: false,
       // result: e,
        message: "no featured book"
      })
    }
    res.status(200).send({
      status: true,
      result: featuredBook,
      message: "featured books"
    })
  } catch (e) {
    res.status(500).send({
      status: false,
      result: e,
      message: "error in show data"
    })
  }
}
  module.exports = {
    addBook,
    allBook,
    editBook,
    showSingleBookById,
    DeleteBook,
    numOfBook,
    featuredBooks
  }