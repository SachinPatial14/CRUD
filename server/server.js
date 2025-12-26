const mongoose = require('mongoose')
const dotenv = require("dotenv");
const app = require('./app');

dotenv.config();

//mongoDB Connection

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('MongoDB Connected')
}).catch((error)=>{
    console.log("MongoDb Connection Error",error)
})

const port = process.env.PORT || 5001 ;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})