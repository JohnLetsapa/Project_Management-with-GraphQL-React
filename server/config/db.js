const mongoose = require("mongoose");


const connectDB = async (url) => {
  const conn = mongoose.connect(url);
  console.log(`MongoDB Connected: ${conn.connection}`.cyan.underline.bold);
};

module.exports = connectDB;
