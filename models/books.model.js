const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    authors:[
        {authName:{type:String,required:true},
        desc:{type:String,required:true},
        anothWork:{type:String,required:true}}
    ],
//   type:{type:String,
//        enum:['Religious','programming','novels','fantasy','science'],
//        required:true
//       },
  category:{ type: mongoose.Schema.Types.ObjectId,
              ref:'Category',
              required: true
          },
  bookName: {type: String,required: true},
  price: {type: Number,required: true,min:[0,'must more than 0'],},
  desc: {type: String,required: true},
  cover: {type: String,required: true},
  covers:[{type: String}],
  language: {type: String,required: true}, 
  numPage:{type:Number,required: true,min:[0,'must more than 0'],},
  countInStock:{type:Number,required: true,min:[0,'must more than 0'],},
  richDes:{type: String,default:''},// comment user 
  rating:{type:Number,default:0},
  numReviews:{type:Number,default:0},
  isFeatured:{type:Boolean,default:false},
  dateInsert:{type:Date,default:Date.now},
  
});

module.exports = mongoose.model('Books', bookSchema);