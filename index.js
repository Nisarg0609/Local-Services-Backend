import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoutes.js'
import categoryRouter from './routes/categoryRoutes.js'
import serviceRouter from './routes/serviceRoutes.js'
import dotenv from 'dotenv'

const app = express();

dotenv.config()

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())

app.use('/users',userRouter)
app.use('/category',categoryRouter)
app.use('/service',serviceRouter)

app.get('/',(req,res)=>{
    res.send('APP IS RUNNING')
})

const PORT = process.env.PORT || 5000
mongoose.set("strictQuery", false);
// mongodb+srv://NisargPatel:PSUfiCqclOEvkc3f@cluster0.lli3wwz.mongodb.net/Memories?retryWrites=true&w=majority
// mongodb+srv://NisargPatel:PSUfiCqclOEvkc3f@cluster0.lli3wwz.mongodb.net/LocalServices?retryWrites=true&w=majority
// mongodb+srv://NisargPatel:<password>@cluster0.lli3wwz.mongodb.net/test
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
})
.catch((error)=>{
    console.log(error);
})  