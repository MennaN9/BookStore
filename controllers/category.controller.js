const category = require('../models/category.model');

addCategory= async(req,res)=>{
    try {
        const newCategory =new category (req.body)
       await newCategory.save()
        res.status(200).send({
          status: true,
          result: newCategory,
          message: 'category inserted successfuly'
        })
      }
      catch (e) {
        res.status(500).send({
          status: false,
          result: e,
          message: 'error adding category'
        })
      }
}
allCategory= async(req,res)=>{
    try {
        const allCategory = await category.find()
        res.status(200).send({
          status: true,
          result: allCategory,
          message: "successfuly show all category"
        })
    } catch (e) {
        res.status(500).send({
            status: false,
            result: e,
            message: 'error show all category'
          })
    }
}
deleteCategory= async(req,res)=>{
  try{
    _id = req.param.id
    const delcategory =await category.findByIdAndDelete(_id)
    if (!delcategory) res.send('category not found')
    res.status(200).send({
      status: true,
      result: delcategory,
      message: 'category  successfuly deleted'
    })
  }catch(e){
    res.status(500).send({
      status: false,
      result: e,
      message: 'error delete category'
    })
  }
}
showSingleCategoryById = async (req, res) => {
  try {
    const _id = req.params.id
    const showCategory = await category.findById(_id)
    if (!showCategory) res.send('Category not found')
    res.status(200).send({
      status: true,
      result: showCategory,
      message: 'successfuly show single Category'
    })
  }
  catch (e) {
    res.status(500).send({
      status: false,
      result: e,
      message: 'error show single Category'
    })
  }
}
editCategory = async (req, res) => {
  try {
    const _id = req.params.id
    const editCategory = await category.findByIdAndUpdate(_id,
      {
      booktype:req.body.booktype
    },
    {new:true}
    )
    if (!editCategory) res.send('Category not found')
    res.status(200).send({
      status: true,
      result: showCategory,
      message: 'successfuly edit Category'
    })
  }
  catch (e) {
    res.status(500).send({
      status: false,
      result: e,
      message: 'error edit Category'
    })
  }
}

module.exports = {
    addCategory,
    allCategory,
    deleteCategory,
    showSingleCategoryById,
    editCategory
}