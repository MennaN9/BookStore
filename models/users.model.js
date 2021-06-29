const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: {type: String,required: true},
  lname: {type: String,required: true},
  email: {type: String,required: true},
  age:{type: Number},
  phone:{type: Number},
  zip:{type: String},
  favBooks:{},
  isAdmin:{type:Boolean},
  password:{type: String},
  verifyCode:{type:String},
  country:{type: String},
   city:{type: String},
   street:{type: String},
   apartment:{type: String},
  userName: {type: String},
  suggestName:{type: String},
});
userSchema.pre('save', async function(){
  //check mwgod or not lw mwgod generate suggest user Name
  if(!this.userName) this.userName = this.fname+' '+this.lname
   const checkName = await User.findOne({userName})
   let ramdomNum = Math.round(Math.random() * 1000)
   console.log(ramdomNum)
   if(checkName)  throw new Error('Username already Exist')
  // else this.suggestName = this.fname+' '+this.lname+ramdomNum
});


module.exports = mongoose.model('Users', userSchema);