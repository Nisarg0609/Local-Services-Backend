import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    email :{
        type : String,
        require : true   
    },
    description :{
        type:String,
        required : true
    },
    service : {
        type: String,
        required : true
    },
    image :{
        type : String,
        required : true
    },
    count:{
        type:Number,
        default:0
    }
})

const PostCategory = mongoose.model('PostCategory',categorySchema)

export default PostCategory