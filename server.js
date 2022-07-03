const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mucht.mongodb.net/batch104`
  )
  .then(() => console.log("Connected to DB"));
