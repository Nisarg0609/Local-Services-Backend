import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true  },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required : true
    },
    rating:{
        type:Number,
        default:0
    }
})

const userModel = mongoose.model('userModel',userSchema)

export default userModel