const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path')
const { validationResult } = require("express-validator");
const {adminAuthCheck} = require('./middleware/adminAuthCheck')


var userRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var adminAuthRoute = require("./routes/adminAuthRoute");

const port = 3000;

const validationMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(validationMiddleware); // Your express-validator middleware

app.use("/admin",adminAuthCheck, adminRouter);
app.use("/users", userRouter);
app.use('/admin-auth', adminAuthRoute)


// Set up mongoose connection
const mongoDB = "mongodb://localhost:27017/resume_screening_db";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
