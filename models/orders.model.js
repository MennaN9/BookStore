const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
  orderItems:[],
  shippingAddress1:{type: String,required: true},
  shippingAddress2:{type: String,required: true},
  country:{type: String},
  city:{type: String},
  street:{type: String},
  apartment:{type: String},
  phone:{type: Number},
  zip:{type: String},
  status:{type: String}, // status of order binding shipping ,  delivered
  totalPrice: {type: Number,required: true,min:[0,'must more than 0'],},
  user:{},
  dateOrdered:{type:Date,default:Date.now},
  
});

module.exports = mongoose.model('Orders', orderSchema);