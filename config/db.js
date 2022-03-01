const mongoose = require('mongoose')
// const NODE_ENV = development
// const PORT = 5000
// const  MONGO_URI = "mongodb+srv://gopalkrishna97:Gopal123@quizapp.7rjzg.mongodb.net/quizapp?retryWrites=true&w=majority"

const connectDB = async () =>{
   const conn = await mongoose.connect(process.env.MONGO_URI,{
       
   });
   console.log(`MongoDB Connnected : ${conn.connection.host}`);
}

module.exports = connectDB;

