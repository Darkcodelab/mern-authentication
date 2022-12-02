const mongoose = require("mongoose");

const connectDB = async (MONGO_URI) => {
  try {
    const conn = await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("Mongoose connected: ", conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
