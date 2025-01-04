import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from'dotenv'
import router from './routes/userRoutes.js';

const app=express();
app.use('/api/user',router);
app.use(bodyParser.json());
dotenv.config();
const PORT=process.env.PORT || 3500;
const MONGOURL=process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("MongoDB connected");
    app.listen(PORT,()=>
    {
        console.log(`server is running in port ${PORT}`);
    })
})