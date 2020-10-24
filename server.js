const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
constcolors = require("colors");
const connectDB = require('./Config/db')

// Routers
const bootcamps = require("./Routers/bootcamps");
const courses = require("./Routers/courses");
const review = require("./Routers/review");
const users = require("./Routers/users");
const auth = require("./Routers/auth");
// const router = require("./Routers/router")


// load env vars
dotenv.config({ path: './Config/config.env' });

// connect to mongo DB
connectDB()



const app = express();


// const showUrl = require("./Middleware/showUrl")
//  app.use(showUrl)



app.use("/api/bootcamps", bootcamps);

app.use("/api/courses", courses);

app.use("/api/review", review);

app.use("/api/users", users);

app.use("/api/auth", auth);




// dev loggin middleware
// if(process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }



const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, () => {
  console.log(`server is running in ${process.env.NODE_ENV} mode & on port ${PORT}`.magenta.bgYellow.bold)
})


// Handle unhandled promise rejections
process.on('unhandledRejection', (req, res) => {
  console.log(`ERROR: ${err.message}`.yellow.bgMagenta.italic);
  // close server & exit process
  server.close(() => process,exit(1))
})






