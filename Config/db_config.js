const mongoose = require("mongoose");
require("dotenv").config();
module.exports = {
  connectDatabase: async (req, res) => {
    try {
      //mongodb+srv://khofilyndon2018:nvQRNQcqteaKQQHy@cluster0.5igcrnx.mongodb.net/?retryWrites=true&w=majority
      var db = process.env.MONGO_URI;
      const con = await mongoose
        .connect(`${process.env.MONGO_URI}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("Database connected Successfully");
        });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },
};
