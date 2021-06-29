const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderItemSchema = new Schema({
    books:[],
    quantity:{type:Number},
    
  });
module.exports = mongoose.model('OrderItem', orderItemSchema);