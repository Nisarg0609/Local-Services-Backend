import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true  },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required : true
    },
    country:{
        type:String,
        required : true
    },
    city:{
        type:String,
        required : true
    },
    category:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required : true
    },
    logo:{
        type:String,
        required : true
    },
    address:{
        type:String,
    },
})

const ServiceModel = mongoose.model('ServiceModel',serviceSchema)

export default ServiceModel