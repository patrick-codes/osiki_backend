const mongoose = require("mongoose");
require("dotenv").config();
module.exports = {
  connectDatabase: async (req, res) => {
    try {
      
      const con = await mongoose
        .connect(process.env.MONGO_URI, {
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
