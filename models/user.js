import mongoose from 'mongoose'

// Defining Schema
const userSchema = new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  age:{type:Number, required:true, min:18, max:60},
  phone: {type:mongoose.Decimal128, required:true, validate:(value)=> value >= 5000.5}
})

// Model
const userModel = mongoose.model("user", userSchema)

export default userModel
