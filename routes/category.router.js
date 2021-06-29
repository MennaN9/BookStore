const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = new express.Router()

router.post('/addCategory', categoryController.addCategory);
router.get('/allCategory', categoryController.allCategory);
router.get('/showSingleCategoryById/:id', categoryController.showSingleCategoryById);
router.patch('/editCategory/:id', categoryController.editCategory);
router.delete('/deleteCategory/:id', categoryController.deleteCategory);
module.exports = router