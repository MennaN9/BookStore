const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  booktype:{type:String,required: true}    
  });
  
// categorySchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });

// categorySchema.set('toJSON', {
//     virtuals: true,
// });

module.exports = mongoose.model('Category', categorySchema);