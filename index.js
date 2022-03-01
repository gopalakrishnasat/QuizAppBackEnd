const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// Load ENV vars
dotenv.config({ path: './config/config.env' })
const cors = require('cors')





//connect to database
connectDB()

const app = express();
//body parser
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
  );
  next();
});
//middleware
const logger = (req, res, next) => {

  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}
app.use(cors())

app.use(logger)

// Routes  files
const userRoutes = require('./routes/user')
const questionRoutes = require('./routes/questions')
// mount routers
app.use(userRoutes);
app.use(questionRoutes);



const PORT = process.env.PORT || 3000
const server = app.listen(PORT)

process.on('unhandledRejection', (err, promise) => {
  console.log(`err:${err.message}`);
  server.close(() => process.exit(1))
})

// console.log('hello world')