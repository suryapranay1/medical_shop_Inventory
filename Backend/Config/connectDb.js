const mongoose = require("mongoose");

const connectDb = async () => {
  DB =
    "mongodb+srv://suryapranay:Surya123@cluster0.n6p2lpx.mongodb.net/MedicalShop?retryWrites=true&w=majority";
  try {
    await mongoose.connect(DB);
    console.log(`server running on ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
