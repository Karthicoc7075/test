const mongoose = require("mongoose");

const mongodbConnect = async (url) => {
  try {
    await mongoose.connect(url, );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

module.exports = mongodbConnect;
